---
title: Selectors
sidebar_position: 1.3
---

# Selectors

Gen-Z.js uses standard CSS selector syntax for targeting elements across all attributes.

## Basic Selectors

### ID Selector

```html
<div id="myElement">Content</div>
<button togglez="#myElement">Toggle</button>
```

### Class Selector

```html
<div class="highlight">Content</div>
<button togglez-class=".highlight:active">Toggle Class</button>
```

### Tag Selector

```html
<p>Paragraph content</p>
<button hidez="p">Hide All Paragraphs</button>
```

### Attribute Selector

```html
<input name="username" type="text" />
<button clearz="[name='username']">Clear Username</button>
```

## Multiple Selectors

Use commas to target multiple elements:

```html
<div id="panel1">Panel 1</div>
<div id="panel2">Panel 2</div>
<button hidez="#panel1, #panel2">Hide Both Panels</button>
```

## Quick Reference

| Selector         | Targets                 | Example                    |
| ---------------- | ----------------------- | -------------------------- |
| `#myId`          | Element with ID         | `showz="#popup"`           |
| `.myClass`       | Elements with class     | `hidez=".error"`           |
| `div`            | All div elements        | `clearz="input"`           |
| `[name="field"]` | Elements with attribute | `togglez="[data-modal]"`   |
| `#id1, .class1`  | Multiple elements       | `hidez="#modal, .overlay"` |

## Supported Attributes

All Gen-Z.js attributes that target other elements use this syntax:

- `alertz-text`, `showz`, `hidez`, `togglez`
- `togglez-class`, `clearz`, `submitz`
- `fetchz` (for URLs, not selectors)

Simple, consistent, and familiar to anyone
