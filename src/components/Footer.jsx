import styles from './Footer.module.css'

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L2.25 2.25h6.846l4.259 5.632 5.889-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const navLinks = ['Home', 'Benefits', 'Solutions', 'How It Works', 'Impact']

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Bungkus semua konten di dalam container agar tidak full width */}
      <div className={styles.container}>

        <div className={styles.inner}>
          {/* Col 1 */}
          <div className={styles.brand}>
            <span className={styles.logo}>Nova</span>
            <p className={styles.tagline}>
              Accelerating the transition toward clean and sustainable solar energy through innovative technology and reliable solar solutions.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="X"><XIcon /></a>
              <a href="#" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" aria-label="LinkedIn"><LinkedinIcon /></a>
            </div>
          </div>

          {/* Col 2 */}
          <div className={styles.links}>
            <h4 className={styles.footerTitle}>Menu</h4>
            {navLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}>{l}</a>
            ))}
          </div>

          {/* Col 3 */}
          <div className={styles.contact}>
            <h4 className={styles.footerTitle}>Contact</h4>
            <p>Marina Bay Financial Centre<br />Singapore</p>
            <a href="mailto:hello@helionova.energy">hello@helionova.energy</a>
            <a href="tel:+6581234567">+65 8123 4567</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copyright}>© 2026 Nova Energy. All rights reserved.</span>
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  )
}