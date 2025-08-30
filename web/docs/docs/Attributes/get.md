# Getz

The `getz` attribute displays the value of a state variable in your HTML elements. It automatically updates the element's content whenever the associated variable changes, providing real-time data display without any JavaScript.

> 💡 **New to Gen-Z.js state management?** Check out the [`letz` attribute documentation](./let.md) first to understand how variables are created and managed.

## Syntax

```html
<element getz="variableName"></element>
```

## How It Works

The `getz` attribute:

1. Reads the value from the global state
2. Updates the element's `textContent` with that value
3. Automatically refreshes when the variable changes
4. Supports nested object properties using dot notation

## Basic Examples

### Simple Variable Display

```html
<input type="text" letz="username" placeholder="Enter username" />
<p>Hello, <span getz="username"></span>!</p>
```

### Number Variables

```html
<input type="number" letz="count:Number" value="0" />
<p>Current count: <span getz="count"></span></p>
```

### Boolean Variables

```html
<input type="checkbox" letz="isActive:Boolean" />
<p>Status: <span getz="isActive"></span></p>
```

## Nested Object Properties

Access properties of objects using dot notation:

```html
<!-- Create an object variable -->
<div letz="user:Object" hidez>
  {"name": "Alex", "job": "Developer", "age": 28}
</div>

<!-- Display object properties -->
<p>Name: <span getz="user.name"></span></p>
<p>Job: <span getz="user.job"></span></p>
<p>Age: <span getz="user.age"></span></p>
```

### Deep Nested Properties

```html
<div letz="config:Object" hidez>
  { "app": { "theme": "dark", "settings": { "notifications": true, "language":
  "en" } } }
</div>

<p>Theme: <span getz="config.app.theme"></span></p>
<p>Language: <span getz="config.app.settings.language"></span></p>
```

## Common Use Cases

### Real-time Form Preview

```html
<input type="text" letz="firstName" placeholder="First Name" />
<input type="text" letz="lastName" placeholder="Last Name" />

<div class="preview">
  <h3>Preview</h3>
  <p>Full Name: <span getz="firstName"></span> <span getz="lastName"></span></p>
</div>
```

### Dynamic Content Updates

```html
<select letz="selectedTheme">
  <option value="light">Light</option>
  <option value="dark">Dark</option>
</select>

<p>Current theme: <span getz="selectedTheme"></span></p>
```

### Data Display Dashboard

```html
<div letz="stats:Object" hidez>
  {"users": 1250, "sales": 45670, "growth": 12.5}
</div>

<div class="dashboard">
  <div class="stat">Users: <span getz="stats.users"></span></div>
  <div class="stat">Sales: $<span getz="stats.sales"></span></div>
  <div class="stat">Growth: <span getz="stats.growth"></span>%</div>
</div>
```

## Best Practices

### ✅ Do

- Use `getz` to display any state variable
- Combine with `letz` for two-way data binding
- Use dot notation for object properties
- Keep property paths simple and readable

### ❌ Don't

- Try to modify values through `getz` (use [`setz`](./set.md) instead)
- Use complex nested paths that are hard to maintain
- Forget to create the variable with `letz` first

## Error Handling

- If a variable doesn't exist, `getz` displays an empty string
- If a nested property doesn't exist, `getz` displays `undefined`
- No JavaScript errors are thrown for missing variables

```html
<!-- These won't break your page -->
<span getz="nonExistentVariable"></span>
<!-- Shows: empty -->
<span getz="user.nonExistentProperty"></span>
<!-- Shows: undefined -->
```

## Related Attributes

- [`letz`](./let.md) - Create and bind state variables
- [`setz`](./set.md) - Update variable values
- [`hidez`](./hide.md) - Hide data container elements

## Quick Reference

| Pattern         | Example                      | Description              |
| --------------- | ---------------------------- | ------------------------ |
| Simple variable | `getz="name"`                | Display a variable value |
| Object property | `getz="user.name"`           | Display object property  |
| Deep nested     | `getz="data.items[0].title"` | Access nested properties |

Ready to update your variables dynamically? Check out the [`setz` attribute](./set.md) next!
