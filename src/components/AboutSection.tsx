import Image from "next/image";
import Link from "next/link";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
    return (
        <section id="about" className={styles.aboutSection}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <span className={styles.subtitle}>Sobre Jan Parras</span>
                        <h2 className={styles.title}>De la Adversidad a la Cima del Éxito</h2>

                        <p className={styles.text}>
                            Nacido en Trujillo, Perú, en 1980, mi viaje no ha sido lineal.
                            Como empresario líder en la industria del marketing multinivel,
                            he dedicado mi vida a empoderar a otros. Pero mi mayor maestro no fue
                            un libro de negocios, fue la vida misma.
                        </p>

                        <div className={styles.highlight}>
                            "10 años luchando contra el cáncer me enseñaron que la verdadera riqueza
                            no está en los bolsillos, sino en la fortaleza del espíritu y en el impacto
                            que dejamos en los demás."
                        </div>

                        <p className={styles.text}>
                            Hoy, comparto mi energía, mis estrategias y mi visión para guiarte
                            hacia tu propia transformación. Al igual que Tony Robbins ha inspirado a millones,
                            mi misión es despertar el gigante que llevas dentro.
                        </p>

                        <Link href="#contact" className="btn btn-primary">
                            Mis Valores
                        </Link>
                    </div>

                    <div className={styles.imageContainer}>
                        {/* Placeholder for Jon's photo */}
                        <img
                            src="/jan-parras-about-real.jpg"
                            alt="Jan Parras - De la Adversidad a la Cima"
                            className={styles.image}
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
