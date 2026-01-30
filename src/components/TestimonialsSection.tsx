import Image from "next/image";
import { Quote } from "lucide-react";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
    {
        quote: "Gracias a la mentoría de Jan, pasé de no tener dirección a liderar un equipo de más de 500 personas en tres países. Su sistema es duplicable y efectivo.",
        author: "Carlos Mendoza",
        role: "Diamante Internacional",
        image: "/testimonial-carlos.png"
    },
    {
        quote: "El Código del Liderazgo no es solo un libro, es un manual de vida. Aplicar sus principios me ayudó a superar mis miedos y hablar en público con confianza.",
        author: "Sofia Vargas",
        role: "Diamante Presidencial",
        image: "/testimonial-sofia.png"
    },
    {
        quote: "La energía que Jan transmite en sus conferencias es inigualable. Sales con la certeza absoluta de que puedes lograr cualquier cosa que te propongas.",
        author: "Ricardo & Elena",
        role: "Club del Millón",
        image: "/testimonial-couple.png"
    }
];

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Historias de Transformación</h2>
                    <p className={styles.subtitle}>
                        Resultados reales de personas que tomaron la decisión de cambiar sus vidas con nuestro sistema.
                    </p>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <Quote size={32} style={{ color: 'var(--primary)', marginBottom: '1rem', opacity: 0.5 }} />
                            <p className={styles.quote}>"{item.quote}"</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>
                                    <Image
                                        src={item.image}
                                        alt={item.author}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className={styles.authorInfo}>
                                    <h4>{item.author}</h4>
                                    <p>{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
