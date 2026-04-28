'use client'

import { useEffect, useState } from 'react'

type Mood = 'night' | 'day'

const moods: Array<{ value: Mood; label: string }> = [
  { value: 'night', label: 'Night' },
  { value: 'day', label: 'Day' },
]

export function MoodToggle() {
  const [mood, setMood] = useState<Mood>('night')

  useEffect(() => {
    const savedMood = window.localStorage.getItem('mood')
    const nextMood = savedMood === 'day' ? 'day' : 'night'

    setMood(nextMood)
    document.documentElement.dataset.mood = nextMood
  }, [])

  function updateMood(nextMood: Mood) {
    setMood(nextMood)
    document.documentElement.dataset.mood = nextMood
    window.localStorage.setItem('mood', nextMood)
  }

  return (
    <div className="mood-toggle" aria-label="Visual mood">
      {moods.map((item) => (
        <button
          key={item.value}
          type="button"
          className="mood-toggle__button"
          aria-pressed={mood === item.value}
          onClick={() => updateMood(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
