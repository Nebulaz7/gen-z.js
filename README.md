# 🔥 Gen-Z.js - HTML-First Interactivity Framework

A mini JavaScript framework that lets you add interactivity to HTML without writing JavaScript code. Just add attributes ending with "z" to your HTML elements!

## 🚀 Features

- **Zero JavaScript knowledge required** - Add functionality through HTML attributes
- **Lightweight** - Small footprint, fast loading
- **Intuitive** - All attributes end with "z" for easy recognition
- **Powerful** - Covers most common interactive needs

## 📖 Quick Start

1. Include `script.js` in your HTML
2. Add Gen-Z attributes to your HTML elements
3. That's it! 🎉

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Gen-Z App</title>
  </head>
  <body>
    <button alertz="Hello World!">Click me</button>
    <script src="script.js"></script>
  </body>
</html>
```

## 🛠️ Available Attributes

### 🚨 Alert Functions

#### `alertz="message"`

Shows an alert dialog with the specified message.

```html
<button alertz="Hello World!">Simple Alert</button>
```

#### `alertz-text="selector"`

Shows an alert with the text content of the specified element.

```html
<span id="myText">Important message</span>
<button alertz-text="#myText">Alert Text</button>
```

### 📝 Value Manipulation

#### `getz="selector"`

Displays and auto-updates with the value of an input element.

```html
<input id="myInput" type="text" placeholder="Type here..." />
<span getz="#myInput">Text appears here</span>
```

#### `setz="selector:value"`

Sets the value of an input or text content of an element.

```html
<button setz="#myInput:Hello Gen-Z!">Set Value</button>
<button setz="#myDiv:New content">Set Text</button>
```

#### `clearz="selector"`

Clears the value of an input or form.

```html
<button clearz="#myInput">Clear Input</button>
<button clearz="#myForm">Clear Form</button>
```

### 👁️ Visibility Controls

#### `togglez="selector"`

Toggles the visibility of an element.

```html
<div id="myDiv">Toggle me!</div>
<button togglez="#myDiv">Toggle</button>
```

#### `showz="selector"`

Shows a hidden element.

```html
<button showz="#myDiv">Show Element</button>
```

#### `hidez="selector"`

Hides an element.

```html
<button hidez="#myDiv">Hide Element</button>
```

#### `togglez-class="selector:className"`

Toggles a CSS class on an element.

```html
<div id="myDiv">Style me!</div>
<button togglez-class="#myDiv:highlight">Toggle Highlight</button>
```

### 📋 Form Controls

#### `submitz="selector"`

Submits a form.

```html
<form id="myForm">
  <input name="username" type="text" />
  <button type="button" submitz="#myForm">Submit</button>
</form>
```

### 🎨 Hover Effects

#### `hoverz="className"`

Adds/removes a class on hover.

```html
<div hoverz="hover-effect">Hover over me!</div>
```

### ⚡ Custom Actions with `clickz`

The `clickz` attribute is a powerful feature for handling custom scenarios not covered by other attributes. It's your "escape hatch" for adding unique functionality.

**Best Practices:**

1.  **Keep it Simple:** `clickz` is best for short, single actions.
    ```html
    <!-- Good -->
    <button clickz="alert('Profile saved!')">Save</button>
    <button clickz="console.log('Debug info')">Log</button>
    ```

2.  **Don't Write Complex Logic in HTML:** For anything more than a single command, define a function in a `<script>` tag and call it from `clickz`. This keeps your HTML clean and your logic maintainable.
    ```html
    <!-- Best Practice for Complex Logic -->
    <button clickz="validateAndSubmit()">Submit Form</button>

    <script>
      function validateAndSubmit() {
        const user = document.getElementById('username').value;
        if (user === '') {
          alert('Username cannot be empty!');
          return;
        }
        // ... more complex logic ...
        document.getElementById('myForm').submit();
      }
    </script>
    ```

By following this pattern, you get the best of both worlds: the simplicity of Gen-Z attributes for event binding, and the power and maintainability of regular JavaScript for your custom logic.

## 🎯 Selector Syntax

All selectors use standard CSS selector syntax:

- `#myId` - Select by ID
- `.myClass` - Select by class
- `div` - Select by tag name
- `#myId, #otherId` - Multiple selectors (where supported)

## 💡 Examples

### Interactive Counter

```html
<span id="counter">0</span>
<button clickz="document.getElementById('counter').textContent++">+</button>
<button clickz="document.getElementById('counter').textContent--">-</button>
```

### Dynamic Form

```html
<form id="contactForm">
  <input id="name" name="name" placeholder="Your name" />
  <input id="email" name="email" type="email" placeholder="Your email" />

  <button type="button" setz="#name:John Doe">Fill Name</button>
  <button type="button" clearz="#contactForm">Clear All</button>
  <button type="button" submitz="#contactForm">Submit</button>
</form>

<div>
  <span getz="#name">Name will appear here</span>
  <br />
  <span getz="#email">Email will appear here</span>
</div>
```

### Content Management

```html
<div id="content" class="box">Original content</div>

<button showz="#content">Show</button>
<button hidez="#content">Hide</button>
<button togglez="#content">Toggle</button>
<button togglez-class="#content:highlight">Highlight</button>
<button setz="#content:New content!">Change Text</button>
```

## 🎨 Styling Gen-Z Elements

Gen-Z works great with CSS. You can style elements based on their attributes:

```css
/* Style all alert buttons */
[alertz] {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
}

/* Style value display elements */
[getz] {
  background: #f8f9fa;
  padding: 8px 12px;
  border-radius: 4px;
  font-family: monospace;
}

/* Hover effect class */
.hover-effect {
  background: #28a745 !important;
  color: white !important;
  transform: scale(1.1);
}
```

## 📱 Browser Support

Gen-Z.js works in all modern browsers that support:

- `querySelector` and `querySelectorAll`
- `addEventListener`
- ES6 Classes (or use a transpiler for older browsers)

## 🔧 Extending Gen-Z

You can extend Gen-Z by accessing the global `GenZ` class:

```javascript
// Add custom utility methods
GenZ.addContent("#myDiv", "<p>New paragraph</p>");
GenZ.setContent("#myDiv", "<h2>New heading</h2>");

// Access the framework instance
const framework = window.genZ;
```

## 🤝 Contributing

Want to add more "z" attributes? The framework is designed to be easily extensible. Check out the `bindEvents()` method in `script.js` to see how new attributes are added.

## 📄 License

Free to use and modify. Built with ❤️ for the Gen-Z developers who want HTML-first interactivity!

---

**Happy coding! 🚀✨**
