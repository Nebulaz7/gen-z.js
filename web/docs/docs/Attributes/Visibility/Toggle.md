# Togglez

The `togglez` attribute toggles the visibility of elements by showing/hiding them when clicked.

## Syntax

```html
<element togglez="selector"></element>
```

## How It Works

- **Click trigger**: Activates when the element is clicked
- **Visibility toggle**: Shows hidden elements, hides visible elements
- **CSS display**: Uses `display: none` to hide, restores original display to show

## Basic Example

```html
<div id="myDiv">Toggle me!</div>
<button togglez="#myDiv">Toggle</button>
```

## Multiple Targets

```html
<div id="panel1">Panel 1 content</div>
<div id="panel2">Panel 2 content</div>

<button togglez="#panel1">Toggle Panel 1</button>
<button togglez="#panel2">Toggle Panel 2</button>
<button togglez="#panel1, #panel2">Toggle Both</button>
```

## Common Use Cases

### Accordion/Collapsible Content

```html
<h3 togglez="#content">Click to expand ▼</h3>
<div id="content" style="display: none;">
  <p>Hidden content that can be toggled.</p>
</div>
```

### Show/Hide Forms

```html
<button togglez="#loginForm">Login</button>
<form id="loginForm" style="display: none;">
  <input type="email" placeholder="Email" />
  <input type="password" placeholder="Password" />
  <button type="submit">Submit</button>
</form>
```

### Menu Toggle

```html
<button togglez=".menu">☰ Menu</button>
<nav class="menu" style="display: none;">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>
```

## Supported Selectors

- **ID**: `#elementId`
- **Class**: `.className`
- **Tag**: `div`, `p`, `span`
- **Multiple**: `#id1, .class1, div`

## Related Attributes

- [`hidez`](./hide.md) - Hide elements permanently
- [`clickz`](../Events/click.md) - Custom click actions
- [`setz`](../Variables/set.md) - Update state variables

Perfect for
