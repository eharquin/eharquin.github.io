---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 6
---

{% assign cv_pdf = '/assets/pdf/cv-enzo-harquin.pdf' | relative_url %}

<p>
  <a href="{{ cv_pdf }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf"></i> Download the PDF</a>
</p>

<object data="{{ cv_pdf }}" type="application/pdf" style="width: 100%; height: 85vh; border: 0">
  <p>Your browser cannot display the PDF inline. <a href="{{ cv_pdf }}">Download the CV</a> instead.</p>
</object>
