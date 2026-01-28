import Link from "next/link";
import { MapPin, Calendar } from "lucide-react";
import styles from "./ConferencesSection.module.css";

const events = [
    {
        date: "15 MAR, 2026",
        title: "Cumbre de Liderazgo 2026",
        location: "Lima, Perú",
        description: "Un evento transformador para líderes emergentes."
    },
    {
        date: "22 ABR, 2026",
        title: "Masterclass: Mentalidad de Acero",
        location: "Bogotá, Colombia",
        description: "Estrategias para superar cualquier obstáculo."
    },
    {
        date: "10 MAY, 2026",
        title: "Gira Mundial 4Life",
        location: "Ciudad de México, MX",
        description: "Conectando visiones y creando futuro."
    }
];

export default function ConferencesSection() {
    return (
        <section id="conferences" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Próximos Eventos</h2>
                    <p className={styles.subtitle}>
                        Acompaña a Jan Parras en vivo y experimenta la energía de la transformación.
                    </p>
                </div>

                <div className={styles.eventsGrid}>
                    {events.map((event, index) => (
                        <div key={index} className={styles.eventCard}>
                            <span className={styles.date}>{event.date}</span>
                            <h3 className={styles.eventTitle}>{event.title}</h3>
                            <div className={styles.location}>
                                <MapPin size={18} />
                                <span>{event.location}</span>
                            </div>
                            <p style={{ color: '#555', marginBottom: '1.5rem' }}>{event.description}</p>
                            <Link href="#" className="btn btn-primary" style={{ width: '100%' }}>
                                Registrarse
                            </Link>
                        </div>
                    ))}
                </div>

                <div className={styles.hireSection}>
                    <h3 className={styles.hireTitle}>¿Buscas un Orador de Impacto?</h3>
                    <p className={styles.hireText}>
                        Lleva la energía y experiencia de Jan Parras a tu próximo evento corporativo o conferencia.
                    </p>
                    <Link href="#contact" className="btn" style={{ background: 'white', color: 'var(--foreground)' }}>
                        Contratar a Jan
                    </Link>
                </div>
            </div>
        </section>
    );
}
