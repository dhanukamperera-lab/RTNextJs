import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">Ranas Tech</div>
        <nav className="footer-links">
          <Link href="/">Home</Link>
          <a href="#services">Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#projects">Projects</a>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="footer-copy">© {new Date().getFullYear()} Ranas Tech. All rights reserved.</div>
      </div>
    </footer>
  );
}


