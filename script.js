/**
 * Gen-Z.js - A mini framework for HTML-first interactivity
 * Add functionality through HTML attributes ending with 'z'
 */

class GenZ {
  constructor() {
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

  // Value manipulation
  bindValueEvents() {
    // Get value from input: <span getz="#inputId">Default</span>
    document.querySelectorAll("[getz]").forEach((el) => {
      const sourceSelector = el.getAttribute("getz");
      const sourceEl = document.querySelector(sourceSelector);

      if (sourceEl) {
        // Initial value
        if (sourceEl.value !== undefined) {
          el.textContent = sourceEl.value;
        }

        // Update on input change
        sourceEl.addEventListener("input", () => {
          el.textContent = sourceEl.value;
        });
      }
    });

    // Set value to input: <button setz="#inputId:Hello World">Set Value</button>
    document.querySelectorAll("[setz]").forEach((el) => {
      el.addEventListener("click", () => {
        const [targetSelector, value] = el.getAttribute("setz").split(":");
        const target = document.querySelector(targetSelector);
        if (target) {
          if (target.value !== undefined) {
            target.value = value;
          } else {
            target.textContent = value;
          }
        }
      });
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

  // Execute custom actions
  executeAction(action, element) {
    try {
      // Simple action parser
      if (action.includes("alert(")) {
        const message = action.match(/alert\(['"](.+)['"]\)/)?.[1];
        if (message) alert(message);
      } else if (action.includes("console.log(")) {
        const message = action.match(/console\.log\(['"](.+)['"]\)/)?.[1];
        if (message) console.log(message);
      } else {
        // Fallback: try to execute as JavaScript (be careful with this!)
        new Function("element", action)(element);
      }
    } catch (error) {
      console.error("GenZ Action Error:", error);
    }
  }

  // Utility method to add dynamic content
  static addContent(selector, content) {
    const target = document.querySelector(selector);
    if (target) {
      target.innerHTML += content;
    }
  }

  // Utility method to replace content
  static setContent(selector, content) {
    const target = document.querySelector(selector);
    if (target) {
      target.innerHTML = content;
    }
  }
}

// Initialize Gen-Z framework
const genZ = new GenZ();

// Make it globally available
window.GenZ = GenZ;
