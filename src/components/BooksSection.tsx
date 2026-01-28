import Image from "next/image";
import Link from "next/link";
import { BookOpen, Download, Laptop } from "lucide-react";
import styles from "./BooksSection.module.css";

export default function BooksSection() {
    return (
        <section id="books" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Sabiduría Compartida</h2>
                    <p className={styles.description}>
                        Herramientas, estrategias y conocimientos destilados en páginas que te guiarán
                        hacia tu mejor versión.
                    </p>
                </div>

                {/* Featured Book */}
                <div className={styles.bookShowcase}>
                    <div className={styles.bookCover}>
                        {/* Placeholder for Book Cover */}
                        <Image
                            src="/book-cover-placeholder.jpg"
                            alt="Portada del Libro"
                            fill
                            style={{ objectFit: 'contain' }} // Contain to show full cover
                        />
                    </div>
                    <div className={styles.bookInfo}>
                        <span className={styles.bookMeta}>Bestseller Internacional</span>
                        <h3 className={styles.bookTitle}>El Código del Liderazgo 2026</h3>
                        <p className={styles.bookSynopsis}>
                            En este libro revelador, Jan Parras desglosa los principios fundamentales que
                            le permitieron transformar su vida después del cáncer y construir un imperio
                            global. Una guía práctica para aquellos que no se conforman con menos que la excelencia.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Link href="#" className="btn btn-primary">
                                Comprar Ahora
                            </Link>
                            <Link href="#" className="btn" style={{ border: '1px solid #ddd' }}>
                                Leer Primer Capítulo
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Resources Grid */}
                <div className={styles.resourceGrid}>
                    <div className={styles.resourceCard}>
                        <div className={styles.resourceIcon}><BookOpen size={40} /></div>
                        <h3>Ebooks Gratuitos</h3>
                        <p style={{ color: '#666', marginBottom: '1rem' }}>Guías rápidas para potenciar tu productividad.</p>
                        <Link href="#" style={{ color: 'var(--primary)', fontWeight: '600' }}>Descargar &rarr;</Link>
                    </div>
                    <div className={styles.resourceCard}>
                        <div className={styles.resourceIcon}><Laptop size={40} /></div>
                        <h3>Webinars Grabados</h3>
                        <p style={{ color: '#666', marginBottom: '1rem' }}>Accede a sesiones de entrenamiento exclusivas.</p>
                        <Link href="#" style={{ color: 'var(--primary)', fontWeight: '600' }}>Ver Ahora &rarr;</Link>
                    </div>
                    <div className={styles.resourceCard}>
                        <div className={styles.resourceIcon}><Download size={40} /></div>
                        <h3>Plantillas de Negocio</h3>
                        <p style={{ color: '#666', marginBottom: '1rem' }}>Recursos listos para usar en tus proyectos 4Life.</p>
                        <Link href="#" style={{ color: 'var(--primary)', fontWeight: '600' }}>Acceder &rarr;</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
