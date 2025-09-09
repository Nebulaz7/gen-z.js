# 🔥 GenZ.js - HTML-First Interactivity Framework

A JavaScript library that lets you add interactivity to HTML without writing JavaScript code. Just add attributes ending with "z" to your HTML elements!

Instead of writing JavaScript like this:

```js
document.querySelector("button").addEventListener("click", () => {
  alert("Hello World!");
});
```

With GenZ.js, you just write:

```html
<button alertz="Hello World!">Click me</button>
```

## 🚀 Features

- **Zero JavaScript knowledge required** - Add functionality through HTML attributes
- **Lightweight** - Small footprint, fast loading
- **Intuitive** - All attributes end with "z" for easy recognition
- **Powerful** - Covers most common interactive need.

## 📖 Quick Start

1. Include Gen‑Z via CDN
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
    <script src="https://cdn.jsdelivr.net/gh/Nebulaz7/gen-z.js@0.0.1/dist/gen-z-v.0.0.1.js"></script>
  </body>
</html>
```

## 📄 Documentation

You can view the documentation in the official site [docs](https://genz-js.vercel.app/docs)

## 🤝 Contributing

Want to add more "z" attributes? The framework is designed to be easily extensible. Check out the `bindEvents()` method in `script.js` to see how new attributes are added.

## 📄 License

Free to use and modify. Built with ❤️ for the Gen-Z developers who want HTML-first interactivity!

---

**Happy coding! 🚀✨**
