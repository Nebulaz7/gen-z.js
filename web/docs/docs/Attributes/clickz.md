# Clickz

The `clickz` attribute is a powerful feature for handling custom scenarios not covered by other attributes. It's your "escape hatch" for adding unique functionality when you need more than the built-in Gen-Z.js attributes can provide.

## Syntax

```html
<element clickz="javascript_expression"></element>
```

## How It Works

- **Click trigger**: Executes when the element is clicked
- **JavaScript execution**: Runs any valid JavaScript expression
- **Custom logic**: Perfect for unique scenarios and complex interactions
- **State access**: Can access and modify Gen-Z.js state variables

## Basic Examples

### Simple Actions

```html
<button clickz="alert('Hello World!')">Show Alert</button>
<button clickz="console.log('Debug info')">Log to Console</button>
<button clickz="window.open('https://example.com')">Open Link</button>
```

### State Manipulation

```html
<input type="text" letz="message" />
<button clickz="alert(genZ.get('message'))">Show Message</button>
<button clickz="genZ.set('message', 'Hello from clickz!')">Set Message</button>
```

### Multiple Actions

```html
<button clickz="console.log('Saving...'); alert('Profile saved!')">
  Save Profile
</button>
```

## Best Practices

### ✅ Keep It Simple

Use `clickz` for short, single actions:

```html
<!-- Good: Simple actions -->
<button clickz="alert('Profile saved!')">Save</button>
<button clickz="console.log('User clicked')">Debug</button>
<button clickz="location.reload()">Refresh Page</button>
```

### ✅ Use Functions for Complex Logic

For anything more complex, define functions and call them:

```html
<!-- Best Practice: Complex logic in functions -->
<button clickz="validateAndSubmit()">Submit Form</button>
<button clickz="processUserData()">Process Data</button>
<button clickz="initializeWidget()">Initialize</button>

<script>
  function validateAndSubmit() {
    const user = document.getElementById("username").value;
    if (user === "") {
      alert("Username cannot be empty!");
      return;
    }
    // More complex validation logic...
    document.getElementById("myForm").submit();
  }

  function processUserData() {
    // Complex data processing...
    const data = collectFormData();
    validateData(data);
    sendToAPI(data);
  }
</script>
```

## Common Use Cases

### Form Validation

```html
<form id="loginForm">
  <input id="username" type="text" required />
  <input id="password" type="password" required />
  <button type="button" clickz="validateLogin()">Login</button>
</form>

<script>
  function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Additional validation logic...
    document.getElementById("loginForm").submit();
  }
</script>
```

### Dynamic Content Loading

```html
<button clickz="loadMoreContent()">Load More</button>
<div id="content"></div>

<script>
  function loadMoreContent() {
    const content = document.getElementById("content");
    const newItem = document.createElement("div");
    newItem.textContent = `Item ${content.children.length + 1}`;
    content.appendChild(newItem);
  }
</script>
```

### API Integration

```html
<button clickz="saveUserPreferences()">Save Preferences</button>

<script>
  async function saveUserPreferences() {
    const preferences = {
      theme: genZ.get("selectedTheme"),
      language: genZ.get("selectedLanguage"),
    };

    try {
      const response = await fetch("/api/preferences", {
        method: "POST",
        body: JSON.stringify(preferences),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        alert("Preferences saved!");
      } else {
        alert("Error saving preferences");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error");
    }
  }
</script>
```

### Browser APIs

```html
<button clickz="shareContent()">Share</button>
<button clickz="copyToClipboard()">Copy Link</button>
<button clickz="requestNotificationPermission()">Enable Notifications</button>

<script>
  function shareContent() {
    if (navigator.share) {
      navigator.share({
        title: "My App",
        text: "Check out this awesome app!",
        url: window.location.href,
      });
    } else {
      copyToClipboard();
    }
  }

  function copyToClipboard() {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => alert("Link copied to clipboard!"));
  }

  function requestNotificationPermission() {
    Notification.requestPermission().then((permission) => {
      alert(`Notifications ${permission}`);
    });
  }
</script>
```

## Advanced Examples

### State Management Integration

```html
<input type="text" letz="searchTerm" />
<button clickz="performSearch()">Search</button>
<div id="results"></div>

<script>
  function performSearch() {
    const term = genZ.get("searchTerm");
    if (!term) {
      alert("Please enter a search term");
      return;
    }

    // Simulate search
    const results = [`Result 1 for "${term}"`, `Result 2 for "${term}"`];
    genZ.set("searchResults", results);

    // Update UI
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = results.map((r) => `<p>${r}</p>`).join("");
  }
</script>
```

### Conditional Logic

```html
<input type="checkbox" letz="agreeToTerms:Boolean" />
<button clickz="conditionalSubmit()">Submit</button>

<script>
  function conditionalSubmit() {
    if (!genZ.get("agreeToTerms")) {
      alert("Please agree to the terms first");
      return;
    }

    // Proceed with submission
    document.getElementById("mainForm").submit();
  }
</script>
```

## What NOT to Do

### ❌ Complex Logic in HTML

```html
<!-- Bad: Too complex for HTML -->
<button
  clickz="
  const user = document.getElementById('user').value;
  if (user.length < 3) {
    alert('Username too short');
    return;
  }
  fetch('/api/user', {method: 'POST', body: JSON.stringify({user})})
    .then(r => r.json())
    .then(data => alert('Success: ' + data.message));
"
>
  Submit
</button>
```

### ❌ Inline Event Handlers

```html
<!-- Bad: Use clickz instead -->
<button onclick="myFunction()">Click</button>

<!-- Good: Use clickz -->
<button clickz="myFunction()">Click</button>
```

## Security Considerations

- Never use `clickz` with user-generated content
- Validate all inputs before processing
- Be cautious with `eval()` or similar functions
- Sanitize data when making API calls

## Related Attributes

- [`alertz`](../Alert/alert.md) - Simple alert messages
- [`setz`](../Variables/set.md) - Update state variables
- [`submitz`](../Form%20Controls/submit.md) - Submit forms
- [`togglez`](../Visibility/toggle.md) - Toggle visibility

## When to Use clickz

Use `clickz` when:

- You need custom logic not covered by other attributes
- Integrating with third-party libraries
- Making API calls
- Complex form validation
- Browser API integration

Don't use `clickz` when:

- Simple actions can be done with other Gen-Z.js attributes
- You're just setting state (use `setz`)
- You're just showing alerts (use `alertz`)
- You're just submitting forms (use `submitz`)

By following this pattern, you get the best of both worlds: the simplicity of Gen-Z.js attributes for event binding, and the power and maintainability of regular
