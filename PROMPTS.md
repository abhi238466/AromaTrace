# PROMPTS LOG – Week 7 AI API Integration

## Project

AromaTrace – Essential Oil Traceability System

---

# Prompt Version 1

## Prompt

Generate a professional product description for "{Batch Name} Essential Oil".

## Example Input

Tea Tree Oil

## Example Output

A simple professional product description was generated for Tea Tree Essential Oil without any specific formatting.

---

# Prompt Version 2

## Prompt

Generate a detailed product description with title, description, and key benefits in Markdown format.

## Example Input

Lavender Oil

## Example Output

The AI generated a structured response with a product title, description, and key benefits using Markdown formatting.

---

# Prompt Version 3 (Final)

## Prompt

Generate a professional product description for "{Batch Name} Essential Oil".

IMPORTANT:
Return ONLY valid Markdown.

Use EXACTLY this format:

# Product Title

## Description

Write one paragraph (80–100 words).

## Key Benefits

- Benefit 1
- Benefit 2
- Benefit 3
- Benefit 4

Rules:
- Use Markdown headings (# and ##).
- Use bullet points (-).
- Do NOT return plain text.
- Do NOT write "Option 1".
- Do NOT explain anything outside the format.
- Use simple professional English.

## Example Input

Lemongrass Oil

## Example Output

The AI generated a professional product description with a product title, detailed description, and key benefits in a structured format.

---

# Best Prompt

Prompt Version 3 worked best because it generated more structured and consistent product descriptions. It provided a clear product title, a detailed description, and key benefits in a professional format. Although the Markdown headings were not always rendered perfectly in the frontend, the generated content was accurate, readable, and suitable for the AromaTrace application.

---

# System Role

The AI was used as a professional product description generator for essential oil products. It generates high-quality descriptions based on the batch name entered by the user and returns content suitable for display in the AromaTrace application.