import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './About.module.css'

// Inline image pill component
function InlinePill({ src, alt }) {
  return (
    <span className={styles.pill}>
      <img src={src} alt={alt} />
    </span>
  )
}

// Word-by-word scroll reveal
function ScrollText({ segments }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.4'],
  })

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    return scrollYProgress.on('change', (v) => setProgress(v))
  }, [scrollYProgress])

  // Flatten all words with their indices
  const allWords = []
  segments.forEach((seg) => {
    if (seg.type === 'text') {
      seg.words.forEach((word) => allWords.push({ ...word, segType: 'text' }))
    }
  })
  const total = allWords.length

  let wordIndex = 0

  return (
    <p ref={ref} className={styles.scrollText}>
      {segments.map((seg, si) => {
        if (seg.type === 'pill') {
          return <InlinePill key={si} src={seg.src} alt={seg.alt} />
        }
        return seg.words.map((wordObj, wi) => {
          const idx = wordIndex++
          const threshold = idx / total
          const active = progress >= threshold
          return (
            <span
              key={`${si}-${wi}`}
              className={`${styles.word} ${active ? styles.active : ''} ${wordObj.green ? styles.green : ''}`}
            >
              {wordObj.text}{' '}
            </span>
          )
        })
      })}
    </p>
  )
}

export default function About() {
  const line1Segments = [
    {
      type: 'text',
      words: [
        { text: 'Nova' },
        { text: 'Energy' },
        { text: 'is' },
        { text: 'a' },
        { text: 'renewable', green: true },
        { text: 'energy', green: true },
        { text: 'company' },
        { text: 'focused' },
        { text: 'on' },
        { text: 'delivering' },
      ],
    },
    {
      type: 'pill',
      src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=120&q=80',
      alt: 'solar',
    },
    {
      type: 'text',
      words: [
        { text: 'advanced' },
        { text: 'solar' },
        { text: 'solutions' },
        { text: 'for' },
        { text: 'homes,' },
      ],
    },
  ]

  const line2Segments = [
    {
      type: 'text',
      words: [
        { text: 'businesses' },
        { text: 'and' },
        { text: 'industries.' },
        { text: 'Designed' },
        { text: 'for' },
        { text: 'efficiency,' },
        { text: 'long-term' },
        { text: 'performance,' },
        { text: 'and' },
      ],
    },
    {
      type: 'pill',
      src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=120&q=80',
      alt: 'building',
    },
    {
      type: 'text',
      words: [{ text: 'sustainability.' }],
    },
  ]

  const allSegments = [...line1Segments, ...line2Segments]

  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <ScrollText segments={allSegments} />
      </div>
    </section>
  )
}
