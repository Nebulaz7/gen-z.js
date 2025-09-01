# Clearz

The `clearz` attribute clears the values of inputs or entire forms when clicked.

## Syntax

```html
<element clearz="selector"></element>
```

## How It Works

- **Click trigger**: Activates when the element is clicked
- **Input clearing**: Sets input values to empty string
- **Form clearing**: Resets all form fields to default values
- **Multiple targets**: Can clear multiple elements at once

## Basic Examples

### Clear Single Input

```html
<input id="myInput" type="text" value="Some text" />
<button clearz="#myInput">Clear Input</button>
```

### Clear Entire Form

```html
<form id="myForm">
  <input name="username" type="text" />
  <input name="email" type="email" />
  <textarea name="message"></textarea>
  <input name="subscribe" type="checkbox" checked />
</form>
<button clearz="#myForm">Clear Form</button>
```

## Multiple Targets

```html
<input id="field1" type="text" value="Text 1" />
<input id="field2" type="email" value="email@example.com" />
<textarea id="field3">Some content</textarea>

<button clearz="#field1, #field2, #field3">Clear All Fields</button>
```

## Common Use Cases

### Form Reset Buttons

```html
<form id="contactForm">
  <input name="name" type="text" placeholder="Your name" />
  <input name="email" type="email" placeholder="Your email" />
  <textarea name="message" placeholder="Your message"></textarea>

  <div class="buttons">
    <button type="submit">Send</button>
    <button type="button" clearz="#contactForm">Reset</button>
  </div>
</form>
```

### Search Form Clear

```html
<form id="searchForm">
  <input id="searchInput" type="text" placeholder="Search..." />
  <button type="submit">Search</button>
  <button type="button" clearz="#searchInput">✕</button>
</form>
```

### Multi-step Form Reset

```html
<form id="wizardForm">
  <div class="step-1">
    <input name="firstName" type="text" />
    <input name="lastName" type="text" />
  </div>
  <div class="step-2">
    <input name="email" type="email" />
    <input name="phone" type="tel" />
  </div>

  <button type="button" clearz="#wizardForm">Start Over</button>
</form>
```

### Individual Field Clear

```html
<div class="input-group">
  <input id="username" type="text" placeholder="Username" />
  <button clearz="#username" class="clear-btn">✕</button>
</div>

<div class="input-group">
  <input id="password" type="password" placeholder="Password" />
  <button clearz="#password" class="clear-btn">✕</button>
</div>
```

## Field Types Supported

### Text Inputs

```html
<input type="text" id="text" value="Text content" />
<input type="email" id="email" value="user@example.com" />
<input type="password" id="pass" value="password123" />
<input type="url" id="website" value="https://example.com" />

<button clearz="#text, #email, #pass, #website">Clear All</button>
```

### Form Controls

```html
<textarea id="comment">Some long text content here...</textarea>
<select id="country">
  <option value="us" selected>United States</option>
  <option value="ca">Canada</option>
</select>
<input type="checkbox" id="agree" checked />
<input type="radio" name="size" value="large" checked />

<button clearz="#comment, #country, #agree">Clear Controls</button>
```

### Special Inputs

```html
<input type="number" id="age" value="25" />
<input type="date" id="birthday" value="2023-01-01" />
<input type="time" id="appointment" value="14:30" />
<input type="file" id="upload" />

<button clearz="#age, #birthday, #appointment, #upload">Clear All</button>
```

## Combining with State

```html
<input type="text" id="username" letz="user" />
<button clearz="#username" setz="user:">Clear & Reset State</button>

<p>Current user: <span getz="user"></span></p>
```

## Clear vs Reset

### clearz (Clear Values)

- Sets values to empty/default
- Maintains form structure
- Clears individual fields or entire forms

### Form reset() method

- Resets to original form values
- Built-in browser functionality
- Only works on forms

```html
<form id="exampleForm">
  <input name="field1" type="text" value="Original" />

  <!-- Clears to empty string -->
  <button type="button" clearz="#exampleForm">Clear Form</button>

  <!-- Resets to "Original" -->
  <button type="reset">Reset Form</button>
</form>
```

## Supported Selectors

- **ID**: `#inputId`, `#formId`
- **Class**: `.inputClass`, `.formClass`
- **Name**: `[name="fieldName"]`
- **Type**: `input[type="text"]`
- **Multiple**: `#id1, .class1, input[type="email"]`

## Best Practices

### ✅ Do

- Provide clear visual indication of what will be cleared
- Consider confirmation for forms with lots of data
- Use descriptive button text ("Clear Search", "Reset Form")
- Combine with state management for better UX

### ❌ Don't

- Clear forms without user confirmation on important data
- Use unclear button labels ("Clear" vs "Clear what?")
- Forget to update related state variables
- Clear required fields without validation handling

## Accessibility

```html
<!-- Good: Clear labeling -->
<button clearz="#searchForm" aria-label="Clear search form">
  Clear Search
</button>

<!-- Good: Confirmation for important forms -->
<button
  clearz="#applicationForm"
  onclick="return confirm('Clear entire application?')"
>
  Clear Application
</button>
```

## Related Attributes

- [`setz`](../Variables/set.md) - Update state variables
- [`submitz`](./submit.md) - Submit forms
- [`letz`](../Variables/let.md) - Bind form data to state
- [`clickz`](../Events/click.md) - Custom click actions

Perfect
