'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const form = e.currentTarget
    const data = {
      prenom: (form.elements.namedItem('prenom') as HTMLInputElement).value,
      nom: (form.elements.namedItem('nom') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      telephone: (form.elements.namedItem('telephone') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    setLoading(false)

    if (res.ok) {
      setSuccess(true)
      form.reset()
    } else {
      setError(true)
    }
  }

  return (
    <main className={styles.main}>

      <div className={styles.hero}>
        <p className={styles.tag}>Parlons de votre projet</p>
        <h1 className={styles.title}>
          Contactez<br /><em>LongCourrier</em>
        </h1>
        <p className={styles.sub}>
          Notre équipe est disponible pour répondre à toutes vos questions, que ce soit pour un projet BTP immobilier ou  une mission comptable.
        </p>
      </div>

      <div className={styles.layout}>

        {/* Infos de contact */}
        <div className={styles.info}>
          <div className={styles.infoBlock}>
            <div className={styles.infoIcon}>📍</div>
            <h4>Adresse</h4>
            <p>Bafoussam, Cameroun</p>
          </div>
          <div className={styles.infoBlock}>
            <div className={styles.infoIcon}>📞</div>
            <h4>Téléphone</h4>
            <p>+237 620 804 291</p>
          </div>
          <div className={styles.infoBlock}>
            <div className={styles.infoIcon}>✉️</div>
            <h4>Email</h4>
            <p>contact@lclongcourrier.com</p>
          </div>
          <div className={styles.infoBlock}>
            <div className={styles.infoIcon}>🕐</div>
            <h4>Horaires</h4>
            <ul className={styles.hours}>
              <li><span>Lundi – Vendredi</span><span>08h – 18h</span></li>
              <li><span>Samedi</span><span>08h – 13h</span></li>
              <li><span>Dimanche</span><span>Fermé</span></li>
            </ul>
          </div>
        </div>

        {/* Formulaire */}
        <div className={styles.formWrap}>
          <h2 className={styles.formTitle}>Envoyez-nous un message</h2>
          <p className={styles.formSub}>Nous vous répondrons dans les 24h.</p>

          {success && (
            <div className={styles.successMsg}>
              ✅ Message envoyé ! Nous vous répondrons dans les 24h.
            </div>
          )}

          {error && (
            <div className={styles.errorMsg}>
              ❌ Une erreur est survenue. Réessayez ou contactez-nous directement.
            </div>
          )}

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="prenom">Prénom *</label>
                <input type="text" id="prenom" name="prenom" placeholder="Jean" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="nom">Nom *</label>
                <input type="text" id="nom" name="nom" placeholder="Dupont" required />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" placeholder="votre@email.com" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="telephone">Téléphone</label>
              <input type="tel" id="telephone" name="telephone" placeholder="+237 6XX XXX XXX" />
            </div>
            <div className={styles.field}>
              <label htmlFor="service">Service concerné *</label>
              <select id="service" name="service" required>
                <option value="" disabled>-- Choisissez un service --</option>
                <option value="Génie Civil">🏗️ Génie Civil / Construction</option>
                <option value="Immobilier">🏠 Immobilier</option>
                <option value="Terrassement">🚛 Terrassement / Agrégats</option>
                <option value="Comptabilité">📊 Comptabilité / Finance</option>
                <option value="Rénovation">🔧 Rénovation</option>
                <option value="Formation">📚 Formation</option>
                <option value="Autre">❓ Autre</option>
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Décrivez votre projet..."
                required
              />
            </div>
            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? 'Envoi en cours...' : 'Envoyer le message →'}
            </button>
          </form>
        </div>

      </div>
    </main>
  )
}