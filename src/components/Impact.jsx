import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Impact.module.css'

export default function Impact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="impact" className={styles.section}>
      <div className={styles.container} ref={ref}>
        {/* Left Content */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.badge}>IMPACT</span>
          <h2 className={styles.title}>Powering the<br />Future</h2>
          <div className={styles.paragraphs}>
            <p>
              Every solar installation contributes to reducing global carbon emissions and accelerating the shift toward renewable energy.
            </p>
            <p>
              By switching to solar, you not only save on electricity but also become part of a global effort to create a more sustainable future.
            </p>
          </div>
        </motion.div>

        {/* Right — Image */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1558554142-0b016c857381?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Environmental impact"
            />
            <div className={styles.overlayBadge}>
              <span className={styles.o2}>O₂</span>
              <span>Clean Air</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}