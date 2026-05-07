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
          src="https://images.unsplash.com/photo-1648135327756-b606e2eb8caa?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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