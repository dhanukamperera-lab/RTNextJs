"use client";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="RanasTech Home">
          <img className="brand-logo" src="/images/logo.png" alt="RanasTech Technical Services" width={180} height={48} />
        </Link>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          <Link href="/">Home</Link>
          <a href="#services">Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#projects">Projects</a>
          <Link href="/contact" className="button small">Contact</Link>
        </nav>
        <button aria-label="Toggle Menu" className="hamburger" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}


