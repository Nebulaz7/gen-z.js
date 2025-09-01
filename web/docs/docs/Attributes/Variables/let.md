---
sidebar_position: 1
---

# Letz

The `letz` attribute is the cornerstone of Gen-Z.js state management, providing seamless two-way data binding between HTML elements and application state. It initializes variables and automatically synchronizes values between the DOM and your application's state.

## Overview

The `letz` attribute creates reactive variables that automatically update the UI when their values change. It's perfect for building interactive forms, dynamic content, and real-time applications without writing JavaScript.

## Basic Syntax

```html
<element letz="variableName"></element>
```

## How It Works

1. **Initialization**: Creates a variable in the global state with the element's current value
2. **Two-way Binding**: Automatically listens for changes and updates both the state and UI
3. **Type Conversion**: Optionally converts values to specific data types
4. **Reactive Updates**: Triggers updates to all elements using the same variable

## Basic Examples

### Text Input Binding

```html
<input type="text" letz="username" placeholder="Enter your username" />
<p>Hello, <span getz="username"></span>!</p>
```

### Number Input

```html
<input type="number" letz="age" value="25" />
<p>You are <span getz="age"></span> years old.</p>
```

### Checkbox Binding

```html
<input type="checkbox" letz="isSubscribed" checked />
<p>Subscription status: <span getz="isSubscribed"></span></p>
```

## Typed Variables

You can specify a data type for your state variable by appending it after a colon:

### Syntax

```html
<element letz="variableName:Type"></element>
```

### Supported Types

#### String (Default)

```html
<input type="text" letz="name:String" value="John" />
```

- Default behavior if no type is specified
- Stores value as-is as a string

#### Number

```html
<input type="number" letz="age:Number" value="25" />
<input type="range" letz="volume:Number" min="0" max="100" value="50" />
```

- Automatically converts input values to numbers
- Non-numeric values become `NaN`

#### Boolean

```html
<input type="checkbox" letz="isActive:Boolean" checked />
<input type="text" letz="hasPermission:Boolean" value="true" />
```

- For checkboxes: uses the `checked` property
- For other inputs: `"true"`, `"1"`, or any non-empty string = `true`
- Empty string, `"false"`, or `"0"` = `false`

#### Object

```html
<textarea letz="config:Object">{"theme": "dark", "lang": "en"}</textarea>
<div letz="user:Object" style="display: none;">
  {"name": "Alice", "role": "admin"}
</div>
```

- Parses valid JSON strings into JavaScript objects
- Invalid JSON will result in an error

#### Null

```html
<input type="hidden" letz="placeholder:Null" />
```

- Sets the variable value to `null`
- Useful for placeholder variables

#### Undefined

```html
<input type="hidden" letz="feature:Undefined" />
```

- Sets the variable value to `undefined`
- Useful for optional features

## Advanced Examples

### Form with Multiple Types

```html
<form>
  <input type="text" letz="fullName:String" placeholder="Full Name" />
  <input type="number" letz="age:Number" placeholder="Age" />
  <input type="email" letz="email:String" placeholder="Email" />
  <input type="checkbox" letz="newsletter:Boolean" /> Subscribe to newsletter

  <div>
    <p>Name: <span getz="fullName"></span></p>
    <p>Age: <span getz="age"></span></p>
    <p>Email: <span getz="email"></span></p>
    <p>Newsletter: <span getz="newsletter"></span></p>
  </div>
</form>
```

### Complex Object Binding

```html
<textarea letz="userProfile:Object" rows="5">
{
  "name": "John Doe",
  "settings": {
    "theme": "dark",
    "notifications": true
  }
}
</textarea>

<p>User: <span getz="userProfile.name"></span></p>
<p>Theme: <span getz="userProfile.settings.theme"></span></p>
```

### Dynamic Counter

```html
<input type="number" letz="count:Number" value="0" />
<button setz="count:count + 1">Increment</button>
<button setz="count:count - 1">Decrement</button>
<p>Count: <span getz="count"></span></p>
```

## Element Type Behaviors

### Input Elements

```html
<!-- Text inputs -->
<input type="text" letz="textValue" />
<input type="email" letz="email" />
<input type="password" letz="password" />

<!-- Number inputs -->
<input type="number" letz="quantity:Number" />
<input type="range" letz="volume:Number" />

<!-- Checkboxes -->
<input type="checkbox" letz="agreed:Boolean" />

<!-- Radio buttons -->
<input type="radio" name="size" value="small" letz="selectedSize" />
<input type="radio" name="size" value="large" letz="selectedSize" />
```

### Textarea

```html
<textarea letz="description" rows="4" cols="50"></textarea>
```

### Select Elements

```html
<select letz="country">
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="uk">United Kingdom</option>
</select>
```

### Non-Input Elements

```html
<!-- Hidden data containers -->
<div letz="config:Object" style="display: none;">
  {"api": "https://api.example.com"}
</div>
<span letz="version" style="display: none;">1.2.3</span>
```

## Best Practices

### ✅ Do

- Use descriptive variable names (`userName`, not `u`)
- Specify types when working with numbers or booleans
- Initialize with sensible default values
- Group related variables logically

### ❌ Don't

- Use reserved JavaScript keywords as variable names
- Create circular dependencies between variables
- Modify letz variables directly via JavaScript (use `setz` instead)

## Common Patterns

### User Profile Form

```html
<div class="profile-form">
  <input type="text" letz="profile.firstName:String" placeholder="First Name" />
  <input type="text" letz="profile.lastName:String" placeholder="Last Name" />
  <input type="number" letz="profile.age:Number" placeholder="Age" />
  <input type="checkbox" letz="profile.isPublic:Boolean" /> Make profile public

  <div class="preview">
    <h3>Profile Preview</h3>
    <p>
      Name: <span getz="profile.firstName"></span>
      <span getz="profile.lastName"></span>
    </p>
    <p>Age: <span getz="profile.age"></span></p>
    <p>Public: <span getz="profile.isPublic"></span></p>
  </div>
</div>
```

### Settings Panel

```html
<div class="settings">
  <label>
    <input type="checkbox" letz="settings.darkMode:Boolean" />
    Dark Mode
  </label>

  <label>
    Volume:
    <input
      type="range"
      letz="settings.volume:Number"
      min="0"
      max="100"
      value="50"
    />
    <span getz="settings.volume"></span>%
  </label>

  <select letz="settings.language:String">
    <option value="en">English</option>
    <option value="es">Spanish</option>
    <option value="fr">French</option>
  </select>
</div>
```

## Troubleshooting

### Common Issues

#### Variable Not Updating

```html
<!-- ❌ Wrong: Missing getz to display -->
<input type="text" letz="name" />
<p>Hello, name!</p>

<!-- ✅ Correct: Use getz to display -->
<input type="text" letz="name" />
<p>Hello, <span getz="name"></span>!</p>
```

#### Type Conversion Errors

```html
<!-- ❌ Wrong: Invalid JSON -->
<textarea letz="data:Object">{invalid json}</textarea>

<!-- ✅ Correct: Valid JSON -->
<textarea letz="data:Object">{"valid": "json"}</textarea>
```

#### Case Sensitivity

```html
<!-- ❌ Wrong: Mismatched case -->
<input type="text" letz="userName" />
<span getz="username"></span>

<!-- ✅ Correct: Exact match -->
<input type="text" letz="userName" />
<span getz="userName"></span>
```

## Browser Compatibility

The `letz` attribute works in all modern browsers:

- Chrome/Edge 60+
- Firefox 55+
- Safari 12+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Considerations

- Variables are stored in a global state object
- Updates are batched for optimal performance
- Large objects may impact performance on slower devices
- Consider using `hidez` for data-only elements

## Related Attributes

- [`getz`](./Getz.md) - Display variable values
- [`hidez`](./Hidez.md) - Hide elements containing data
- [`clickz`](./Clickz.md) - Handle user interactions

## Migration from Vanilla JavaScript

### Before (Vanilla JavaScript)

```javascript
let username = "";
const input = document.getElementById("usernameInput");
const display = document.getElementById("usernameDisplay");

input.addEventListener("input", (e) => {
  username = e.target.value;
  display.textContent = username;
});
```

### After (Gen-Z.js)

```html
<input type="text" letz="username" /> <span getz="username"></span>
```

The `letz` attribute eliminates the need for manual event listeners and DOM manipulation, making your code cleaner and more maintainable.
