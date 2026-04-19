// src/components/Footer.jsx
function Footer({ t }) {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10 pb-24 text-center text-slate-300 md:pb-10">
      <p className="text-sm tracking-wide">{t.footer.copyright}</p>
    </footer>
  );
}

export default Footer;