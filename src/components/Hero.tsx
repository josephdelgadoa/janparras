import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            {/* 
        Ideally, we would host this video on a CDN or use a lightweight loop.
        For now, we can use a placeholder or assume a file is placed in public/ 
      */}
            {/* Background Image provided by user */}
            <div className={styles.videoBackground}>
                <Image
                    src="/hero-bg.jpg"
                    alt="Jon Parras Hero Background"
                    fill
                    priority
                    style={{ objectFit: 'cover' }}
                />
            </div>

            <div className={styles.overlay} />

            <div className={styles.content}>
                <h1 className={styles.heading}>
                    Transforma tu Vida.<br />
                    Alcanza tu Potencial.<br />
                    Únete al Movimiento.
                </h1>

                <p className={styles.subheading}>
                    Descubre el poder que reside en ti con Jon Parras.
                    Estrategias de vida y negocios para el 2026.
                </p>

                <div className={styles.ctaGroup}>
                    <Link href="#opportunity" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                        Inicia tu Transformación
                    </Link>
                    <Link href="#about" className="btn" style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(5px)', color: 'white' }}>
                        Conoce mi Historia
                    </Link>
                </div>

                {/* Optional: Social Proof / Media Logos */}
                {/* <div className={styles.mediaLogos}>
            <span>FORBES</span>
            <span>TEDx</span>
            <span>4Life</span>
        </div> */}
            </div>
        </section>
    );
}
