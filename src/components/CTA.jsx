import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './CTA.module.css'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="cta" className={styles.section}>
      <div className={styles.bg}>
        <img
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=80"
          alt="Forest backdrop"
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <motion.div
          ref={ref}
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className={styles.title}>Switch to Solar Today</h2>
          <p className={styles.subtitle}>
            Discover how much energy your property can generate with a customized solar solution.
          </p>
          <a href="#" className={styles.btn}>Get Free Consultation</a>
        </motion.div>
      </div>
    </section>
  )
}