const prefersReducedMotion = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function setup(el, binding) {
  const opts = (binding && binding.value) || {};
  const delay = Number(opts.delay ?? 0);
  const y = Number(opts.y ?? 18);
  const once = opts.once !== false;

  if (prefersReducedMotion()) {
    el.classList.add("reveal-ready");
    return;
  }

  el.style.setProperty("--reveal-delay", `${delay}ms`);
  el.style.setProperty("--reveal-y", `${y}px`);

  // começa escondido, mas só entra quando rolar
  el.classList.add("reveal-init");

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        el.classList.add("reveal-in");
        if (once) io.unobserve(el);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -12% 0px" }
  );

  io.observe(el);
  el.__revealIO = io;
}

function cleanup(el) {
  if (el.__revealIO) el.__revealIO.disconnect();
  delete el.__revealIO;
}

export default {
  // Vue 3
  mounted(el, binding) { setup(el, binding); },
  unmounted(el) { cleanup(el); },

  // Vue 2
  inserted(el, binding) { setup(el, binding); },
  unbind(el) { cleanup(el); },
};