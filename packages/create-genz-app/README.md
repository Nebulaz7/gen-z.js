<div align="center">

# 🚀 create-genz-app

⚡ Quickly scaffold a new [GenZ.js](https://genz-js.vercel.app) project with a single command.

[![npm version](https://img.shields.io/npm/v/create-genz-app.svg)](https://www.npmjs.com/package/create-genz-app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

---

## 📖 What is GenZ.js?

**GenZ.js** is a mini framework for HTML-first interactivity. Add functionality through simple HTML attributes ending with **'z'** - no complex JavaScript required!

---

## ⚡ Quick Start

Create a new GenZ.js app with one command:

```bash
npx create-genz-app my-app
cd my-app
npm run dev
```

**That's it!** 🎉 Your app will be running at `http://localhost:5173`

---

## 📦 What's Included?

Your new project comes with:

| Feature                       | Description                        |
| ----------------------------- | ---------------------------------- |
| ⚡ **Vite**                   | Lightning fast development server  |
| 🎨 **Pre-configured styling** | Beautiful starter template         |
| 📦 **GenZ.js**                | Ready to use interactive framework |
| 🔥 **Hot reload**             | See changes instantly              |

---

## 📁 Project Structure

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

---

## 🛠️ Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |

---

## 💡 Example Usage

The starter template includes a **counter example** using GenZ.js:

```html
<input letz="count:Number" type="number" value="0" hidez />
<button setz="count:count + 1" class="counter-button">
  Count is <span getz="count"></span>
</button>
```

### How it works:

- `letz` - Declares a reactive variable
- `setz` - Sets/updates the variable value
- `getz` - Displays the variable value
- `hidez` - Hides the input element

---

## 📚 Learn More

| Resource             | Link                                                   |
| -------------------- | ------------------------------------------------------ |
| 📖 **Documentation** | [GenZ.js Docs](https://genz-js.vercel.app/docs)        |
| 💡 **Examples**      | [View Examples](https://genz-js.vercel.app/examples)   |
| ⭐ **GitHub**        | [Star on GitHub](https://github.com/Nebulaz7/gen-z.js) |
| 🌐 **Website**       | [Official Website](https://genz-js.vercel.app)         |

---

## ✅ Requirements

- **Node.js** 14+
- **npm** or **yarn**

---

## 📄 License

[MIT](LICENSE)

---

<div align="center">

### Created with ❤️ for the GenZ.js community

**[Website](https://genz-js.vercel.app)** • **[Docs](https://genz-js.vercel.app/docs)** • **[GitHub](https://github.com/Nebulaz7/gen-z.js)**

</div>
