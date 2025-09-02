---
title: Adding Styles
sidebar_position: 2
---

# Styling Gen-Z Elements

Gen-Z.js works seamlessly with CSS. You can style elements based on their Gen-Z attributes for consistent, themed interfaces.

## Attribute-Based Styling

### Style by Gen-Z Attributes

```css
/* Style all alert buttons */
[alertz] {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

/* Style value display elements */
[getz] {
  background: #f8f9fa;
  padding: 8px 12px;
  border-radius: 4px;
  font-family: monospace;
  border: 1px solid #dee2e6;
}

/* Style form inputs with state binding */
[letz] {
  border: 2px solid #007bff;
  padding: 8px 12px;
  border-radius: 4px;
  outline: none;
}

/* Style toggle buttons */
[togglez] {
  background: #6c757d;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
}
```

## Interactive States

### Hover Effects

```css
[alertz]:hover {
  background: #0056b3;
  transform: translateY(-1px);
}

[togglez]:hover {
  background: #5a6268;
}
```

## Custom Classes for Enhanced Effects

### Animation Classes

```css
.hover-effect {
  background: #28a745 !important;
  color: white !important;
  transform: scale(1.1);
  transition: all 0.3s ease;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 0.5s ease-in forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
```

## Common Patterns

### Form Styling

```css
/* Style all Gen-Z form elements consistently */
[letz],
[clearz],
[submitz] {
  margin: 8px 0;
  font-family: inherit;
}

[letz]:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}
```

### Button Groups

```css
.button-group [alertz],
.button-group [togglez],
.button-group [clickz] {
  margin-right: 8px;
  display: inline-block;
}
```

## Best Practices

### ✅ Do

- Use attribute selectors for consistent theming
- Add transitions for smooth interactions
- Combine with regular CSS classes
- Test with different Gen-Z attributes

### ❌ Don't

- Override essential functionality with CSS
- Use `!important` unless necessary
- Forget hover and focus states
- Make critical content invisible

Perfect for creating cohesive,
