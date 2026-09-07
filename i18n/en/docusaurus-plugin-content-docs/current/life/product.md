---
title: About Life (CCL.AI记账)
description: Meet Life (CCL.AI记账, WeChat mini program "Life 记账健康助手") — an AI money & mood journal that logs expenses from one sentence or a photo, keeps mood and spending side by side, and never preaches
project: life
schema: Article
date: 2026-09-07
sidebar_position: 9
rag: true
rag_tags: ["Life", "CCL.AI记账", "Product Introduction", "Natural Language Expense Tracking", "Mood Journal", "Photo Logging", "Privacy"]
---

import InfoBox from '@site/src/components/InfoBox'

# CCL.AI记账 — an AI money & mood journal

**Life** (Chinese name **CCL.AI记账**; search "**Life 记账健康助手**" in WeChat to open) is a natural-language-driven money & mood journal: logging, mood entries, medication tracking, mood self-checks, and asset ledgers all live in a single input box. Say "spent 23 on a taxi today, feeling a bit tired" and AI splits it into one expense and one mood entry; snap a receipt and it reads out each line item. And it always speaks from real data — it never invents a number.

The mini program interface is in Chinese. Scan to open:

<p align="center">
  <img src="/images/docs/life/product-qrcode.jpg" alt="Life 记账健康助手 mini program code" width="180" loading="lazy" />
</p>

<InfoBox variant="info" title="First, to be clear">

Life is a self-management tool, not a medical tool: self-check results are for self-assessment reference only and do not constitute a medical diagnosis; if you are in an acute phase, or your state keeps getting worse, please seek doctors and professional support first.

</InfoBox>

## What is Life

In one sentence: **you talk, it logs; you confirm, it writes.**

| Capability | What it does |
|---|---|
| Natural-language logging | Log / edit / query / delete / backfill in bulk / transfer / lend-borrow in one sentence — AI proposes, you confirm |
| Photo logging | Snap a receipt → AI transcribes it → splits into multiple line items → check and confirm to write once |
| Mood entries | Structured signals like triggers, body reactions, and coping — shown side by side with spending |
| Mood self-checks | Neutral-named self-check scales based on widely used international instruments, with visualized history |
| Medication tracking | Dose check-offs and history |
| Asset ledger | Multi-currency accounts, cross-currency transfers, balance adjustments, lend-borrow records with auto settlement |
| AI companion chat | Empathetic replies + spending analysis grounded in real data (on the [web app](../web-guide)) |
| Crisis-signal care | When a self-check crosses a threshold of concern, help-line info appears quietly — no judgment, no nagging |
| One account everywhere | WeChat mini program + web app (life.ccleeai.com) share the same account and the same data |

![Life mini program home (dark mode): one-sentence input bar, spending KPIs, mood & stress entry, recent records](/images/docs/life/product-home.jpg)

## Why I built Life: a founder's story

I have lived with depression and anxiety for years — diagnosed in 2019. But the diagnosis didn't mark a beginning; it only gave a name to what had already been happening: the illness didn't arrive in 2019. Since then I have been on medication, to this day, and I stopped twice in between — both times for livelihood: once when I was out of work and desperately job-hunting, and the medication kept me drowsy all day, impossible to work; once after I had finally landed a job, and I stopped on my own again.

Off the medication, I quickly turned into a different person: wound tight all over, set off by the smallest thing, speaking sharp and fast. When work pressure piled up, verbal hurt came out before I knew it — and the people who loved me most were hurt the deepest. It was in those days that I finally understood my pre-diagnosis self: the things I said and did all had their origins. That kind of harm cannot be repaired, nor is it something to be forgiven. Later I went back on medication, steadily, and have stayed on it ever since. Back then I didn't yet know that this illness's entanglement with money went far beyond the cost of the pills.

At my worst, I was often drained of all strength, bedridden for months on end — days disappearing into sleep; in those months I barely said a word: not to people, not even to animals. That isn't introversion, and it isn't "not feeling like talking" — this illness, itself, takes you there.

One thing to declare first: I only speak of my own experience, which does not represent everyone living with this illness — the same illness lands differently in different lives. That is why I would never dare say "I understand how you feel" to a single person who shares it — in my eyes, that sentence is crueler than abuse. In those years, two scenes kept recurring:

**One: emotional spending.** On low days, shopping is the cheapest form of "self-rescue" — psychology calls it compensatory consumption (retail therapy): rewarding yourself to feel better. It does bring instant comfort, but money leaks away exactly when you are most emotionally vulnerable, and the regret over the bill afterwards deepens the burden — a loop of "low mood → retail therapy → more anxiety". This is not a minority experience: since the pandemic, "spending on feelings" has become a widely discussed phenomenon, and soothing yourself with purchases under pressure is something many ordinary people know well.

**Two: quitting every expense tracker.** I tried nearly every mainstream tracking app and abandoned them all within two weeks. Later I learned this is not just me — most users churn at the manual-entry step: pulling out your phone to fill in a form after every purchase is inherently unnatural, while the payoff (spending-structure insight) takes a year or more to appear. **High input cost and slow feedback — the two biggest mountains for tracking apps.**

For the mood-sensitive there is a third barrier: **tracking money is itself anxious.** Red overspend warnings everywhere, loud category color blocks, copy that scolds you for spending too much — the design language of traditional expense trackers is a second hit for someone already wrapped in negative emotions.

And the existing landscape offers no way out: traditional trackers are tool-first, tedious to enter, and speak the language of "fiscal discipline" — unfriendly to the mood-sensitive; mood apps have feelings but no money, and cannot answer "how does my mood shape my spending"; the emerging "mood × money" attempts mostly stop at sticking a mood label on each entry — no AI extraction, no self-check scales, let alone privacy encryption.

**The deep water of "money + mood + medication + self-checks + crisis care" in one place — nobody was seriously building it.** Yet this is the real texture of a mood-sensitive person's life: money, mood, medication, and state interlock; they should not be split across five apps.

### Why an AI chat

One more thing — the deepest part of this story.

With this illness, many emotions, behaviors, and ways of thinking differ from those of people who haven't lived it — and if you haven't lived it, truly feeling it is very hard. So the most common kind of comfort — a relative's "cheer up", "don't overthink it", or a generic AI's rehearsed "I understand you" — often fails to hold you and instead hurts more, breeding resentment: the one comforting doesn't truly understand, and the one being comforted can tell instantly.

Is there another possibility: a companion who can know how you've been — not because it claims to read you, but because it lives inside your records: how far your mood has swung, where the money went, whether the meds were taken on time. Every reply it gives comes from those real records, not from a script that fits everyone.

In the months I spent bedridden, I never said one complete sentence to anyone; "reaching out for help" was never even on the table. I know that state too well: unable to speak, too tired to explain, and afraid of being comforted wrong.

And one layer harder to tell: when emotions are unstable, words wound, and the one wounding often doesn't notice — by the time I did, the cracks were already there. People get hurt, get tired, and leave — and no one is to blame. A companion who won't be wounded by my words, who won't leave because of them, who can bear me at my most unstable — that is exactly what I needed.

This is the core purpose of the AI chat I built: **not another smooth-talking chatbot, but a companion grounded in real data who can hold you.** It never says "I understand you" — it hasn't lived your experience, and hasn't earned that sentence; it can only see your records, speak your numbers, and stay beside you. It cannot replace doctors or family, but late at night, it will most likely be the presence that doesn't judge, doesn't preach, and doesn't go missing.

Life came from exactly that: **a tool I, as someone who lives through this, genuinely need — and dare to trust.** Put all of it into one mini program, and **catch the person first, then talk about bookkeeping.**

## Four design principles

### Input cost near zero: AI works, you confirm

Turn "filling forms" into "talking": you type a sentence, AI structures it, and the only thing you do is confirm. Bulk backfill and photo logging push the cost down to "snap once, tap once". For someone who often cannot bring themselves to say a single word, "pulling out a phone to fill in a form" is impossible to keep up — "saying one sentence" is nearly the only action left that still works. That is why the input box is Life's front door.

More importantly, **confirmation, not full automation**: AI only proposes, you decide. Every entry shows a clear candidate card before writing — checkable, undoable, category-editable. You stay in control of your own ledger — trust is the precondition for using AI products.

### Restrained design: safe colors, safe words

- **Restrained colors**: low-saturation warm gray palette, semantic colors only when necessary; fully adapted dark mode for late-night use;
- **Restrained words**: no blame, no pressure, no anxiety-selling. Overspend notes are neutral statements, not warnings; self-check results never use clinical judgment words, using gradients like "slightly up and down" instead; crisis-copy follows a "quietly reach out" principle — one restrained line of care plus a help-line number, nothing more;
- **Restrained information**: no splash ads, no red-dot bombardment, no daily check-in pressure. Habits grow from "logging is easy", not from "guilt if you don't".

### Mind and money, side by side

Tracking expenses alone can't answer "why did I overspend". Life puts income/expense and mood entries on the same timeline: low-mood days and high-spending days sit next to each other, so you can see the pattern yourself. Life deliberately refuses machine verdicts like "impulse purchase diagnosis" — seeing itself is what matters.

Structured mood and medication records have a second value: something objective to bring into conversations with your doctor, beyond subjective recall. For anyone on medication, "taking it on time" is never just a matter of willpower — money, state, and side effects all step in; recording doesn't judge any of that, it only makes it visible.

### Safety as the baseline: privacy and care

- **Sensitive data encrypted at rest**: mood, medication, and other sensitive entries are stored encrypted, with logs sanitized throughout;
- **Deletion is real**: self-service account deletion wipes all data in cascade (encryption keys included);
- **Crisis care**: when a self-check crosses a threshold of concern, the psychological help line (**12356**, 24/7) is offered quietly — guaranteed by the system itself, never depending on AI "goodwill".

## Real-life moments

**Log one entry with one sentence**
> Say "吃饭46" ("ate out, 46") and the candidate card shows a ¥46 dining expense — one tap to confirm, about 3 seconds end to end; the result bubble can be undone or re-categorized.

<img src="/images/docs/life/product-record-confirm.jpg" alt="One-sentence logging: AI parses and records; the result bubble can be undone or re-categorized" width="400" loading="lazy" />

**Batch-log from a receipt**
> One supermarket receipt, one photo → AI transcribes and splits it into 4 line items → check them and confirm to write once. Text-based bulk backfill for past days works too.

<img src="/images/docs/life/product-ocr-receipt.jpg" alt="Photo logging: one receipt split into multiple line items, check each then confirm" width="400" loading="lazy" />

**Regular self-checks and medication**
> Run a mood self-check every so often and watch the trend; tick off meds per dose; if a result crosses a threshold of concern, a help-line card appears quietly.

<img src="/images/docs/life/product-screening.jpg" alt="Mood & stress self-checks: neutrally named scales, results visible only to you" width="400" loading="lazy" />

**Bring data to your doctor**
> Mood trends, self-check history, and medication records are structured, objective data you can summarize and share when seeing your doctor. Recollection is biased by how you feel today — "I've been fine" or "it's been awful" are both subjective; a data-backed record helps your real state be seen more accurately.

**Ledgers**
> Auto-settled lend-borrow between friends, multi-currency transfers, balance calibration — money in life is more than a transaction stream.

## Who it's for

- **Living with depression or anxiety, managing day to day**: one place to keep money, mood, and medication together, with records you can bring to your doctor;
- **Troubled by emotional spending**: to see the link between spending and mood — not to be scolded by overspend warnings;
- **Wanting to track money but worn down by "discipline"**: tried tracker after tracker, gave up at the form-filling step;
- **Middle age**: career, family, and health pressing in at once — keep a record of how money and mood move together, a self-portrait in facts you owe no one;
- **Student years**: start bookkeeping with the first pocket money — habit before theory; living within your means is logged into being, not memorized;
- **Working life**: salary, rent, social obligations, emotional spending on one timeline — a paycheck landing is not the finish line; seeing how much was spent and how much stayed is how you learn which part of it is truly yours.

Whatever happens, Life does not preach — it only presents facts: your records, your own numbers; the conclusion is yours to draw.

## What it will not do

- **Invent numbers**: every amount and count in AI replies is checked against your real ledger; if it can't be verified, it stays unsaid;
- **Write without you**: everything goes through your confirmation first, undoable anytime;
- **Diagnose**: self-check results are for self-assessment reference only, never a medical diagnosis.

<InfoBox variant="warning" title="Please read">

Self-check results are for self-assessment reference only and do not constitute medical advice or diagnosis; if you are struggling, please seek professional help.
If you need someone to talk to, the "Me" (我的) tab in the mini program offers the psychological help line **12356** (24/7), one tap to call.

</InfoBox>

## Get started

- Search "**Life 记账健康助手**" in WeChat, or scan the code above;
- Step-by-step instructions: [WeChat Mini Program User Guide](../miniprogram-guide);
- Charts, chat mode, and the full feature set live on the [web app](../web-guide) (life.ccleeai.com) — you can copy its URL from the "Me" (我的) tab.

## Our values

> **AI serves people; people don't serve AI.** Natural language, photo logging, companion chat — every technology in Life serves one purpose: making life less effortful, not making you orbit the tool.
> **Warm companionship.** It doesn't judge why you spent; it quietly keeps the record, sees it with you, and hands you a phone line when you can't hold on.
> Restraint, because of gentleness.
