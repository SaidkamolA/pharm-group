// src/components/Button.jsx
function Button({ children, variant = "primary", onClick, href, type = "button", className = "", disabled = false }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60";
  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-[0_12px_30px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(59,130,246,0.45)]",
    outline: "border border-white/60 text-white hover:bg-white hover:text-slate-900",
  };

  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;