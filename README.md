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

### 🧠 State Management

Gen-Z.js includes a simple state management system that allows you to create interactive applications with ease. The state is a global object that holds all your application's data. You can interact with the state using the `letz`, `getz`, and `setz` attributes.

#### `letz="variableName"`

The `letz` attribute is used for two-way data binding. It initializes a variable in the state with the value of the element. If the element is an input field, it listens for input events and updates the state variable accordingly.

```html
<input type="text" letz="username" placeholder="Enter your username" />
<p>Hello, <span getz="username"></span>!</p>
```

In this example, the `username` variable in the state is bound to the input field. When you type in the input field, the `textContent` of the `span` element is automatically updated.

#### Typing Variables

You can also specify a data type for your state variable by appending it after a colon. Supported types are `String`, `Number`, `Boolean`, `Object`, `Null`, and `Undefined`.

- **`letz="variableName:String"`**: The value will be stored as a string (default).
- **`letz="age:Number"`**: The value will be converted to a number.
- **`letz="isActive:Boolean"`**: The value will be treated as a boolean. For input elements, an empty value or the string "true" will be `true`. For checkboxes, it will use the `checked` property.
- **`letz="user:Object"`**: The value should be a valid JSON string, which will be parsed into an object.
- **`letz="data:Null"`**: The value will be `null`.
- **`letz="feature:Undefined"`**: The value will be `undefined`.

**Example:**

```html
<input type="text" letz="count:Number" value="10" />
<p>The count is: <span getz="count"></span></p>

<input type="checkbox" letz="isChecked:Boolean" checked />
<p>Is checked? <span getz="isChecked"></span></p>

<div letz="user:Object">{"name": "Alex"}</div>
<p>User: <span getz="user"></span></p>
```

#### `getz="variableName"`

The `getz` attribute displays the value of a state variable. It updates the `textContent` of the element with the value of the specified state variable. You can also access nested properties of an object in the state by using dot notation (e.g., `user.name`).

```html
<!-- Simple variable -->
<p>The value of username is: <span getz="username"></span></p>

<!-- Nested object property -->
<div letz="user:Object" hidez>{"name": "Alex", "job": "Developer"}</div>
<p>User's Name: <span getz="user.name"></span></p>
<p>User's Job: <span getz="user.job"></span></p>
```

#### `setz="variableName:value"`

The `setz` attribute sets the value of a state variable. On click, it updates the specified state variable with the given value.

```html
<button setz="username:JohnDoe">Set username to JohnDoe</button>
```

#### Using Expressions in `setz`

The `setz` attribute can also evaluate JavaScript expressions. This allows you to perform calculations and manipulations using your state variables. All state variables are available to use within the expression.

**Example:**

```html
<p letz="num1:Number">100</p>
<p letz="num2:Number">30</p>

<!-- On click, this will calculate 100 - 30 and set the result (70) to num3 -->
<button setz="num3:num1 - num2">Calculate</button>

<p>Result: <span getz="num3"></span></p>
```

You can also use string manipulation and other JavaScript expressions:

```html
<p letz="firstName:String">John</p>
<p letz="lastName:String">Doe</p>

<button setz="fullName:firstName + ' ' + lastName">Get Full Name</button>

<p>Full Name: <span getz="fullName"></span></p>
```

#### Value Manipulation (Legacy)

The `getz` and `setz` attributes also support a legacy mode where they can get or set the value of another element directly using a CSS selector.

```html
<input id="myInput" type="text" placeholder="Type here..." />
<span getz="#myInput">Text appears here</span>
<button setz="#myInput:Hello Gen-Z!">Set Value</button>
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

You can also use `hidez` with `letz` to hide an element on page load.

```html
<div letz="myVar" hidez>This element is hidden on page load</div>
```

#### `togglez-class="selector:className"`

Toggles a CSS class on an element.

```html
<div id="myDiv">Style me!</div>
<button togglez-class="#myDiv:highlight">Toggle Highlight</button>
```

### 🌐 Network Requests (Experimental)

#### `fetchz="url:variableName"`

Fetches JSON data from a URL and stores it in a state variable.

```html
<button fetchz="https://jsonplaceholder.typicode.com/users/1:user">
  Fetch User
</button>
<p>User Name: <span getz="user.name"></span></p>
<p>Email: <span getz="user.email"></span></p>
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

#### `clearz="selector"`

Clears the value of an input or form.

```html
<button clearz="#myInput">Clear Input</button>
<button clearz="#myForm">Clear Form</button>
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
        const user = document.getElementById("username").value;
        if (user === "") {
          alert("Username cannot be empty!");
          return;
        }
        // ... more complex logic ...
        document.getElementById("myForm").submit();
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

  <button type="button" setz="name:John Doe">Fill Name</button>
  <button type="button" clearz="#contactForm">Clear All</button>
  <button type="button" submitz="#contactForm">Submit</button>
</form>

<div>
  <span getz="name">Name will appear here</span>
  <br />
  <span getz="email">Email will appear here</span>
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

## 🤝 Contributing

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

### 🌐 Network Requests (Experimental)

#### `fetchz="url:variableName"`

Fetches JSON data from a URL and stores it in a state variable.

```html
<button fetchz="https://jsonplaceholder.typicode.com/users/1:user">
  Fetch User
</button>
<p>User Name: <span getz="user.name"></span></p>
<p>Email: <span getz="user.email"></span></p>
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
        const user = document.getElementById("username").value;
        if (user === "") {
          alert("Username cannot be empty!");
          return;
        }
        // ... more complex logic ...
        document.getElementById("myForm").submit();
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
