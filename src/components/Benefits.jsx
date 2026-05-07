import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Wallet, Leaf, TrendingUp, Zap } from 'lucide-react'
import styles from './Benefits.module.css'

const benefits = [
  {
    icon: <Wallet size={24} />,
    title: 'Reduce Energy Costs',
    desc: 'Generate your own electricity and significantly lower your monthly energy bills.',
    type: 'tall',
  },
  {
    icon: <Leaf size={24} />,
    title: 'Clean & Renewable',
    desc: 'Solar power produces zero emissions and supports a cleaner environment.',
    type: 'small',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Increase Property Value',
    desc: 'Properties with solar systems often gain higher market value.',
    type: 'small',
  },
  {
    icon: <Zap size={24} />,
    title: 'Energy Independence',
    desc: 'Reduce dependence on traditional providers and rising energy prices.',
    type: 'tall',
  },
]

function BenefitCard({ b, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${styles[b.type]}`}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.iconWrap}>
        {b.icon}
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{b.title}</h3>
        <p className={styles.cardDesc}>{b.desc}</p>
      </div>
    </motion.div>
  )
}

export default function Benefits() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section id="benefits" className={styles.benefits}>
      <div className={styles.container}>
        <motion.div
          ref={headerRef}
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>BENEFITS</span>
          <h2 className={styles.title}>Why Go Solar</h2>
          <p className={styles.subtitle}>
            Solar power is one of the most efficient ways to generate clean energy while reducing long-term costs.
          </p>
        </motion.div>

        <div className={styles.bentoGrid}>
          {/* Kolom Kiri: Tall Card */}
          <div className={styles.col}>
            <BenefitCard b={benefits[0]} delay={0.1} />
          </div>

          {/* Kolom Tengah: Dua Small Cards */}
          <div className={styles.col}>
            <BenefitCard b={benefits[1]} delay={0.2} />
            <BenefitCard b={benefits[2]} delay={0.3} />
          </div>

          {/* Kolom Kanan: Tall Card */}
          <div className={styles.col}>
            <BenefitCard b={benefits[3]} delay={0.4} />
          </div>
        </div>
      </div>
    </section>
  )
}