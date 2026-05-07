import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import styles from './Solutions.module.css'

const solutions = [
  {
    title: 'Residential Solar',
    desc: 'Efficient solar systems designed to power modern homes with clean renewable energy.',
    img: 'https://images.unsplash.com/photo-1762958266463-6af778b56beb?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Commercial Solar',
    desc: 'Optimized solar solutions that help businesses reduce operational electricity costs.',
    img: 'https://images.unsplash.com/photo-1637417494521-78b4d1d33029?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Industrial Solar',
    desc: 'Large-scale solar installations engineered to support factories and industrial facilities.',
    img: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

function SolutionCard({ s, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.imgWrap}>
        <img
          src={s.img}
          alt={s.title}
          className={`${styles.img} ${hovered ? styles.colored : ''}`}
        />
      </div>

      <div className={styles.cardTop}>
        <h3 className={styles.cardTitle}>{s.title}</h3>
        <AnimatePresence>
          {hovered && (
            <motion.p
              className={styles.cardDesc}
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {s.desc}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Solutions() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="solutions" className={styles.solutions}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.headerLeft}>
            <span className={styles.badge}>SOLUTIONS</span>
          </div>
          <div className={styles.headerRight}>
            <h2 className={styles.title}>Solar Solutions</h2>
            <p className={styles.subtitle}>
              Nova Energy delivers reliable solar systems tailored for residential, commercial, and industrial applications.
            </p>
          </div>
        </motion.div>

        <div className={styles.grid}>
          {solutions.map((s, i) => (
            <SolutionCard key={s.title} s={s} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}