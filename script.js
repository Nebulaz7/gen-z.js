/**
 * Gen-Z.js - A mini framework for HTML-first interactivity
 * Add functionality through HTML attributes ending with 'z'
 */

class GenZ {
  constructor() {
    const self = this;
    this.state = new Proxy(
      {},
      {
        set(target, property, value) {
          target[property] = value;
          self.updateView(property);
          return true;
        },
      }
    );
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.bindEvents());
    } else {
      this.bindEvents();
    }
  }

  bindEvents() {
    // Find all elements with gen-z attributes
    this.bindClickEvents();
    this.bindLetzEvents();
    this.bindValueEvents();
    this.bindToggleEvents();
    this.bindShowHideEvents();
    this.bindFormEvents();
    this.bindHoverEvents();
  }

  // Click events - alertz, clickz
  bindClickEvents() {
    // Alert on click: <button alertz="Hello World!">Click me</button>
    document.querySelectorAll("[alertz]").forEach((el) => {
      el.addEventListener("click", () => {
        const message = el.getAttribute("alertz");
        alert(message);
      });
    });

    // Custom click actions: <button clickz="console.log('clicked')">Click</button>
    document.querySelectorAll("[clickz]").forEach((el) => {
      el.addEventListener("click", () => {
        const action = el.getAttribute("clickz");
        this.executeAction(action, el);
      });
    });

    // Alert element's text content: <button alertz-text="#myElement">Alert Text</button>
    document.querySelectorAll("[alertz-text]").forEach((el) => {
      el.addEventListener("click", () => {
        const targetSelector = el.getAttribute("alertz-text");
        const target = document.querySelector(targetSelector);
        if (target) {
          alert(target.textContent || target.innerText);
        }
      });
    });
  }

  // Two-way data binding
  bindLetzEvents() {
    document.querySelectorAll("[letz]").forEach((el) => {
      const attrValue = el.getAttribute("letz");
      const [varName, type = "string"] = attrValue.split(":");

      const initialValue =
        el.type === "checkbox" ? el.checked : el.value || el.textContent;
      this.state[varName] = this._castToType(initialValue, type);

      // Hide element if hidez attribute is present
      if (el.hasAttribute("hidez")) {
        el.style.display = "none";
      }

      // Listen for input changes to update state
      el.addEventListener("input", () => {
        const newValue = el.type === "checkbox" ? el.checked : el.value;
        this.state[varName] = this._castToType(newValue, type);
      });
    });
  }

  _castToType(value, type) {
    switch (type.toLowerCase()) {
      case "number":
        return Number(value);
      case "boolean":
        if (typeof value === "boolean") return value;
        return value.toLowerCase() === "true" || value === "";
      case "null":
        return null;
      case "undefined":
        return undefined;
      case "object":
        try {
          return JSON.parse(value);
        } catch (e) {
          console.error(`Invalid JSON for object: ${value}`);
          return {};
        }
      default: // string
        return String(value);
    }
  }

  // Value manipulation
  bindValueEvents() {
    // Get value from state or input
    document.querySelectorAll("[getz]").forEach((el) => {
      const source = el.getAttribute("getz");
      if (source.startsWith("#") || source.startsWith(".")) {
        // Legacy support for getz from element
        const sourceEl = document.querySelector(source);
        if (sourceEl) {
          el.textContent = sourceEl.value;
          sourceEl.addEventListener("input", () => {
            el.textContent = sourceEl.value;
          });
        }
      } else {
        // Get from state
        this.updateView(source);
      }
    });

    // Set value to state or input
    document.querySelectorAll("[setz]").forEach((el) => {
      el.addEventListener("click", () => {
        const setzAttr = el.getAttribute("setz");
        const [target, expression] = setzAttr.split(/:(.*)/s);
        const value = this._evaluateExpression(expression);

        if (target.startsWith("#") || target.startsWith(".")) {
          // Legacy support for setz to element
          const targetEl = document.querySelector(target);
          if (targetEl) {
            if (targetEl.value !== undefined) {
              targetEl.value = value;
            } else {
              targetEl.textContent = value;
            }
          }
        } else {
          // Set state
          this.state[target] = value;
        }
      });
    });
  }

  _evaluateExpression(expression) {
    try {
      const stateKeys = Object.keys(this.state);
      const stateValues = stateKeys.map((key) => this.state[key]);
      const fn = new Function(...stateKeys, `return ${expression}`);
      return fn(...stateValues);
    } catch (err) {
      console.error(`Gen-Z.js expression error: ${err} in "${expression}"`);
      return undefined;
    }
  }

  updateView(property) {
    // Update elements with getz
    document.querySelectorAll(`[getz="${property}"]`).forEach((el) => {
      el.textContent = this.state[property];
    });

    // Update elements with letz (two-way binding)
    document.querySelectorAll(`[letz="${property}"]`).forEach((el) => {
      if (el.value !== undefined) {
        el.value = this.state[property];
      } else {
        el.textContent = this.state[property];
      }
    });
  }


  // Toggle functionality
  bindToggleEvents() {
    // Toggle visibility: <button togglez="#myElement">Toggle</button>
    document.querySelectorAll("[togglez]").forEach((el) => {
      el.addEventListener("click", () => {
        const targetSelector = el.getAttribute("togglez");
        const target = document.querySelector(targetSelector);
        if (target) {
          target.style.display = target.style.display === "none" ? "" : "none";
        }
      });
    });

    // Toggle class: <button togglez-class="#myElement:active">Toggle Active</button>
    document.querySelectorAll("[togglez-class]").forEach((el) => {
      el.addEventListener("click", () => {
        const [targetSelector, className] = el
          .getAttribute("togglez-class")
          .split(":");
        const target = document.querySelector(targetSelector);
        if (target) {
          target.classList.toggle(className);
        }
      });
    });
  }

  // Show/Hide functionality
  bindShowHideEvents() {
    // Show element: <button showz="#myElement">Show</button>
    document.querySelectorAll("[showz]").forEach((el) => {
      el.addEventListener("click", () => {
        const targetSelector = el.getAttribute("showz");
        const target = document.querySelector(targetSelector);
        if (target) {
          target.style.display = "";
        }
      });
    });

    // Hide element: <button hidez="#myElement">Hide</button>
    document.querySelectorAll("[hidez]").forEach((el) => {
      el.addEventListener("click", () => {
        const targetSelector = el.getAttribute("hidez");
        const target = document.querySelector(targetSelector);
        if (target) {
          target.style.display = "none";
        }
      });
    });
  }

  // Form functionality
  bindFormEvents() {
    // Clear form: <button clearz="#myForm">Clear</button>
    document.querySelectorAll("[clearz]").forEach((el) => {
      el.addEventListener("click", () => {
        const targetSelector = el.getAttribute("clearz");
        const target = document.querySelector(targetSelector);
        if (target && target.tagName === "FORM") {
          target.reset();
        } else if (target) {
          // Clear input field
          if (target.value !== undefined) {
            target.value = "";
          } else {
            target.textContent = "";
          }
        }
      });
    });

    // Submit form: <button submitz="#myForm">Submit</button>
    document.querySelectorAll("[submitz]").forEach((el) => {
      el.addEventListener("click", () => {
        const targetSelector = el.getAttribute("submitz");
        const target = document.querySelector(targetSelector);
        if (target && target.tagName === "FORM") {
          target.submit();
        }
      });
    });
  }

  // Hover effects
  bindHoverEvents() {
    // Hover class: <div hoverz="highlight">Hover me</div>
    document.querySelectorAll("[hoverz]").forEach((el) => {
      const className = el.getAttribute("hoverz");

      el.addEventListener("mouseenter", () => {
        el.classList.add(className);
      });

      el.addEventListener("mouseleave", () => {
        el.classList.remove(className);
      });
    });
  }

  // Execute custom actions (clickz, etc.)
  executeAction(action, element) {
    try {
      // turn the action string into a real function
      const fn = new Function(action);
      // call it in the context of the clicked element
      fn.call(element);
    } catch (err) {
      console.error("Gen-Z.js action error:", err);
    }
  }
}

// ← end of class GenZ

// instantiate the framework
new GenZ();
