import { useEffect, useState } from "react";

function ScrollToTop({ label, onNavigateHome }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 380);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => onNavigateHome?.()}
      className="icon-lift group fixed bottom-[5.25rem] right-4 z-40 grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_8px_24px_rgba(2,6,23,0.12)] transition hover:border-blue-200 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:bottom-8"
      aria-label={label}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="transition-transform duration-300 group-hover:-translate-y-0.5">
        <path d="M12 5l6 6h-4v8H10v-8H6l6-6z" fill="currentColor" />
      </svg>
    </button>
  );
}

export default ScrollToTop;
