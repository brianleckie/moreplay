export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-4 flex flex-col items-center gap-2 text-center">
      <span className="text-xs text-white/30">
        © 2025 MOREPLAY
        <sup style={{ fontSize: "0.3em", verticalAlign: "super" }}>™</sup>
      </span>
      <a
        href="https://portfolio-alpha-henna-61.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200"
      >
        Desarrollado por Leki
      </a>
    </footer>
  );
}
