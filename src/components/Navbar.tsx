"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Make sure lucide-react is installed
import styles from "./Navbar.module.css";

const navItems = [
    { name: "Inicio", href: "#hero" },
    { name: "Sobre Jon", href: "#about" },
    { name: "Conferencias", href: "#conferences" },
    { name: "Libros", href: "#books" },
    { name: "Oportunidad", href: "#opportunity" },
    //   { name: "Tienda", href: "#shop" }, // Can enable later or link to external
    { name: "Contacto", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Jon Parras
                </Link>

                {/* Desktop Menu */}
                <ul className={styles.navLinks}>
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link href={item.href} className={styles.navLink}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay (Simplified for MVP) */}
                {mobileMenuOpen && (
                    <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        width: '100%',
                        background: 'var(--background)',
                        padding: '2rem',
                        borderBottom: '1px solid var(--secondary)'
                    }}>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={styles.navLink}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
