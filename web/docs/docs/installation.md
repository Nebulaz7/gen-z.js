---
title: Installation
sidebar_position: 1.1
---

# Installation

Get started with GenZ.js in minutes! Choose the installation method that best fits your project needs.

---

## CLI Installation (Recommended)

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

## CDN (Quick Setup)

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

## Manual Installation

For projects with specific requirements or custom build setups, you can manually download and include GenZ.js.

**Step 1: Download**

Download the latest `gen-z.min.js` from:

- [GitHub Releases](https://github.com/Nebulaz7/gen-z.js/releases)
- Direct download: [gen-z.min.js](https://github.com/Nebulaz7/gen-z.js/raw/main/dist/gen-z.min.js)

**Step 2: Add to Your Project**

Place the file in your project directory:

```
your-project/
├── index.html
├── styles.css
└── js/
    └── gen-z.min.js
```

**Step 3: Include in HTML**

Add the script tag before the closing `</body>` tag:

```html
<script src="./js/gen-z.min.js"></script>
```

---

## Which Method Should I Choose?

| Method     | Best For                      | Setup Time | Build Tools |
| ---------- | ----------------------------- | ---------- | ----------- |
| **CLI**    | New projects, full-stack apps | 2 minutes  | Included    |
| **CDN**    | Prototypes, small projects    | 30 seconds | None        |
| **Manual** | Custom setups, specific needs | 1 minute   | Optional    |

---
