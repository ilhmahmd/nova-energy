import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './HowItWorks.module.css'

const steps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'We analyze your energy needs and evaluate the potential of your property.',
    side: 'left',
  },
  {
    num: '02',
    title: 'System Design',
    desc: 'Our engineers design a solar system customized for your building and energy consumption.',
    side: 'left',
  },
  {
    num: '03',
    title: 'Installation',
    desc: 'Professional technicians install your solar system with precision and safety.',
    side: 'right',
  },
  {
    num: '04',
    title: 'Energy Generation',
    desc: 'Your system begins producing clean electricity immediately after activation.',
    side: 'right',
  },
]

function StepCard({ step, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className={styles.num}>{step.num}</span>
      <div className={styles.cardBottom}>
        <h3 className={styles.cardTitle}>{step.title}</h3>
        <p className={styles.cardDesc}>{step.desc}</p>
      </div>
    </motion.div>
  )
}

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const left = steps.filter((s) => s.side === 'left')
  const right = steps.filter((s) => s.side === 'right')

  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.badge}>PROCESS</span>
          <h2 className={styles.title}>How It Works</h2>
          <p className={styles.subtitle}>
            Our streamlined process ensures a smooth transition from consultation to energy generation.
          </p>
        </motion.div>

        <div className={styles.layout}>
          <div className={styles.col}>
            {left.map((s, i) => (
              <StepCard key={s.num} step={s} delay={i * 0.15} />
            ))}
          </div>

          <motion.div
            className={styles.centerImg}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="https://images.unsplash.com/photo-1668097613572-40b7c11c8727?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Solar installation"
            />
          </motion.div>

          <div className={styles.col}>
            {right.map((s, i) => (
              <StepCard key={s.num} step={s} delay={i * 0.15 + 0.1} />
            ))}
          </div>
        </div>

        <div className={styles.mobileLayout}>
          {steps.map((s, i) => (
            <StepCard key={s.num} step={s} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}