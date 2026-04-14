import Image from 'next/image'
import Link from 'next/link'
import styles from './AboutSection.module.css'

const points = [
  'Construction clé en main sur tout le Cameroun',
  'Cabinet comptable agréé, conformité DGI garantie',
  'Équipe pluridisciplinaire de 10 experts',
  'Devis gratuit et sans engagement',
  'Suivi personnalisé de chaque projet',
]

export default function AboutSection() {
  return (
    <section className={styles.section} id="apropos">
      <div className={styles.layout}>

        <div className={styles.imgWrap}>
          <Image
            src="/chantier.jpeg"
            alt="Chantier LongCourrier Douala"
            fill
            style={{ objectFit: 'cover', filter: 'brightness(0.82)' }}
          />
          <div className={styles.badge}>Bafoussam, Cameroun</div>
        </div>

        <div className={styles.text}>
          <p className={styles.tag}>Qui sommes-nous</p>
          <h2 className={styles.title}>
            Votre Partenaire de<br />Confiance depuis 5 ans
          </h2>
          <p className={styles.sub}>
            Basée à Bafoussam, LongCourrier SARL est une entreprise polyvalente
            qui allie le savoir-faire du BTP à la rigueur des services
            comptables. Nous accompagnons particuliers et entreprises dans
            leurs projets de A à Z.
          </p>
          <ul className={styles.points}>
            {points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <Link href="/contact" className="btn-primary">
            Prendre Rendez-vous
          </Link>
        </div>

      </div>
    </section>
  )
}