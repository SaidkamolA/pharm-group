// src/sections/Map.jsx
function Map({ title }) {
  return (
    <div className="mt-5 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_14px_30px_rgba(2,6,23,0.1)]">
      <iframe
        title={title}
        src="https://www.google.com/maps?q=89+Nukus+St,+Tashkent+100015,+Uzbekistan&z=16&output=embed"
        width="100%"
        height="400"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0 saturate-[.9]"
      />
    </div>
  );
}

export default Map;