function MobileContactBar({ label, onContact }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_24px_rgba(2,6,23,0.08)] backdrop-blur-md md:hidden">
      <button
        type="button"
        onClick={() => onContact?.()}
        className="w-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(37,99,235,0.35)] transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        {label}
      </button>
    </div>
  );
}

export default MobileContactBar;
