---
title: Extending GenZ.js
sidebar_position: 3
---

# Extending GenZ.js

You can extend Gen-Z.js by accessing the global GenZ class and framework instance for custom functionality.

## Global GenZ Class

### Content Manipulation

```javascript
// Add content to elements
GenZ.addContent("#myDiv", "<p>New paragraph</p>");

// Set content (replaces existing)
GenZ.setContent("#myDiv", "<h2>New heading</h2>");

// Clear content
GenZ.setContent("#myDiv", "");
```

### Custom Utilities

```javascript
// Create custom helper functions
GenZ.customAlert = function (message) {
  alert(`[Custom] ${message}`);
};

// Use your custom method
GenZ.customAlert("Hello from extended Gen-Z!");
```

## Framework Instance

Access the main framework instance for advanced operations:

```javascript
// Get the framework instance
const framework = window.genZ;

// Access state directly
console.log(framework.state);

// Set state values programmatically
framework.setState("customVar", "Custom Value");

// Get state values
const value = framework.getState("customVar");
```

## Practical Examples

### Custom State Management

```javascript
// Bulk state updates
function updateUserProfile(userData) {
  const framework = window.genZ;
  framework.setState("user.name", userData.name);
  framework.setState("user.email", userData.email);
  framework.setState("user.isActive", userData.active);
}

// Usage
updateUserProfile({
  name: "John Doe",
  email: "john@example.com",
  active: true,
});
```

### Dynamic Content Loading

```javascript
// Custom content loader
function loadDynamicContent(selector, url) {
  fetch(url)
    .then((response) => response.text())
    .then((html) => GenZ.setContent(selector, html));
}

// Usage
loadDynamicContent("#content", "/api/dynamic-content");
```

### Custom Event Handlers

```javascript
// Add custom clickz functions
window.customSubmit = function () {
  const framework = window.genZ;
  const formData = {
    name: framework.getState("userName"),
    email: framework.getState("userEmail"),
  };

  console.log("Submitting:", formData);
  // Custom submission logic here
};
```

```html
<!-- Use in HTML -->
<button clickz="customSubmit()">Submit with Custom Logic</button>
```

## API Reference

### GenZ Static Methods

- `GenZ.addContent(selector, content)` - Add HTML content
- `GenZ.setContent(selector, content)` - Set HTML content

### Framework Instance Methods

- `framework.setState(key, value)` - Set state variable
- `framework.getState(key)` - Get state variable
- `framework.state` - Access full state object

## Best Practices

### ✅ Do

- Use the global methods for DOM manipulation
- Access framework instance for state management
- Create reusable utility functions
- Follow existing Gen-Z naming conventions

### ❌ Don't

- Modify the framework's internal methods
- Directly manipulate the state object
- Override core Gen-Z functionality
- Break the attribute-driven paradigm

Perfect for adding custom functionality while maintaining Gen-Z's simplicity!
