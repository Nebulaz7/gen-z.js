# Alertz

The Alert functions in Gen-Z.js provide simple ways to display messages to users through browser alert dialogs. These attributes make it easy to show notifications, confirmations, or important information without writing any JavaScript.

## Overview

Gen-Z.js offers two alert attributes:

- `alertz` - Shows a direct message
- `alertz-text` - Shows content from another element

## `alertz` Attribute

### Syntax

```html
<element alertz="message"></element>
```

### Description

The `alertz` attribute displays a browser alert dialog with the specified message when the element is clicked.

### Parameters

- **message** (string): The text message to display in the alert dialog

### Example

```html
<button alertz="Hello World!">Simple Alert</button>
<div alertz="Welcome to our website!">Click for welcome message</div>
<span alertz="This is clickable text">Info</span>
```

### Use Cases

- Welcome messages
- Quick notifications
- Simple confirmations
- Debug messages during development
- User guidance prompts

## `alertz-text` Attribute

### Syntax

```html
<element alertz-text="selector"></element>
```

### Description

The `alertz-text` attribute displays an alert dialog containing the text content of another element specified by a CSS selector.

### Parameters

- **selector** (string): A valid CSS selector that targets the element whose text content should be displayed

### Example

```html
<span id="myText">Important message</span>
<button alertz-text="#myText">Alert Text</button>

<p class="status">System is online</p>
<button alertz-text=".status">Show Status</button>

<div data-message="Server response: OK">
  <button alertz-text="[data-message]">Show Response</button>
</div>
```

### Supported Selectors

- **ID selectors**: `#elementId`
- **Class selectors**: `.className`
- **Attribute selectors**: `[attribute="value"]`
- **Tag selectors**: `tagName`
- **Complex selectors**: `.parent .child`, `div > p`, etc.
