# Hoverz

The `hoverz` attribute adds and removes CSS classes on hover, enabling interactive visual effects without JavaScript.

## Syntax

```html
<element hoverz="className"></element>
```

## How It Works

- **Mouse enter**: Adds the specified class to the element
- **Mouse leave**: Removes the specified class from the element
- **Multiple classes**: Separate with spaces for multiple classes

## Basic Example

```html
<div hoverz="hover-effect">Hover over me!</div>

<style>
  .hover-effect {
    background-color: #3b82f6;
    color: white;
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
</style>
```

## Multiple Classes

```html
<div hoverz="highlighted active">Hover for multiple effects</div>

<style>
  .highlighted {
    background-color: yellow;
  }
  .active {
    font-weight: bold;
    border: 2px solid red;
  }
</style>
```

## Common Use Cases

### Interactive Buttons

```html
<button hoverz="btn-hover">Click Me</button>

<style>
  .btn-hover {
    background-color: #10b981;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
  }
</style>
```

### Card Hover Effects

```html
<div class="card" hoverz="card-elevated">
  <h3>Product Card</h3>
  <p>Hover to see elevation effect</p>
</div>

<style>
  .card {
    padding: 1rem;
    border: 1px solid #e5e7eb;
    transition: all 0.3s ease;
  }
  .card-elevated {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
</style>
```

### Navigation Items

```html
<nav>
  <a href="#" hoverz="nav-active">Home</a>
  <a href="#" hoverz="nav-active">About</a>
  <a href="#" hoverz="nav-active">Contact</a>
</nav>

<style>
  .nav-active {
    color: #3b82f6;
    background-color: #eff6ff;
    padding: 0.5rem 1rem;
    border-radius: 4px;
  }
</style>
```

### Image Zoom

```html
<div class="image-container" hoverz="image-zoom">
  <img src="photo.jpg" alt="Photo" />
</div>

<style>
  .image-container {
    overflow: hidden;
    border-radius: 8px;
  }
  .image-container img {
    transition: transform 0.3s ease;
  }
  .image-zoom img {
    transform: scale(1.1);
  }
</style>
```

## CSS Transition Tips

Always include transitions for smooth effects:

```css
/* Good: Smooth transitions */
.element {
  transition: all 0.3s ease;
}

/* Better: Specific property transitions */
.element {
  transition: background-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;
}
```

## Best Practices

### ✅ Do

- Include CSS transitions for smooth effects
- Use meaningful class names
- Keep hover effects subtle and purposeful
- Test accessibility with focus states

### ❌ Don't

- Overuse hover effects (can be distracting)
- Forget that touch devices don't have hover
- Use hover for critical functionality
- Make effects too jarring or sudden

## Accessibility

Include focus states for keyboard users:

```css
.element:hover,
.element:focus {
  /* Same styles for both hover and focus */
}
```

## Related Attributes

- [`togglez-class`](../Visibility/toggle-class.md) - Toggle classes on click
- [`clickz`](../Events/click.md) - Handle click events
- [`setz`](../Variables/set.md) - Update state on interactions

Perfect for creating engaging,
