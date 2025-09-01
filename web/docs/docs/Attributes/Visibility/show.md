# Showz

The `showz` attribute shows hidden elements when clicked.

## Syntax

```html
<element showz="selector"></element>
```

## How It Works

- **Click trigger**: Activates when the element is clicked
- **Show elements**: Makes hidden elements visible
- **CSS display**: Removes `display: none` or restores original display value

## Basic Example

```html
<div id="myDiv" style="display: none;">Now you see me!</div>
<button showz="#myDiv">Show Element</button>
```

## Multiple Targets

```html
<div id="panel1" style="display: none;">Panel 1</div>
<div id="panel2" style="display: none;">Panel 2</div>

<button showz="#panel1">Show Panel 1</button>
<button showz="#panel1, #panel2">Show Both</button>
```

## Common Use Cases

### Reveal Content

```html
<button showz="#secret">Reveal Secret</button>
<p id="secret" style="display: none;">🎉 Surprise content!</p>
```

### Show Forms

```html
<button showz="#contactForm">Contact Us</button>
<form id="contactForm" style="display: none;">
  <input type="email" placeholder="Your email" />
  <textarea placeholder="Message"></textarea>
  <button type="submit">Send</button>
</form>
```

### Progressive Disclosure

```html
<button showz=".step2">Continue to Step 2</button>
<div class="step2" style="display: none;">
  <h3>Step 2: Additional Info</h3>
  <input type="text" placeholder="More details" />
  <button showz=".step3">Continue to Step 3</button>
</div>
```

## Supported Selectors

- **ID**: `#elementId`
- **Class**: `.className`
- **Tag**: `div`, `p`, `span`
- **Multiple**: `#id1, .class1, div`

## Related Attributes

- [`hidez`](./hide.md) - Hide elements
- [`togglez`](./toggle.md) - Toggle visibility
- [`clickz`](../Events/click.md) - Custom click actions
