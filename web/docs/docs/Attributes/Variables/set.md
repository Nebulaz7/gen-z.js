---
sidebar_position: 3
---

# Setz

The `setz` attribute updates state variables when an element is clicked. It can set static values or evaluate JavaScript expressions using existing state variables, making it perfect for dynamic updates and calculations.

> 💡 **Need to create variables first?** Check out [`letz`](./let.md) to learn how to initialize state variables.

## Syntax

```html
<element setz="variableName:value">
  <element setz="variableName:expression"></element
></element>
```

## How It Works

1. **Click trigger**: Activates when the element is clicked
2. **Variable update**: Sets the specified variable to the new value
3. **Expression evaluation**: Can execute JavaScript expressions using state variables
4. **UI refresh**: Automatically updates all `getz` elements displaying that variable

## Basic Examples

### Static Value Assignment

```html
<input type="text" letz="username" />
<button setz="username:JohnDoe">Set to JohnDoe</button>
<button setz="username:">Clear Username</button>
<p>Current user: <span getz="username"></span></p>
```

### Number Operations

```html
<input type="number" letz="count:Number" value="0" />
<button setz="count:0">Reset</button>
<button setz="count:count + 1">Increment</button>
<button setz="count:count - 1">Decrement</button>
<p>Count: <span getz="count"></span></p>
```

## JavaScript Expressions

Use existing state variables in calculations and manipulations:

### Mathematical Calculations

```html
<input type="number" letz="num1:Number" value="100" />
<input type="number" letz="num2:Number" value="30" />

<button setz="result:num1 + num2">Add</button>
<button setz="result:num1 - num2">Subtract</button>
<button setz="result:num1 * num2">Multiply</button>
<button setz="result:num1 / num2">Divide</button>

<p>Result: <span getz="result"></span></p>
```

### String Manipulation

```html
<input type="text" letz="firstName" value="John" />
<input type="text" letz="lastName" value="Doe" />

<button setz="fullName:firstName + ' ' + lastName">Combine Names</button>
<button setz="initials:firstName.charAt(0) + lastName.charAt(0)">
  Get Initials
</button>

<p>Full Name: <span getz="fullName"></span></p>
<p>Initials: <span getz="initials"></span></p>
```

### Boolean Logic

```html
<input type="checkbox" letz="isActive:Boolean" />
<button setz="isActive:!isActive">Toggle Status</button>
<button setz="isActive:true">Activate</button>
<button setz="isActive:false">Deactivate</button>

<p>Status: <span getz="isActive"></span></p>
```

## Advanced Examples

### Calculator

```html
<input type="number" letz="display:Number" value="0" />
<input type="number" letz="memory:Number" value="0" />

<div class="calculator">
  <p>Display: <span getz="display"></span></p>

  <button setz="memory:display">Store</button>
  <button setz="display:memory">Recall</button>
  <button setz="display:display * display">Square</button>
  <button setz="display:Math.sqrt(display)">Square Root</button>
  <button setz="display:0">Clear</button>
</div>
```

### Shopping Cart

```html
<input type="number" letz="quantity:Number" value="1" min="1" />
<input type="number" letz="price:Number" value="29.99" step="0.01" />
<input type="number" letz="tax:Number" value="0.08" step="0.01" />

<button setz="subtotal:quantity * price">Calculate Subtotal</button>
<button setz="total:subtotal + (subtotal * tax)">Calculate Total</button>

<div class="summary">
  <p>Quantity: <span getz="quantity"></span></p>
  <p>Price: $<span getz="price"></span></p>
  <p>Subtotal: $<span getz="subtotal"></span></p>
  <p>Total: $<span getz="total"></span></p>
</div>
```

### Form Validation Helper

```html
<input type="text" letz="email" placeholder="Enter email" />
<input type="password" letz="password" placeholder="Enter password" />

<button setz="isValidEmail:email.includes('@') && email.includes('.')">
  Validate Email
</button>
<button setz="isValidPassword:password.length >= 8">Validate Password</button>
<button setz="canSubmit:isValidEmail && isValidPassword">Check Form</button>

<p>Email valid: <span getz="isValidEmail"></span></p>
<p>Password valid: <span getz="isValidPassword"></span></p>
<p>Can submit: <span getz="canSubmit"></span></p>
```

## Expression Capabilities

You can use any JavaScript expression in `setz`:

- **Arithmetic**: `+`, `-`, `*`, `/`, `%`
- **Comparison**: `>`, `<`, `>=`, `<=`, `==`, `===`
- **Logical**: `&&`, `||`, `!`
- **String methods**: `.charAt()`, `.slice()`, `.toUpperCase()`, etc.
- **Math functions**: `Math.round()`, `Math.max()`, `Math.random()`, etc.
- **Conditional**: `condition ? value1 : value2`

## Best Practices

### ✅ Do

- Use descriptive variable names
- Keep expressions simple and readable
- Test expressions with different input values
- Combine with `getz` to show immediate results

### ❌ Don't

- Write overly complex expressions (break them into steps)
- Use expressions that might cause errors (check for null/undefined)
- Modify DOM directly in expressions

## Common Patterns

### Toggle States

```html
<button setz="darkMode:!darkMode">Toggle Dark Mode</button>
<button setz="isVisible:!isVisible">Toggle Visibility</button>
```

### Reset/Clear Actions

```html
<button setz="form:{}">Clear Form</button>
<button setz="counter:0">Reset Counter</button>
```

### Quick Calculations

```html
<button setz="total:price * quantity * (1 + taxRate)">Calculate Total</button>
<button setz="percentage:(value / total) * 100">Get Percentage</button>
```

## Related Attributes

- [`letz`](./let.md) - Create and bind state variables
- [`getz`](./get.md) - Display variable values
- [`clickz`](../Events/click.md) - Handle custom click actions

## Quick Reference

| Pattern        | Example                    | Description                                    |
| -------------- | -------------------------- | ---------------------------------------------- |
| Static value   | `setz="name:John"`         | Set variable to fixed value                    |
| Expression     | `setz="total:price * qty"` | CalculaLet's get set. te using other variables |
| Boolean toggle | `setz="active:!active"`    | Toggle true/false                              |
| Reset          | `setz="count:0"`           | Reset to default value                         |

Ready to handle more complex interactions? Check out [`clickz`](../Events/click.md) for custom click handling!
