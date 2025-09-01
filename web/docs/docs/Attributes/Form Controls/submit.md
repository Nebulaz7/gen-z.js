# Submitz

The `submitz` attribute submits forms when clicked, providing an alternative to traditional submit buttons.

## Syntax

```html
<element submitz="selector"></element>
```

## How It Works

- **Click trigger**: Activates when the element is clicked
- **Form submission**: Triggers the submit event on the target form
- **Validation**: Runs browser validation before submitting
- **Event handling**: Works with form event listeners

## Basic Example

```html
<form id="myForm">
  <input name="username" type="text" required />
  <input name="email" type="email" required />
  <button type="button" submitz="#myForm">Submit</button>
</form>
```

## Multiple Forms

```html
<form id="loginForm">
  <input name="email" type="email" required />
  <input name="password" type="password" required />
</form>

<form id="signupForm">
  <input name="username" type="text" required />
  <input name="email" type="email" required />
</form>

<button submitz="#loginForm">Login</button>
<button submitz="#signupForm">Sign Up</button>
```

## Common Use Cases

### Custom Submit Buttons

```html
<form id="contactForm" action="/contact" method="post">
  <input name="name" type="text" placeholder="Your name" required />
  <input name="email" type="email" placeholder="Your email" required />
  <textarea name="message" placeholder="Your message" required></textarea>

  <div class="buttons">
    <button type="button" submitz="#contactForm">Send Message</button>
    <span submitz="#contactForm" class="link-button">Submit as link</span>
  </div>
</form>
```

### Form with Confirmation

```html
<form id="deleteForm" action="/delete" method="post">
  <input type="hidden" name="id" value="123" />

  <p>Are you sure you want to delete this item?</p>
  <button
    type="button"
    submitz="#deleteForm"
    onclick="return confirm('Really delete?')"
  >
    Yes, Delete
  </button>
</form>
```

### Multi-step Form

```html
<form id="wizardForm" action="/submit" method="post">
  <div class="step step-1">
    <input name="firstName" type="text" required />
    <button type="button" showz=".step-2" hidez=".step-1">Next</button>
  </div>

  <div class="step step-2" style="display: none;">
    <input name="email" type="email" required />
    <button type="button" showz=".step-1" hidez=".step-2">Back</button>
    <button type="button" submitz="#wizardForm">Submit</button>
  </div>
</form>
```

## Form Validation

Works with HTML5 validation:

```html
<form id="validatedForm">
  <input
    name="email"
    type="email"
    required
    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
  />
  <input name="phone" type="tel" required pattern="[0-9]{10}" />

  <!-- Will validate before submitting -->
  <button type="button" submitz="#validatedForm">Submit</button>
</form>
```

## Combining with State

```html
<form id="userForm">
  <input name="username" letz="username" type="text" required />
  <input name="email" letz="email" type="email" required />

  <div class="preview">
    <p>Username: <span getz="username"></span></p>
    <p>Email: <span getz="email"></span></p>
  </div>

  <button type="button" submitz="#userForm">Submit User</button>
</form>
```

## Supported Selectors

- **ID**: `#formId`
- **Class**: `.formClass`
- **Tag**: `form`
- **Attribute**: `[name="formName"]`

## Important Notes

### Form Requirements

- Target must be a `<form>` element
- Form validation runs before submission
- Works with any form method (GET, POST, etc.)
- Supports all form attributes (action, method, enctype)

### Differences from Regular Submit

- Can be placed outside the form
- Can be any element, not just buttons
- Maintains all browser form functionality

## Best Practices

### ✅ Do

- Include proper form validation
- Use meaningful button text
- Test with and without JavaScript enabled
- Provide visual feedback on submission

### ❌ Don't

- Forget the `type="button"` on custom submit buttons
- Skip form validation
- Use on non-form elements
- Create multiple submit triggers without good reason

## Related Attributes

- [`clickz`](../Events/click.md) - Custom click actions
- [`letz`](../Variables/let.md) - Bind form data to state
- [`setz`](../Variables/set.md) - Update form states
- [`hidez`](../Visibility/hide.md) - Hide forms after submission

Perfect for custom form controls and enhanced
