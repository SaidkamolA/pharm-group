// src/components/ClientLogo.jsx
function ClientLogo({ logo }) {
  return (
    <div className="flex h-[100px] min-w-[180px] items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 shadow-[0_10px_26px_rgba(2,6,23,0.06)]">
      <img
        src={logo.src}
        alt={logo.alt}
        loading="lazy"
        className="max-h-[60px] max-w-[140px] object-contain opacity-85 transition duration-300 hover:scale-105 hover:opacity-100"
      />
    </div>
  );
}

export default ClientLogo;