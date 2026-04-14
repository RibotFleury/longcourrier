import Link from 'next/link'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.content}>
        <span className={styles.eyebrow}>Bafoussam, Douala, Yaoundé et partout ailleurs</span>
        <h1 className={styles.title}>
          Bâtir & <em>Gérer</em><br />avec Excellence
        </h1>
        <p className={styles.desc}>
          Long Courrier SARL est votre partenaire de confiance pouvant intervenir partout au Cameroun notamment dans les villes de Bafoussam, Douala et Yaoundé en ce qui concerne vos projets de construction, d’immobilier et de gestion comptable. De la fondation aux finances, nous assurons chaque
          étape avec rigueur.
        </p>
        <div className={styles.actions}>
          <Link href="/contact" className="btn-primary">
            Nous Contacter
          </Link>
          <Link href="#services" className="btn-outline">
            Nos Services
          </Link>
        </div>
      </div>
    </section>
  )
}