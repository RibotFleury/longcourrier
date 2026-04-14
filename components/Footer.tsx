import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>

        <div className={styles.brand}>
          <Image
            src="/logo.jpeg"
            alt="LongCourrier SARL"
            width={140}
            height={45}
            style={{ objectFit: 'contain' }}
          />
          <p>BTP · Immobilier · Comptabilité</p>
          <p>Bafoussam, Cameroun</p>
          <p className={styles.contact}>
            📞 +237 620 804 291<br />
            ✉️ contact@lclongcourrier.com
          </p>
        </div>

        <div>
          <h4 className={styles.colTitle}>Navigation</h4>
          <ul className={styles.colLinks}>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#projets">Projets</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.colTitle}>Services</h4>
          <ul className={styles.colLinks}>
            <li><Link href="/#services">Génie Civil</Link></li>
            <li><Link href="/#services">Immobilier</Link></li>
            <li><Link href="/#services">Comptabilité</Link></li>
            <li><Link href="/#services">Formation</Link></li>
          </ul>
        </div>

      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} LongCourrier SARL – Tous droits réservés · Douala, Cameroun
      </div>
    </footer>
  )
}