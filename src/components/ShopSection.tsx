import Image from "next/image";
import Link from "next/link";
import styles from "./ShopSection.module.css";

const products = [
    {
        name: "Transfer Factor Plus",
        description: "El máximo soporte para tu sistema inmunitario.",
        image: "/product-tf-plus.jpg"
    },
    {
        name: "RioVida",
        description: "Antioxidantes líquidos para vitalidad y bienestar.",
        image: "/product-riovida.jpg"
    },
    {
        name: "Energy Go Stix",
        description: "Energía natural para mantenerte enfocado todo el día.",
        image: "/product-energy.jpg"
    }
];

export default function ShopSection() {
    return (
        <section id="shop" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>4Life Store</h2>
                    <p className={styles.subtitle}>
                        Productos respaldados por la ciencia para optimizar tu salud y rendimiento.
                    </p>
                </div>

                <div className={styles.productsGrid}>
                    {products.map((product, index) => (
                        <div key={index} className={styles.productCard}>
                            <div className={styles.productImage}>
                                {/* Placeholder Image */}
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    style={{ objectFit: 'contain', padding: '1rem' }}
                                />
                            </div>
                            <div className={styles.productDetails}>
                                <h3 className={styles.productName}>{product.name}</h3>
                                <p className={styles.productDescription}>{product.description}</p>
                                <Link href="#" className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '0.5rem 1.5rem' }}>
                                    Ver Detalle
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center' }}>
                    <Link href="https://www.4life.com/" target="_blank" className={styles.shopLink}>
                        Visitar Tienda Oficial 4Life &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
}
