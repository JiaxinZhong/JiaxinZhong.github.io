// highlight-activate.js

window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.classList.add('flash-highlight');
      }
    }
  });
  