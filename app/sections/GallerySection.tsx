import Image from 'next/image'
import styles from './GallerySection.module.css'

const photos = [
  { src: '/galerie/photo1.jpeg', alt: 'Chantier 1' },
  { src: '/galerie/photo2.jpg', alt: 'Chantier 2' },
  { src: '/galerie/photo3.jpg', alt: 'Chantier 3' },
  { src: '/galerie/photo4.jpeg', alt: 'Chantier 4' },
  { src: '/galerie/photo5.jpeg', alt: 'Chantier 5' },
  { src: '/galerie/photo6.jpeg', alt: 'Chantier 6' },
]

export default function GallerySection() {
  return (
    <section className={styles.section} id="projets">
      <div className={styles.header}>
        <p className={styles.tag}>Réalisations</p>
        <h2 className={styles.title}>Quelques-uns de nos Projets</h2>
        <p className={styles.sub}>
          Un aperçu de nos chantiers et réalisations à travers le Cameroun.
        </p>
      </div>

      <div className={styles.grid}>
        {photos.map((p) => (
          <div key={p.src} className={styles.item}>
            <Image
              src={p.src}
              alt={p.alt}
              fill
              style={{ objectFit: 'cover' }}
              className={styles.img}
            />
          </div>
        ))}
      </div>
    </section>
  )
}