---
layout: page
title: MultiVector
permalink: /software/multivector/
description: Interactive visual environment for geometric algebra constructions.
nav: true
nav_order: 4
---

<div class="text-center mb-3">
  <img
    src="{{ '/assets/img/projects/multivector-icon.svg' | relative_url }}"
    alt="MultiVector application icon"
    class="img-fluid"
    width="180"
    height="180"
  >
</div>

**MultiVector** is an interactive visual tool for building geometric constructions directly from multivector expressions. It is designed for geometric algebra research, exploration, and teaching.

<a href="https://eharquin.github.io/multivector/" class="btn btn-primary" role="button" target="_blank" rel="noopener noreferrer">Launch MultiVector</a>

The application supports interactive constructions whose dependent objects update automatically. It includes geometric, outer, inner, join, dual, reverse, and sandwich products, as well as animation and visual appearance controls.

The current development version includes adapters for several geometric algebra models, including PGA, VGA, CGA, CCGA, and ACGA, in two and three dimensions. Constructions can be shared, saved locally, and exported as SVG or PNG images.

## Vector Geometric Algebra

The VGA adapters provide a direct environment for exploring vectors and their algebraic operations in two and three dimensions. They serve as the most accessible entry point to MultiVector and as a foundation for the more specialized models below.

## Projective Geometric Algebra

The PGA adapters extend these constructions to projective geometry in two and three dimensions. They support finite and ideal geometric objects, joins, intersections, and transformations within a unified algebraic model.

## Conformal Geometric Algebra

The CGA adapters support conformal constructions in two and three dimensions, including representations involving points, lines, circles, planes, and spheres.

## Research and Experimental Models

MultiVector also includes experimental adapters for **Arbitrary Conformal Geometric Algebra (ACGA)** and **Conic Conformal Geometric Algebra (CCGA)**. These models are used to explore higher-order geometric constructions and ongoing research questions.

MultiVector is under active development and is available at **[eharquin.github.io/multivector](https://eharquin.github.io/multivector/)**.
