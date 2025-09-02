# Contributing to Gen-Z.js

We welcome contributions to make Gen-Z.js even better! Whether you're fixing bugs, adding new "z" attributes, improving documentation, or enhancing performance, your help is appreciated.

## 🤝 Getting Started

### Prerequisites

- Basic knowledge of JavaScript
- Understanding of HTML attributes and DOM manipulation
- Familiarity with Git and GitHub

### Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/gen-z.js.git
   cd gen-z.js
   ```
3. Create a new branch for your feature:
   ```bash
   git checkout -b feature/new-z-attribute
   ```

## 🎯 How to Add New "Z" Attributes

The framework is designed to be easily extensible. Here's how to add new attributes:

### 1. Understand the Structure

Look at the `bindEvents()` method in `script.js` to see how existing attributes are implemented:

```javascript
// Example from bindEvents()
document.querySelectorAll("[alertz]").forEach((element) => {
  element.addEventListener("click", function () {
    const message = this.getAttribute("alertz");
    alert(message);
  });
});
```

### 2. Add Your New Attribute

Follow this pattern to add new functionality:

```javascript
// Add to bindEvents() method
document.querySelectorAll("[yourNewAttributez]").forEach((element) => {
  element.addEventListener("click", function () {
    const value = this.getAttribute("yourNewAttributez");
    // Your custom logic here
    yourCustomFunction(value);
  });
});
```

### 3. Example: Adding a `logz` Attribute

```javascript
// In bindEvents() method
document.querySelectorAll("[logz]").forEach((element) => {
  element.addEventListener("click", function () {
    const message = this.getAttribute("logz");
    console.log(`[Gen-Z Log]: ${message}`);
  });
});
```

## 📝 Contribution Guidelines

### Code Style

- Use camelCase for JavaScript variables and functions
- Add comments for complex logic
- Follow existing naming patterns (attributes end with "z")
- Keep functions small and focused

### Attribute Naming Convention

- All attributes must end with "z" (e.g., `alertz`, `togglez`, `yourAttributez`)
- Use descriptive names that clearly indicate functionality
- Avoid conflicts with existing HTML attributes

### Testing Your Changes

1. Create test HTML files in `/examples`
2. Test across different browsers
3. Verify compatibility with existing attributes
4. Test edge cases and error handling

## 🚀 Types of Contributions

### 1. New Z-Attributes

Add new functionality while maintaining simplicity:

- DOM manipulation attributes
- Event handling attributes
- State management enhancements
- Animation and transition helpers

### 2. Bug Fixes

- Fix existing attribute behaviors
- Improve error handling
- Address browser compatibility issues

### 3. Documentation

- Improve existing docs
- Add examples and use cases
- Create tutorials
- Fix typos and grammar

### 4. Performance Improvements

- Optimize DOM queries
- Reduce bundle size
- Improve initialization speed

## 📋 Pull Request Process

### Before Submitting

1. **Test thoroughly**: Ensure your changes work across browsers
2. **Update documentation**: Add docs for new attributes
3. **Add examples**: Create usage examples in `/examples`
4. **Check compatibility**: Verify existing functionality still works

### PR Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] New z-attribute
- [ ] Bug fix
- [ ] Documentation update
- [ ] Performance improvement

## New Attribute Details (if applicable)

- **Attribute name**: `yourAttributez`
- **Functionality**: What it does
- **Usage**: `<element yourAttributez="value">`

## Testing

- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Added examples
- [ ] Updated documentation

## Checklist

- [ ] Code follows project style
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Examples added
```

## 🎨 Example Contributions

### Simple Attribute Example

```javascript
// Add scrollz attribute for smooth scrolling
document.querySelectorAll("[scrollz]").forEach((element) => {
  element.addEventListener("click", function () {
    const target = this.getAttribute("scrollz");
    const targetElement = document.querySelector(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});
```

Usage:

```html
<button scrollz="#section2">Scroll to Section 2</button>
<div id="section2">Content here</div>
```

### State-Aware Attribute Example

```javascript
// Add copyz attribute for copying state values
document.querySelectorAll("[copyz]").forEach((element) => {
  element.addEventListener("click", function () {
    const stateName = this.getAttribute("copyz");
    const value = GenZ.getState(stateName);
    if (value) {
      navigator.clipboard.writeText(value.toString());
      console.log(`Copied "${value}" to clipboard`);
    }
  });
});
```

Usage:

```html
<input type="text" letz="userEmail" />
<button copyz="userEmail">Copy Email</button>
```

## 🐛 Reporting Issues

### Bug Reports

Include:

- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Minimal code example
- Console errors (if any)

### Feature Requests

Include:

- Use case description
- Proposed attribute name
- Example usage
- Why existing attributes don't cover this need

## 📚 Documentation Standards

### For New Attributes

1. **Syntax section**: Clear syntax example
2. **How it works**: Brief explanation
3. **Basic example**: Simple usage
4. **Common use cases**: Real-world examples
5. **Best practices**: Do's and don'ts

### Documentation Template

```markdown
# YourAttributez

Brief description of what the attribute does.

## Syntax

\`\`\`html
<element yourAttributez="value">
\`\`\`

## How It Works

- Explain the behavior
- When it triggers
- What it affects

## Examples

[Add practical examples]

## Best Practices

[Add guidelines]
```

## 🏷️ Release Process

1. **Version bumping**: Follow semantic versioning
2. **Changelog**: Update with new features/fixes
3. **Testing**: Full regression testing
4. **CDN update**: Ensure CDN links work
5. **Documentation**: Update version references

## 🙋‍♀️ Getting Help

- **Questions**: Open a discussion on GitHub
- **Ideas**: Share in issues with "enhancement" label
- **Code review**: Ask for feedback in draft PRs

## 🎉 Recognition

All contributors will be:

- Listed in the project README
- Credited in release notes
- Mentioned in documentation (for significant contributions)

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

**Ready to contribute?** Start by exploring the codebase, particularly the `bindEvents()` method, and see how you can add your own "z" attribute to make Gen-Z.js even more
