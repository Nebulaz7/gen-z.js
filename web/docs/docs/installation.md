---
title: Installation
sidebar_position: 1.1
---

# Installation

Get started with GenZ.js in minutes! Choose the installation method that best fits your project needs.

---

## 🚀 CLI Installation (Recommended)

The fastest way to create a new GenZ.js project is using our official scaffolding tool. This method sets up a complete development environment with best practices built-in.

### Create a New Project

```bash
npx create-genz-app my-app
cd my-app
npm run dev
```

### What You Get

Your new project includes:

| Feature                      | Description                           |
| ---------------------------- | ------------------------------------- |
| ⚡ **Vite Dev Server**       | Lightning-fast hot module replacement |
| 🎨 **Starter Template**      | Beautiful examples to learn from      |
| 📦 **GenZ.js Pre-installed** | Latest version ready to use           |
| 🔥 **Hot Reload**            | See changes instantly                 |
| 📁 **Organized Structure**   | Clean file organization               |

### Project Structure

After running the CLI, you'll have this structure:

```
my-app/
├── index.html          # Main HTML file with GenZ.js examples
├── style.css           # Starter styles
├── public/
│   ├── gen-z.min.js   # GenZ.js framework
│   └── assets/
│       └── logo.svg   # GenZ.js logo
└── package.json
```

### Available Commands

Once your project is created, you can use these commands:

```bash
# Start development server (default: http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Requirements

- **Node.js** 14.0.0 or higher
- **npm** 6.0.0 or higher (or **yarn** 1.22.0+)

---

## 🌐 CDN (Quick Setup)

Perfect for quick prototypes, learning, or adding GenZ.js to existing projects without a build step.

### Using jsDelivr (Recommended)

Add this script tag to your HTML file before the closing `</body>` tag:

```html
<script src="https://cdn.jsdelivr.net/gh/Nebulaz7/gen-z.js@1.1.0/dist/gen-z.min.js"></script>
```

### Alternative CDNs

**unpkg:**

```html
<script src="https://unpkg.com/gen-z.js@1.1.0/dist/gen-z.min.js"></script>
```

**GitHub Raw (for development only):**

```html
<script src="https://raw.githubusercontent.com/Nebulaz7/gen-z.js/main/dist/gen-z.min.js"></script>
```

### Complete HTML Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My GenZ.js App</title>
  </head>
  <body>
    <h1>Hello GenZ.js!</h1>

    <!-- Your GenZ.js code here -->
    <input letz="count:Number" type="number" value="0" hidez />
    <button setz="count:count + 1">Count is <span getz="count"></span></button>

    <!-- Include GenZ.js -->
    <script src="https://cdn.jsdelivr.net/gh/Nebulaz7/gen-z.js@1.1.0/dist/gen-z.min.js"></script>
  </body>
</html>
```

### When to Use CDN

✅ **Good for:**

- Quick prototypes and demos
- Learning and experimentation
- Small projects without build tools
- Adding interactivity to static sites

❌ **Not ideal for:**

- Large production applications
- Projects requiring custom builds
- Offline-first applications

---

## 📥 Manual Installation

For projects with specific requirements or custom build setups, you can manually download and include GenZ.js.

### Step 1: Download

Download the latest `gen-z.min.js` from:

- [GitHub Releases](https://github.com/Nebulaz7/gen-z.js/releases)
- Direct download: [gen-z.min.js](https://github.com/Nebulaz7/gen-z.js/raw/main/dist/gen-z.min.js)

### Step 2: Add to Your Project

Place the file in your project directory:

```
your-project/
├── index.html
├── styles.css
└── js/
    └── gen-z.min.js
```

### Step 3: Include in HTML

Add the script tag before the closing `</body>` tag:

```html
<script src="./js/gen-z.min.js"></script>
```

### Step 4: Verify Installation

Create a simple test to verify GenZ.js is working:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GenZ.js Test</title>
  </head>
  <body>
    <h1>GenZ.js Installation Test</h1>

    <input letz="message:String" value="Hello World!" hidez />
    <p>Message: <span getz="message"></span></p>

    <script src="./js/gen-z.min.js"></script>
    <script>
      console.log("GenZ.js loaded successfully!");
    </script>
  </body>
</html>
```

If you see "Hello World!" displayed on the page, GenZ.js is installed correctly! ✅

---

## 🎯 Which Method Should I Choose?

| Method     | Best For                      | Setup Time | Build Tools |
| ---------- | ----------------------------- | ---------- | ----------- |
| **CLI**    | New projects, full-stack apps | 2 minutes  | ✅ Included |
| **CDN**    | Prototypes, small projects    | 30 seconds | ❌ None     |
| **Manual** | Custom setups, specific needs | 1 minute   | ⚙️ Optional |

---

## 📚 Next Steps

Now that you have GenZ.js installed, you're ready to start building!

- 📖 [Learn the Basics](./index.md) - Understand core concepts
- 🎨 [Styling Guide](./styling.md) - Style your components
- 💡 [View Examples](./examples) - See GenZ.js in action
- 🔧 [API Reference](./selectors.md) - Explore all attributes

---

## 🆘 Troubleshooting

### Common Issues

**Script not loading:**

- Check that the script path is correct
- Verify the file exists in your project
- Check browser console for errors

**GenZ.js not working:**

- Ensure script is loaded before using GenZ.js attributes
- Check that script tag is before closing `</body>` tag
- Verify you're using the correct syntax (attributes ending in 'z')

**CDN issues:**

- Check your internet connection
- Try an alternative CDN
- Download and use manual installation as fallback

### Still Having Issues?

- 📖 [Check the documentation](https://genz-js.vercel.app/docs)
- 💬 [Open an issue on GitHub](https://github.com/Nebulaz7/gen-z.js/issues)
- ⭐ [Join our community](https://github.com/Nebulaz7/gen-z.js/discussions)

---

That's it! You're ready to start building interactive web experiences with GenZ.js. Happy coding! 🎉
