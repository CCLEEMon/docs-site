---
title: Fix WSL2 Cannot Reach Windows Host Proxy — Invisible Firewall Block
description: WSL2 ping/nc to host gets no response, all firewall inbound rules show NotApplicable. Root cause: vEthernet(WSL) has no Network Profile. One command to fix.
date: 2026-04-02
tags: [WSL2, Windows Firewall, Proxy, Dev Environment, VSCode, Claude-Code, Roo]
authors: [cclee]
schema: FAQPage
faqs:
  - q: "WSL2 can curl external sites directly but gets ConnectionRefused through proxy, why?"
    a: "The vEthernet(WSL) virtual NIC has no Network Profile, so all Windows firewall inbound rules are NotApplicable for that interface — the proxy port is silently blocked."
  - q: "Why doesn't adding a firewall inbound port rule fix it?"
    a: "Inbound rules bind to Network Profiles (Domain/Private/Public). vEthernet(WSL) belongs to none, so rules are skipped entirely — not denied, just ignored."
  - q: "Does the one-command fix create security risks?"
    a: "Set-NetFirewallProfile -DisabledInterfaceAliases 'vEthernet (WSL)' only disables the firewall on the WSL virtual NIC. Physical adapters are unaffected. The setting persists across reboots."
---

Encountered this issue while using AI coding tools (Claude Code, Roo) in WSL2 that need to access APIs through the Windows host proxy. Five dead ends later, found the root cause and a one-command fix.

## TL;DR

WSL2's `vEthernet (WSL)` virtual NIC is recreated on every launch. Windows Firewall cannot assign a Network Profile to it, so **all inbound rules are ineffective** (`EnforcementStatus: NotApplicable`). Don't add rules — disable the firewall on that interface directly:

```powershell
# Run in Windows PowerShell (Administrator)
Set-NetFirewallProfile -DisabledInterfaceAliases "vEthernet (WSL)"
```

## Problem

Environment: Windows 10 21H2 + WSL2 2.5.10.0 (NAT mode), Clash Verge on host (port 7897, Allow LAN enabled).

Symptoms:

```bash
# Ping host from WSL — no response
ping 172.22.80.1

# Test proxy port — no response
nc -zv 172.22.80.1 7897

# Claude Code / Roo error
# API Error: ConnectionRefused

# But direct external access works fine
curl https://example.com  # OK
```

On the Windows side, Clash is healthy: `netstat` shows `0.0.0.0:7897` listening, and `Test-NetConnection localhost 7897` succeeds.

## Root Cause

**`vEthernet (WSL)` is a virtual NIC dynamically created by WSL2 on every launch.** Windows Firewall's Network Profiles (Domain / Private / Public) cannot be associated with this interface.

This means:

1. Firewall inbound rules bind to Profiles
2. vEthernet(WSL) belongs to no Profile
3. All inbound rules show `EnforcementStatus: NotApplicable` for this interface
4. **Rules are simply skipped** — not denied, not evaluated at all

No amount of port rules or InterfaceAlias bindings will work, because the rules never execute against this interface.

## Solution

### Step 1: Confirm the Root Cause

In Windows PowerShell (Administrator):

```powershell
# Check the virtual NIC
Get-NetAdapter | Where-Object { $_.Name -like "*WSL*" }

# Check rule enforcement status
Get-NetFirewallRule -DisplayName "*7897*" |
  Get-NetFirewallInterfaceFilter |
  Get-NetFirewallPortFilter |
  Format-Table -Property * -AutoSize
```

If rules exist but WSL still can't connect, Profile enforcement is the issue.

### Step 2: Fix with One Command

```powershell
# Disable firewall on the WSL virtual NIC only
Set-NetFirewallProfile -DisabledInterfaceAliases "vEthernet (WSL)"
```

Effects:
- Only applies to the `vEthernet (WSL)` virtual NIC
- Physical adapters (Wi-Fi, Ethernet) remain fully protected
- Setting persists across reboots

### Step 3: Verify

```bash
# Test connectivity from WSL
nc -zv 172.22.80.1 7897
# Output: Connection to 172.22.80.1 7897 port [tcp/*] succeeded!

# Test proxy
curl -x http://172.22.80.1:7897 https://api.anthropic.com
```

<InfoBox variant="warning" title="Important Notes">

- If your Clash port is not 7897, replace it with your actual port — the key is fixing the firewall interface, not the port
- WSL updates or major Windows updates may reset the virtual NIC config; re-run the same command if the issue recurs
- Windows 10 does not support WSL2's `mirrored` networking mode (only Windows 11 23H2+), do not try this direction
- `vEthernet (WSL)` IP may change on each launch; dynamically fetch it in `.bashrc`:

```bash
# Auto-detect host IP in .bashrc
export WINDOWS_IP=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}')
export http_proxy="http://${WINDOWS_IP}:7897"
export https_proxy="http://${WINDOWS_IP}:7897"
```

</InfoBox>

## Dead Ends: 5 Directions Ruled Out

For anyone currently troubleshooting, here are the paths already confirmed as dead ends:

| # | Direction | Result | Reason |
|---|-----------|--------|--------|
| 1 | Proxy environment variables | Ruled out | `.bashrc` unset/export pattern is by design for model switching |
| 2 | Clash Allow LAN not enabled | Ruled out | Allow LAN is on, listening on `0.0.0.0:7897`, localhost works |
| 3 | Firewall port rule | Ruled out | Added port 7897 inbound rule, still blocked — NotApplicable |
| 4 | Bind rule to InterfaceAlias | Ruled out | `Set-NetFirewallRule -InterfaceAlias "vEthernet (WSL)"` had no effect |
| 5 | Mirrored networking mode | Ruled out | Windows 10 does not support it |

The key insight: **we kept trying to add rules, but the problem wasn't missing rules — it was that rules don't apply to this interface at all.**

---

<div className="text-center my-8">
  <a href="/about" className="button button--primary button--lg">Contact Us</a>
</div>
