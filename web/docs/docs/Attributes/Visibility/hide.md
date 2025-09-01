# Hidez

The `hidez` attribute hides elements when clicked or on page load.

## Syntax

```html
<element hidez="selector"> <element hidez></element></element>
```

## How It Works

- **Click trigger**: Hides target elements when clicked
- **Page load**: Hides the element itself if no selector provided
- **CSS display**: Sets `display: none` to hide elements

## Basic Example

```html
<div id="myDiv">I can be hidden!</div>
<button hidez="#myDiv">Hide Element</button>
```

## Hide on Page Load

```html
<!-- Element hidden when page loads -->
<div letz="myVar" hidez>This element is hidden on page load</div>
```

## Multiple Targets

```html
<div id="panel1">Panel 1</div>
<div id="panel2">Panel 2</div>

<button hidez="#panel1">Hide Panel 1</button>
<button hidez="#panel1, #panel2">Hide Both</button>
```

## Common Use Cases

### Data Storage

```html
<!-- Hidden data containers -->
<div letz="config:Object" hidez>{"theme": "dark", "version": "1.0"}</div>
<div letz="apiKey" hidez>secret-key-123</div>
```

### Dismiss Messages

```html
<div id="notification" class="alert">
  Welcome! <button hidez="#notification">✕</button>
</div>
```

### Hide Sections

```html
<button hidez=".advanced">Hide Advanced Options</button>
<div class="advanced">
  <label>Advanced Setting 1</label>
  <label>Advanced Setting 2</label>
</div>
```

## Supported Selectors

- **ID**: `#elementId`
- **Class**: `.className`
- **Tag**: `div`, `p`, `span`
- **Multiple**: `#id1, .class1, div`

## Related Attributes

- [`showz`](./show.md) - Show hidden elements
- [`togglez`](./toggle.md) - Toggle visibility
- [`letz`](../Variables/let.md) - Create variables with hidden data

---

# Togglez-Class Attribute

The `togglez-class` attribute toggles CSS classes on elements when clicked.

## Syntax

```html
<element togglez-class="selector:className"></element>
```

## How It Works

- **Click trigger**: Activates when the element is clicked
- **Class toggle**: Adds class if missing, removes if present
- **Multiple classes**: Separate with spaces

## Basic Example

```html
<div id="myDiv">Style me!</div>
<button togglez-class="#myDiv:highlight">Toggle Highlight</button>
```

## Multiple Classes

```html
<div id="card">Card content</div>
<button togglez-class="#card:active selected">Toggle Multiple Classes</button>
```

## Common Use Cases

### Theme Toggle

```html
<button togglez-class="body:dark-theme">🌙 Dark Mode</button>
```

### Active States

```html
<nav>
  <button togglez-class="#nav1:active">Nav 1</button>
  <button togglez-class="#nav2:active">Nav 2</button>
</nav>
<div id="nav1">Content 1</div>
<div id="nav2">Content 2</div>
```

### Visual Feedback

```html
<div class="card" id="feature">
  <button togglez-class="#feature:expanded">Expand Details</button>
</div>

<style>
  .card.expanded {
    height: 200px;
  }
</style>
```

### Interactive Elements

```html
<div id="menu">Menu</div>
<button togglez-class="#menu:open bounce">Toggle Menu</button>

<style>
  .open {
    display: block;
  }
  .bounce {
    animation: bounce 0.5s;
  }
</style>
```

## Supported Selectors

- **ID**: `#elementId`
- **Class**: `.className`
- **Tag**: `div`, `p`, `span`
- **Multiple**: `#id1, .class1`

## Related Attributes

- [`togglez`](./toggle.md) - Toggle element visibility
- [`clickz`](../Events/click.md) - Custom click actions
- [`setz`](../Variables/set.md) - Update state variables

Perfect for dynamic styling and interactive UI!
