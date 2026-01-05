# Visual + Content Standards (Template Base)

Use this guide for any new edits or slides to keep the proposal consistent.

## 1) Layout & Hierarchy
- Use `SlideShell` for every slide to keep spacing, max width, and scroll behavior consistent.
- Never add nested `data-allow-vertical-scroll` containers inside slides. `SlideShell` already provides the vertical scroll area.
- Structure content in clear, numbered or labeled blocks when two sections could compete (e.g. 01 -> 02 for diagnosis, problem -> projection).
- Keep one dominant focal area per slide. Secondary blocks should be smaller and aligned to the same grid.
- Prefer a single, logical read order: top-left to bottom-right on desktop; linear stack on mobile.
- Agent modals: use the 3-step infographic grid (Entrada/Analise/Acao or equivalent) with max 2 bullets per item.

## 2) Typography Rules
- Body text: use `text-body`.
- Captions/notes: use `text-xs`.
- Eyebrow labels: use the `SlideShell` eyebrow with uppercase tracking and `text-[length:var(--text-eyebrow)]`.
- Section titles: use `SlideShell` title sizes (`--text-section` or `--text-section-compact`).
- Avoid `text-sm` for body content unless it is truly secondary or UI chrome.

## 3) Card & Surface System
- Primary surfaces: `bg-white/5`, `border-white/10`, `rounded-2xl`.
- Subtle emphasis: use a gradient with 12-18% opacity and a matching border (`color 30%`).
- Keep padding consistent: `p-5` for standard cards, `p-6` for key cards.
- Avoid light (white) panels inside dark modals unless it is a data visualization preview.

## 4) Color Discipline
- Use the tech accent `#00E5FF` for tools, dashboards, and controls.
- Use the success accent `#00FF94` for gains, ROI, and positive outcomes.
- Use amber/red only for risks or warnings.
- Do not mix multiple accent colors inside the same metric card unless it is a comparison.

## 5) Content Neutrality
- Do not use client-specific names (e.g. company names) in text. Use neutral wording like "cliente" or "operação".
- Keep content generalized so this template can be reused for any client.

## 6) Quick QA Checklist
- No overlapping text or clipped content on 1440x900 and 390x844.
- All body copy uses `text-body`; captions use `text-xs`.
- Card radius is consistent (`rounded-2xl`) across slides.
- Horizontal scroll still works; vertical scroll works only inside the `SlideShell` content area.
