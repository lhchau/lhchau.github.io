// Fade elements in as they scroll into view. Without JS or with reduced motion, everything stays visible.
(function () {
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document.documentElement.classList.add("reveal-ready");
  document.querySelectorAll(".reveal, .publications ol.bibliography > li").forEach((el) => observer.observe(el));
})();
