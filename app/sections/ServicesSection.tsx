import styles from './ServicesSection.module.css'

const services = [
  {
    icon: '🏗️',
    title: 'Génie Civil & Gros Œuvres',
    desc: 'Conception et réalisation de projets de construction résidentiels, commerciaux et industriels.',
    items: ['Fondations et structures', 'Finitions et ravalement', 'Conception des plans', 'Suivi de chantier'],
  },
  {
    icon: '🏠',
    title: 'Immobilier',
    desc: 'Vente, achat et gestion de biens immobiliers sur l\'ensemble du territoire camerounais.',
    items: ['Vente et achat de terrains', 'Projets résidentiels', 'Évaluation foncière', 'Conseil en investissement'],
  },
  {
    icon: '🚛',
    title: 'Terrassement & Agrégats',
    desc: 'Travaux de terrassement et livraison de matériaux de construction de tout calibre.',
    items: ['Terrassement de sites', 'Livraison d\'agrégats', 'Viabilisation de terrains'],
  },
  {
    icon: '📊',
    title: 'Comptabilité & Finance',
    desc: 'Services comptables complets pour entreprises et particuliers à Douala.',
    items: ['Tenue de comptabilité', 'Déclarations fiscales', 'Bilan et états financiers', 'Conseil en gestion'],
  },
  {
    icon: '🔧',
    title: 'Rénovation',
    desc: 'Réhabilitation et modernisation de bâtiments existants selon vos besoins.',
    items: ['Rénovation intérieure', 'Réfection de toitures', 'Mise aux normes'],
  },
  {
    icon: '📚',
    title: 'Formation',
    desc: 'Programmes de formation professionnelle dans la construction et la gestion.',
    items: ['Formation BTP', 'Gestion de projet', 'Initiation comptable'],
  },
]

export default function ServicesSection() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.header}>
        <p className={styles.tag}>Ce que nous faisons</p>
        <h2 className={styles.title}>Nos Domaines d'Expertise</h2>
        <p className={styles.sub}>
          LongCourrier combine l'expertise du BTP et de la comptabilité pour
          vous offrir un accompagnement complet, de la construction à la
          gestion de vos comptes.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s.title} className={styles.card}>
            <div className={styles.icon}>{s.icon}</div>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardDesc}>{s.desc}</p>
            <ul className={styles.list}>
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}