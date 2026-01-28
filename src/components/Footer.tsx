import Link from "next/link";

export default function Footer() {
    return (
        <footer style={{ background: '#0a0a0a', color: '#666', padding: '4rem 0', borderTop: '1px solid #222' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                <div>
                    <h4 style={{ color: 'white', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.2rem' }}>JAN PARRAS</h4>
                    <p style={{ maxWidth: '300px', fontSize: '0.9rem' }}>
                        Transformando vidas y liderando con propósito en la era digital.
                    </p>
                </div>

                <div>
                    <h5 style={{ color: 'white', marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase' }}>Explorar</h5>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                        <li><Link href="#about">Sobre Mí</Link></li>
                        <li><Link href="#conferences">Eventos</Link></li>
                        <li><Link href="#books">Libros</Link></li>
                        <li><Link href="#opportunity">Oportunidad</Link></li>
                    </ul>
                </div>

                <div>
                    <h5 style={{ color: 'white', marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase' }}>Legal</h5>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                        <li><Link href="#">Privacidad</Link></li>
                        <li><Link href="#">Términos</Link></li>
                    </ul>
                </div>
            </div>
            <div className="container" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #222', fontSize: '0.8rem', textAlign: 'center' }}>
                © {new Date().getFullYear()} Jan Parras. Todos los derechos reservados.
            </div>
        </footer>
    );
}
