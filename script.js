/**
 * Gen-Z.js - A mini framework for HTML-first interactivity
 * Add functionality through HTML attributes ending with 'z'
 */

class GenZ {
  constructor() {
    this.variables = {};
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
    // Variable storage: <element letz="variableName">value</element>
    document.querySelectorAll("[letz]").forEach((el) => {
      const varName = el.getAttribute("letz");
      const updateVar = () => {
        const val = el.value !== undefined ? el.value : el.textContent;
        this.variables[varName] = val;
        window[varName] = val; // expose as global
      };

      // initial capture
      updateVar();

      // keep it in sync
      if (el.value !== undefined) {
        // inputs, textareas, selects…
        el.addEventListener("input", updateVar);
      } else {
        // any other element — click to re-capture its text
        el.addEventListener("click", updateVar);
      }
    });

    // Get value from input: <span getz="#inputId">Default</span>
    document.querySelectorAll("[getz]").forEach((el) => {
      const sourceSelector = el.getAttribute("getz");
      const sourceEl = document.querySelector(sourceSelector);

      if (sourceEl) {
        // Initial value
        if (sourceEl.value !== undefined) {
          el.textContent = sourceEl.value;
          console.log(sourceEl.value);
        }

        // Update on input change
        sourceEl.addEventListener("input", () => {
          el.textContent = sourceEl.value;
          console.log(sourceEl.value);
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
