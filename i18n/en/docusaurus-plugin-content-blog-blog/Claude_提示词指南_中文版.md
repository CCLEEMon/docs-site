---
title: Claude Prompting Guide
date: 2026-02-10
tags: [Claude, AI, Prompt]
---

# Claude Prompting Guide

<!-- truncate -->

## General Tips

### 1. Be Clear and Specific
- State your task or question clearly at the beginning of your message
- Provide background information and details to help Claude understand your needs
- Break down complex tasks into smaller, actionable steps

**Bad prompt:**
```
"Help me make a presentation."
```

**Good prompt:**
```
"I need to create a 10-slide PPT for the quarterly sales meeting. The content should cover Q2 sales performance, best-selling products, and Q3 sales targets. Please provide an outline and key points for each slide."
```

**Why it's better:** The good prompt provides specific details, including the number of slides, the purpose of the meeting, and the key themes to cover.

---

### 2. Provide Examples
- Give examples of the output you expect
- If you have specific format or style requirements, show Claude an example

**Bad prompt:**
```
"Write a professional email."
```

**Good prompt:**
```
"I need to write a professional email to a client about a project delay. Here's a similar email I've sent before:

'Dear [Client],
Regarding [Project Name], due to unexpected issues, our completion time will be delayed by about two weeks. We are working hard to resolve this and will keep you updated. Please feel free to contact us if you have any questions.
Best regards, [Your Name]'

Please draft a new email following a similar tone and structure for the current situation of a one-month delay due to supply chain issues."
```

**Why it's better:** Provides a concrete example of style and tone, giving Claude a clear reference point.

---

### 3. Encourage Step-by-Step Thinking
- For complex tasks, ask Claude to "think step by step" or "explain the reasoning process"
- This leads to more accurate and detailed responses

**Bad prompt:**
```
"How can I improve team productivity?"
```

**Good prompt:**
```
"I want to improve my team's productivity. Please think through the following factors step by step:
1. Current productivity barriers (e.g., too many meetings, unclear priorities)
2. Potential solutions (e.g., time management techniques, project management tools)
3. Implementation challenges
4. Methods to measure effectiveness

For each step, briefly explain your reasoning, and provide a summary at the end."
```

**Why it's better:** Asks Claude to think systematically about the problem, provides structured guidance, requires reasoning explanations, and asks for a final summary for easy reading.

---

### 4. Iterate and Refine
- If Claude's first response isn't ideal, ask for clarification or modifications
- You can say "This is good, but can you adjust X to make it more like Y?"

**Bad prompt:**
```
"Make it better."
```

**Good prompt:**
```
"This is a good start, but please make the following adjustments:
1. Change the tone to be more casual and friendly
2. Add a specific case study of how the product helped a customer
3. Shorten the second paragraph, focusing on benefits rather than features"
```

**Why it's better:** Provides specific feedback and clear improvement directions, allowing Claude to make targeted adjustments rather than guessing what "better" means.

---

### 5. Leverage Claude's Knowledge
- Claude has broad knowledge across many fields—don't hesitate to ask
- Provide relevant background and details to make Claude's responses more targeted

**Bad prompt:**
```
"What is marketing? How do I do marketing?"
```

**Good prompt:**
```
"I'm developing a marketing strategy for a new eco-friendly cleaning product. Please provide an overview of current green marketing trends, including:
1. Key messaging strategies that resonate with eco-conscious consumers
2. Effective channels to reach this audience
3. Examples of successful green marketing campaigns from the past year
4. Potential pitfalls to avoid (e.g., being accused of greenwashing)

This information will help me shape my marketing direction."
```

**Why it's better:** Requests specific and contextually relevant information, provides background for use, helping Claude organize the response in the most relevant way.

---

### 6. Use Role-Playing
- Ask Claude to respond from a specific role or perspective

**Bad prompt:**
```
"Help me prepare for a negotiation."
```

**Good prompt:**
```
"You are a fabric supplier for my backpack manufacturing company. I'm preparing to negotiate with this supplier, aiming for a 10% price reduction. As the supplier, please provide:
1. Three possible objections to the price reduction
2. Counterarguments from my perspective for each objection
3. Two alternative solutions the supplier might propose (instead of direct price reduction)

Then switch back to my role and provide advice on how to best advance the negotiation as the buyer."
```

**Why it's better:** Explores multiple perspectives of the negotiation through role-playing, providing more comprehensive preparation. Role-playing also allows Claude to better embody the details of a specific perspective, improving response quality.

---

## Task-Specific Tips

### Content Creation

**1. Define Your Audience**

**Bad prompt:**
```
"Write something about cybersecurity."
```

**Good prompt:**
```
"I need to write a blog post about cybersecurity best practices for small business owners. The audience has low technical proficiency, so the content should:
1. Be easy to understand, avoiding technical jargon as much as possible
2. Be practical, providing actionable advice that can be quickly implemented
3. Be engaging with a touch of humor

Please provide an outline for a 1000-word blog post covering the top 5 cybersecurity practices these business owners should adopt."
```

**2. Define Tone and Style**

**Bad prompt:**
```
"Write a product description."
```

**Good prompt:**
```
"Please help me write a product description for a new ergonomic office chair. Use a professional but engaging tone. The brand voice is friendly, innovative, and health-conscious. The description should:
1. Highlight the chair's key ergonomic features
2. Explain how these features benefit user health and productivity
3. Briefly mention the sustainable materials used
4. End with a call-to-action encouraging readers to try it

Target around 200 words."
```

**3. Define Output Structure**

**Bad prompt:**
```
"Create a company performance presentation."
```

**Good prompt:**
```
"I need to create a Q2 performance presentation. Please organize it with the following structure:
1. Overview
2. Sales Performance
3. Customer Acquisition
4. Challenges
5. Q3 Outlook

For each section, suggest 3-4 key points and recommend a suitable data visualization type (e.g., charts, line graphs)."
```

---

### Document Summarization and Q&A

1. **Be Clear About What You Want** — Specify the direction, content type, and output structure of the summary
2. **Use File Names** — Refer to attached documents by their file names
3. **Request Source Citations** — Ask Claude to cite specific paragraphs or page numbers from the document in responses

**Bad prompt:**
```
"Summarize this report for me."
```

**Good prompt:**
```
"I've attached a 50-page market research report titled '2023 Tech Industry Trends'. Please provide a 2-paragraph summary focused on AI and machine learning trends. Then answer the following questions:
1. What are the top three enterprise AI applications this year?
2. How is machine learning affecting job roles in the tech industry?
3. What potential risks or challenges in AI implementation are mentioned in the report?

Please cite specific sections or page numbers in your responses."
```

---

### Data Analysis and Visualization

**Bad prompt:**
```
"Analyze our sales data."
```

**Good prompt:**
```
"I've attached a spreadsheet named '2023 Sales Data'. Please analyze the data and present key findings in the following format:

1. Executive Summary (2-3 sentences)

2. Key Metrics:
   - Total sales by quarter
   - Best-performing product categories
   - Fastest-growing regions

3. Trends: List 3 notable trends, each with a brief explanation

4. Recommendations: Provide 3 data-driven recommendations, each with a brief rationale

After completing the analysis, suggest three effective data visualization methods to present these findings."
```

---

### Brainstorming

**1. Generate Diverse Ideas**

**Bad prompt:**
```
"Give me some team building activity ideas."
```

**Good prompt:**
```
"We need to plan team building activities for a 20-person remote team. Please help me brainstorm:
1. Propose 10 online team building activities that promote collaboration
2. For each activity, briefly explain how it fosters team collaboration
3. Mark which activities are best suited for:
   a) Ice-breaking
   b) Improving communication
   c) Problem-solving exercises
4. Recommend one low-cost and one premium option for each"
```

**2. Request Specific Format**

**Bad prompt:**
```
"Compare several project management software options."
```

**Good prompt:**
```
"We're considering three project management tools: Asana, Trello, and Microsoft Project. Please compare them in a table format using the following criteria:
1. Core features
2. Ease of use
3. Scalability
4. Pricing (include specific plans if possible)
5. Integration capabilities
6. Best use cases (e.g., small teams, enterprises, specific industries)"
```

---

## Troubleshooting, Reducing Hallucinations, and Improving Performance

1. **Allow Claude to Admit Uncertainty** — Tell it "If you're unsure, just say you don't know"
2. **Break Down Complex Tasks** — If a task is too large, split it into smaller steps and complete them one by one
3. **Provide Complete Context Each Time** — Claude doesn't remember previous conversations, so provide necessary background each time

---

## Comprehensive Examples

### Example 1: Marketing Strategy Development

**Bad prompt:**
```
"Help me develop a marketing strategy."
```

**Good prompt:**
```
"As a senior marketing consultant, please help me develop a comprehensive marketing strategy for a new eco-friendly smartphone accessory. The target audience is environmentally conscious millennial and Gen Z consumers. Please provide a detailed strategy including:

1. Market Analysis: Industry trends, 2-3 competitor strategies, market size projections
2. Target Audience Profile: Ideal customer description and pain points
3. Marketing Mix: Product highlights, pricing strategy, channel selection, comparison of 5 promotion channels and 3 creative campaigns
4. Content Strategy: 5 content themes and suggested content types
5. KPIs and Measurement: 5 key metrics and recommended tools

Present using headings and bullet points, explaining reasoning or providing examples where appropriate. Finally, identify potential challenges and provide coping strategies."
```

---

### Example 2: Financial Report Analysis

**Bad prompt:**
```
"Analyze this financial report."
```

**Good prompt:**
```
"I've attached the company's Q2 financial report 'Q2_2023_Financial_Report.pdf'. Please act as a senior CFO, analyze the report, and prepare a board briefing with the following structure:

1. Executive Summary (3-4 sentences)
2. Financial Performance Overview: Revenue (compared to last quarter and same period last year), Profit Margins (Gross/Net), Cash Flow
3. Key Performance Indicators (table format, with explanation for each KPI)
4. Business Segment Analysis: Performance of top three segments and reasons
5. Balance Sheet Review: Significant changes and key ratios
6. Forward-Looking Statements: 3 predictions for Q3 and 2-3 strategic recommendations
7. Risk Assessment: 3 potential financial risks and mitigation strategies
8. Peer Comparison: Compare with 2-3 competitors, identify strengths and weaknesses

Use charts to visualize data where appropriate. Clearly state any assumptions.
After completing the analysis, list 5 questions board members might ask and suggested responses.
Finally, condense the entire analysis into one paragraph for me to use as an opening statement at the board meeting."
```
