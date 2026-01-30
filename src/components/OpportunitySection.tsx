import Image from "next/image";
import Link from "next/link";
import styles from "./OpportunitySection.module.css";

export default function OpportunitySection() {
    return (
        <section id="opportunity" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Construye tu Legado con 4Life</h2>
                        <p className={styles.text}>
                            No se trata solo de vender productos, se trata de liderar un movimiento de bienestar
                            y libertad financiera. Únete a mi equipo y recibe la mentoría directa que ha llevado
                            a cientos de personas a alcanzar rangos de Diamante y más allá.
                        </p>

                        <div className={styles.statsRow}>
                            <div className={styles.statItem}>
                                <h4>15k+</h4>
                                <p>Miembros en el Equipo</p>
                            </div>
                            <div className={styles.statItem}>
                                <h4>$50M+</h4>
                                <p>Ventas Generadas</p>
                            </div>
                            <div className={styles.statItem}>
                                <h4>50+</h4>
                                <p>Países Alcanzados</p>
                            </div>
                        </div>

                        <Link href="#join-team" className="btn btn-primary">
                            Aplicar para el Equipo
                        </Link>
                    </div>

                    <div className={styles.teamImageContainer}>
                        <Image
                            src="/jan-parras-team-02.jpeg"
                            alt="Reunión del equipo 4Life"
                            fill
                            className={styles.opportunityImage} // Added for hover effect
                            style={{ objectFit: 'cover' }}
                        />


                    </div>
                </div>
            </div>
        </section>
    );
}
