import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Benefits', 'Solutions', 'How it works', 'Impact']

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#hero" className={styles.logo}>Nova</a>

      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a>
          </li>
        ))}
      </ul>

      <a href="#cta" className={styles.cta}>Contact us</a>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`${styles.line} ${menuOpen ? styles.open1 : ''}`} />
        <span className={`${styles.line} ${menuOpen ? styles.open2 : ''}`} />
        <span className={`${styles.line} ${menuOpen ? styles.open3 : ''}`} />
      </button>

      {menuOpen && (
        <motion.div
          className={styles.mobileMenu}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a href="#cta" className={styles.mobileCtaBtn} onClick={() => setMenuOpen(false)}>
            Contact us
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}
