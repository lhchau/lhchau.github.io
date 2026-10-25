---
layout: about
title: About
permalink: /
subtitle: Ph.D. Student in Computer Science · Rochester Institute of Technology
tagline: >
  I work on <strong>LLM post-training</strong>: knowledge distillation, machine unlearning, and robust fine-tuning.
  I try to understand <em>why</em> a method works or fails, and then turn that into a simple, principled fix.
venues: [NeurIPS, AISTATS, ACL, EMNLP]

profile:
  image: chau.jpeg

research:
  - icon: fa-solid fa-layer-group
    title: Knowledge Distillation
    text: How temperature and the choice of divergence shape what a small model learns from a large one.
    tags: [EMNLP 2026, 2 under review]
  - icon: fa-solid fa-eraser
    title: Machine Unlearning
    text: Making fine-tuned LLMs forget specific training data while keeping everything else they know.
    tags: [Under review]
  - icon: fa-solid fa-shield-halved
    title: Robust Fine-Tuning
    text: Why parameter-efficient fine-tuning fails to remove backdoors, and how to make it work.
    tags: [ACL 2026 Findings]
  - icon: fa-solid fa-mountain
    title: Optimization Theory
    text: Sharpness-aware minimization, from convergence guarantees to robustness against noisy labels.
    tags: [NeurIPS 2024, AISTATS 2026]

education:
  - degree: Ph.D. in Computer Science
    school: Rochester Institute of Technology
    place: Rochester, NY, USA
    years: 2025 – present
    detail: Golisano College of Computing and Information Sciences · Advisor <a href="https://lgchen.org/">Prof. Lingwei Chen</a>
  - degree: B.S. in Computer Science
    school: VNUHCM – University of Science
    place: Ho Chi Minh City, Vietnam
    years: 2020 – 2024
    detail: Advanced Program in Computer Science (APCS) · GPA 3.82/4.00

news: true # includes a list of news items
selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page
---

I am a Ph.D. student in Computer Science at the Golisano College of Computing and Information Sciences, [Rochester Institute of Technology](https://www.rit.edu/), advised by [Prof. Lingwei Chen](https://lgchen.org/). Before RIT, I received my B.S. in Computer Science from the Advanced Program in Computer Science (APCS) at VNUHCM – University of Science in Vietnam, where I worked with [Prof. Minh-Triet Tran](https://scholar.google.com/citations?user=lt2ATkkAAAAJ).

My research focuses on what happens to large language models **after pre-training**. How do we compress them into smaller students, make them forget data they should not keep, and fine-tune them without inheriting hidden backdoors? My approach is to first find the mechanism behind a method's success or failure, often through gradient or spectral analysis, and then design a fix that follows from it. Before moving to LLMs, I worked on the theory of sharpness-aware minimization.
