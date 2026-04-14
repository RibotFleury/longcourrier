'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './StatsSection.module.css'

const stats = [
  { value: 5,  suffix: '+', label: "Années d'expérience" },
  { value: 30, suffix: '+', label: 'Clients satisfaits' },
  { value: 20, suffix: '+', label: 'Projets réalisés' },
  { value: 10, suffix: '',  label: 'Employés' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let current = 0
          const step = Math.max(1, Math.ceil(target / 45))
          const timer = setInterval(() => {
            current = Math.min(current + step, target)
            setCount(current)
            if (current >= target) clearInterval(timer)
          }, 35)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className={styles.num}>
      {count}{suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <div className={styles.stats}>
      {stats.map((s) => (
        <div key={s.label} className={styles.item}>
          <Counter target={s.value} suffix={s.suffix} />
          <p className={styles.label}>{s.label}</p>
        </div>
      ))}
    </div>
  )
}