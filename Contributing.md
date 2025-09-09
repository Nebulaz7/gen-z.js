# Contributing to GenZ.js

Welcome! GenZ.js thrives on community contributions. Whether you're reporting bugs, adding new "z" attributes, or improving docs, your help makes GenZ.js better for everyone.

## 🚀 Quick Start

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/your-username/gen-z.js.git`
3. **Create branch**: `git checkout -b feature/your-feature`
4. **Make changes** following our guidelines below
5. **Test thoroughly** in multiple browsers
6. **Submit PR** with clear description

## 🐛 Reporting Bugs

**Found a bug?** Help us fix it by providing:

````markdown
**Browser**: Chrome 118.x / Firefox 119.x / Safari 17.x
**GenZ.js Version**: 1.1.0
**Issue**: Brief description
**Steps to Reproduce**:

1. Create HTML with `<button alertz="test">Click</button>`
2. Click the button
3. Expected: Alert shows "test"
4. Actual: Nothing happens

**Code Example**:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/gh/Nebulaz7/gen-z.js@1.1.0/dist/gen-z.min.js"></script>
  </head>
  <body>
    <button alertz="test">Click me</button>
  </body>
</html>
```
````

**Console Errors**: (if any)

````

## ⚡ Adding New "Z" Attributes

GenZ.js is designed to be easily extensible. Here's how to add new attributes:

### 1. Find the Pattern
Look at existing attributes in the source code:

```javascript
// Example: alertz attribute
document.querySelectorAll("[alertz]").forEach((element) => {
  element.addEventListener("click", function () {
    const message = this.getAttribute("alertz");
    alert(message);
  });
});
````

### 2. Add Your Attribute

Follow this template:

```javascript
// Add to the main binding function
document.querySelectorAll("[yourNewAttributez]").forEach((element) => {
  element.addEventListener("click", function () {
    const value = this.getAttribute("yourNewAttributez");
    // Your custom logic here
    yourCustomFunction(value);
  });
});
```

### 3. Naming Rules

- ✅ **Must end with "z"**: `logz`, `copyz`, `scrollz`
- ✅ **Descriptive**: Clearly indicates what it does
- ✅ **Short**: Easy to type and remember
- ❌ **Avoid conflicts**: Don't conflict with HTML attributes

### 4. Example: Adding `logz` Attribute

```javascript
// Implementation
document.querySelectorAll("[logz]").forEach((element) => {
  element.addEventListener("click", function () {
    const message = this.getAttribute("logz");
    console.log(`[GenZ]: ${message}`);
  });
});
```

```html
<!-- Usage -->
<button logz="Button clicked!">Click to Log</button>
```

## 🧪 Testing Your Changes

Before submitting:

1. **Create test file** in `/examples/` or `/test/`
2. **Test browsers**: Chrome, Firefox, Safari minimum
3. **Verify compatibility**: Ensure existing attributes still work
4. **Test edge cases**: Empty values, special characters, etc.

```html
<!-- Test template -->
<!DOCTYPE html>
<html>
  <head>
    <title>Testing YourAttributez</title>
    <script src="../dist/gen-z.min.js"></script>
  </head>
  <body>
    <h1>Testing YourAttributez</h1>

    <!-- Basic test -->
    <button yourAttributez="basic test">Basic Test</button>

    <!-- Edge cases -->
    <button yourAttributez="">Empty Value</button>
    <button yourAttributez="special chars: !@#$%">Special Characters</button>
  </body>
</html>
```

## 💡 Suggesting Fixes

**Have an idea for improvement?** Open an issue with:

- **Problem**: What current limitation you've encountered
- **Solution**: Your proposed fix or enhancement
- **Use Case**: Real-world scenario where this helps
- **Implementation**: If you have code ideas, share them!

**Example Issue:**

````markdown
**Title**: Add `focusz` attribute for automatic focus management

**Problem**: No easy way to focus elements without JavaScript

**Proposed Solution**:

```html
<input focusz="onload" placeholder="Auto-focused on page load" />
<button focusz="#username">Focus Username Field</button>
```
````

**Use Case**: Forms where you want to guide user attention

**Implementation Ideas**:

- `focusz="onload"` - focus on page load
- `focusz="#elementId"` - focus target element on click

````

## 📝 Pull Request Guidelines

### PR Checklist
- [ ] **Tested** in multiple browsers
- [ ] **Examples** added to demonstrate usage
- [ ] **Documentation** updated (if adding new feature)
- [ ] **Code follows** existing style patterns
- [ ] **No breaking changes** to existing attributes

### PR Template
```markdown
## What this PR does
Brief description of changes

## Type of change
- [ ] 🐛 Bug fix
- [ ] ✨ New z-attribute
- [ ] 📚 Documentation
- [ ] 🚀 Performance improvement

## New attribute details (if applicable)
- **Name**: `yourAttributez`
- **Purpose**: What it does
- **Usage**: `<element yourAttributez="value">`

## Testing
- [ ] Chrome ✅
- [ ] Firefox ✅
- [ ] Safari ✅
- [ ] Examples added ✅
````

## 🎯 Contribution Ideas

**Easy contributions:**

- Fix typos in documentation
- Add examples for existing attributes
- Report browser compatibility issues
- Improve error handling

**Medium contributions:**

- Add new "z" attributes
- Improve performance
- Add unit tests
- Create tutorials

**Advanced contributions:**

- Framework integrations (React, Vue, etc.)
- Build process improvements
- Advanced state management features

## 🏷️ Code Style

- Use **clear, descriptive names**
- Add **comments** for complex logic
- Follow **existing patterns** in the codebase
- Keep functions **small and focused**
- Test **edge cases** thoroughly

## 🎉 Recognition

Contributors get:

- 📝 **Credit** in README and release notes
- 🏆 **Contributor badge** on GitHub
- 💬 **Mention** in project announcements

## 📞 Getting Help

- 💬 **Questions**: Open a GitHub Discussion
- 🐛 **Bug reports**: Create an Issue
- 💡 **Feature ideas**: Start with an Issue
- 🔧 **Code help**: Ask in draft PR

---

**Ready to contribute?** Start by exploring existing attributes and see what new "z" attribute would make GenZ.js even more awesome! 🚀
