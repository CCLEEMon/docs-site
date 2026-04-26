---
title: Feature Guide
slug: feature-guide
sidebar_position: 3
schema: Article
rag: true
rag_tags: ["Skills", "Memory", "Task History", "Best Practices"]
---

Deep dive into Aigent's advanced features to improve your efficiency.

---

## In This Guide

- [Feature Overview](#1-feature-overview)
- [Skills System](#2-skills-system)
- [Memory Management](#3-memory-management)
- [Task History](#4-task-history)
- [Best Practices](#5-best-practices)

---

## 1. Feature Overview

### 1.1 Smart Chat

- **Streaming Output**: Real-time AI response display
- **Tool Calling**: Agent can call external tools to get information
- **Tavily Search**: Online search for real-time information
- **Skill Enhancement**: Bind skills to enhance Agent capabilities

### 1.2 Three-layer Memory System

| Memory Type | Retention | Purpose |
|-------------|-----------|---------|
| Session Memory | Current session | Temporary conversation context |
| Short-term Memory | 7 days | Recent interaction records |
| Long-term Memory | 30 days | Important preferences/background |

**Long-term Memory** is automatically extracted by AI from conversations, storing user preferences, project background, and other important information.

---

## 2. Skills System

### 2.1 What are Skills?

Skills are predefined Prompt templates that can enhance Agent's specific capabilities.

### 2.2 Skill Types

The skills page contains two tabs:
- **My Skills**: Skills you created
- **Public Skills**: Skills publicly shared by other users, ready to use

### 2.3 Create Skill

1. Go to "**Skills**" page in left sidebar
2. Click "**New Skill**"
3. Fill in:
   - **Name**: Skill name (required)
   - **Description**: Skill purpose description
   - **System Prompt**: AI role definition (required)
   - **Model Override** (optional): Specify independent LLM provider and model for skill
   - **Public Setting**: Enable for other users to discover and use this skill
4. Click "**Save Skill**"

### 2.4 Use Example Templates

If you're a beginner, you can use preset example templates:
1. Go to skills page
2. Example skills will be shown when list is empty
3. Click example to create based on template

### 2.5 Skill Example

```
Name: Code Assistant
Description: Help write and optimize code
System Prompt: You are a professional programming assistant, skilled at writing clean, efficient code...
```

---

## 3. Memory Management

### 3.1 Enter Memory Page

There are two ways to access Agent's memory management:
1. **Chat Page**: Click "**Memory**" button in top bar
2. **Settings Page**: Click "**Manage Memory**" button in Agent settings

### 3.2 View Memory

Memory is categorized in three tabs:
- **Session Memory**: Temporary context for current conversation
- **Short-term Memory**: Auto-expires in 7 days
- **Long-term Memory**: Sorted by importance, expires in 30 days

### 3.3 Update Memory

For **Long-term Memory**, you can:
- Adjust importance score
- Add or modify tags

### 3.4 Clear Memory

- Can clear by type (session/short-term/long-term)
- Can clear all memory
- Cannot be recovered after clearing

---

## 4. Task History

### 4.1 Chat Page Task History

Task history is displayed in the **right sidebar** of chat page, always visible:

- Shows recent task list for this Agent
- Contains:
  - Conversation summary
  - Execution status (in progress/completed/failed)
  - Timestamp

### 4.2 Dashboard Recent Tasks

The **Recent Tasks** section in the middle of Dashboard page also shows **all Agents' recent tasks** for quick overview of overall activity.

---

## 5. Best Practices

### Security Recommendations

- Configure appropriate risk level for each Agent
- Regularly clean up unused API Keys
- Don't share sensitive information in conversations

### Efficiency Recommendations

- Create dedicated Agents for specific tasks
- Use skills system to enhance capabilities
- Reasonably configure memory levels

### Cost Optimization

- Choose appropriate model based on task complexity
- Use lightweight models for simple tasks (e.g., GPT-4o-mini, DeepSeek-V3)
- Use advanced models for complex reasoning (e.g., Claude 4, GPT-4o)

---

## Related Docs

- 🚀 [Quick Start](../quick-start) - From registration to first conversation
- ❓ [Help & Support](../help-support) - FAQ and troubleshooting
