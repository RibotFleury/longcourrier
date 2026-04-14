'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/logo.jpeg"
          alt="LongCourrier SARL"
          width={160}
          height={50}
          style={{ objectFit: 'contain' }}
          priority
        />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href="/" className={pathname === '/' ? styles.active : ''}>
            Accueil
          </Link>
        </li>
        <li>
          <Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}