---
layout: page
permalink: /publications/
title: Publications
description: Conference papers and preprints. Each entry has a short summary of the key idea; click an illustration to enlarge it.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

{% include bib_search.liquid %}

<div class="publications">

<h2 class="pub-group">Conference Papers</h2>
{% bibliography --group_by none --query @inproceedings %}

<h2 class="pub-group">Preprints &amp; Under Review</h2>
{% bibliography --group_by none --query @unpublished %}

</div>
