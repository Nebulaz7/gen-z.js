---
title: Introduction
sidebar_position: 1
---

# Introduction

## What is Gen-Z.js?

Gen-Z.js is a revolutionary JavaScript library designed for the modern web developer who values simplicity and speed. It empowers you to build interactive web applications using nothing but HTML attributes – no JavaScript knowledge required.

## The Problem We Solve

Traditional web development often requires:

- Deep JavaScript knowledge
- Complex build processes
- Heavy frameworks with steep learning curves
- Extensive boilerplate code

Gen-Z.js eliminates these barriers by bringing interactivity directly to your HTML.

## Core Philosophy

**HTML-First Development**: Your markup is your application. Add functionality through intuitive attributes that end with "z" – making them instantly recognizable and memorable.

**Zero Complexity**: No build tools, no complex configurations, no JavaScript expertise needed. Just include one script tag and start building.

**Lightweight by Design**: At just a few kilobytes, Gen-Z.js loads instantly and runs efficiently on any device.

## Key Features

### **Zero Learning Curve**

```html
<!-- Traditional approach -->
<script>
  document.getElementById("btn").addEventListener("click", () => {
    alert("Hello World!");
  });
</script>

<!-- Gen-Z.js approach -->
<button alertz="Hello World!">Click me</button>
```

### **Intuitive Syntax**

All Gen-Z.js attributes follow the same pattern – they end with "z":

- `alertz` - Show alerts
- `letz` - Create variables
- `getz` - Display values
- `setz` - Update state
- `clickz` - Handle clicks
- `submitz` - Handle form submissions

### **Built-in State Management**

```html
<input type="text" letz="username" placeholder="Enter your name" />
<p>Hello, <span getz="username"></span>!</p>
<button setz="username:Anonymous">Reset</button>
```

### **Real-time Reactivity**

Changes to your state automatically update the UI – no manual DOM manipulation required.

## Who Should Use Gen-Z.js?

- **Beginners** learning web development
- **Designers** who want to add interactivity without coding
- **Rapid prototypers** building MVPs quickly
- **Educators** teaching web fundamentals
- **Anyone** who wants simple, fast web interactivity

## Getting Started

Include Gen-Z.js via CDN:

```html
<script src="https://cdn.jsdelivr.net/gh/Nebulaz7/gen-z.js@1.1.0/dist/gen-z.min.js"></script>
```

That's it! You're ready to start building interactive web experiences.

## What Makes Gen-Z.js Different?

| Traditional JavaScript          | Gen-Z.js             |
| ------------------------------- | -------------------- |
| `addEventListener('click', fn)` | `clickz="action"`    |
| `document.getElementById()`     | `getz="variable"`    |
| Complex state management        | `letz="variable"`    |
| Manual DOM updates              | Automatic reactivity |
| Hundreds of lines               | A few attributes     |

---

_I hope you'll love using it, as it's made for every generation 😉_
