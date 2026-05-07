import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { Zap, BatteryMedium, Leaf } from 'lucide-react'
import styles from './Hero.module.css'

const Counter = ({ from, to }) => {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString())
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration: 2.5,
        ease: [0.33, 1, 0.68, 1],
        delay: 1
      })
      return controls.stop
    }
  }, [isInView, count, to])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg}>
        <img
          src="https://images.unsplash.com/photo-1629726797843-618688139f5a?q=80&w=3271&auto=format&fit=crop"
          alt="Solar panels"
          loading="eager"
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <motion.h1 className={styles.title} {...fadeUp(0.1)}>
              Solar Energy for<br />Smarter Future
            </motion.h1>

            <motion.p className={styles.subtitle} {...fadeUp(0.25)}>
              Clean, reliable solar solutions for homes and businesses.
              Reduce your carbon footprint while saving on energy costs.
            </motion.p>

            <motion.div {...fadeUp(0.4)} className={styles.ctaWrapper}>
              <a href="#cta" className={styles.btn}>
                Get Free Consultation
              </a>
            </motion.div>
          </div>
        </div>

        {/* Tetap kesamping dengan Flexbox */}
        <div className={styles.bottomBar}>
          <motion.div className={styles.clients} {...fadeUp(0.6)}>
            <div className={styles.avatars}>
              {[11, 32, 47].map((id) => (
                <img
                  key={id}
                  src={`https://i.pravatar.cc/40?img=${id}`}
                  alt="client"
                  className={styles.avatar}
                />
              ))}
            </div>
            <div className={styles.clientText}>
              {/* Teks jumlah klien putih */}
              <span className={styles.count}><Counter from={0} to={1200} />+</span>
              <span className={styles.label}>Happy clients</span>
            </div>
          </motion.div>

          <motion.div className={styles.badges} {...fadeUp(0.7)}>
            {[
              { icon: <Zap size={18} strokeWidth={2.5} />, label: 'Clean Energy' },
              { icon: <BatteryMedium size={18} strokeWidth={2.5} />, label: 'Smart Power' },
              { icon: <Leaf size={18} strokeWidth={2.5} />, label: 'Eco-Friendly' },
            ].map((b) => (
              <div key={b.label} className={styles.badge}>
                <span className={styles.badgeIcon}>{b.icon}</span>
                {/* Pastikan menggunakan class badgeLabel di sini */}
                <span className={styles.badgeLabel}>{b.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}