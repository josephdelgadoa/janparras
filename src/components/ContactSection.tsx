import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
    return (
        <section id="contact" className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <h2 className={styles.title}>Hablemos</h2>
                        <p className={styles.text}>
                            ¿Listo para dar el siguiente paso? Ya sea que quieras unirte a mi equipo,
                            contratarme para una conferencia o simplemente compartir tu historia,
                            estoy aquí para escucharte.
                        </p>

                        <div className={styles.contactItem}>
                            <span className={styles.label}>Email</span>
                            <div className={styles.value}>contacto@jonparras.com</div>
                        </div>

                        <div className={styles.contactItem}>
                            <span className={styles.label}>Ubicación</span>
                            <div className={styles.value}>Lima, Perú | Global</div>
                        </div>

                        <div className={styles.socials}>
                            <Link href="#" className={styles.socialIcon} aria-label="Facebook">
                                <Facebook size={20} color="white" />
                            </Link>
                            <Link href="#" className={styles.socialIcon} aria-label="Instagram">
                                <Instagram size={20} color="white" />
                            </Link>
                            <Link href="#" className={styles.socialIcon} aria-label="LinkedIn">
                                <Linkedin size={20} color="white" />
                            </Link>
                            <Link href="#" className={styles.socialIcon} aria-label="Twitter">
                                <Twitter size={20} color="white" />
                            </Link>
                        </div>
                    </div>

                    <form className={styles.form}>
                        <div className={styles.formGroup}>
                            <input type="text" placeholder="Tu Nombre" className={styles.input} />
                        </div>
                        <div className={styles.formGroup}>
                            <input type="email" placeholder="Tu Email" className={styles.input} />
                        </div>
                        <div className={styles.formGroup}>
                            <textarea placeholder="¿Cómo puedo ayudarte?" className={styles.textarea}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
