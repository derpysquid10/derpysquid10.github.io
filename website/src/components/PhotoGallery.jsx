import { useState, useEffect } from 'react'
import PhotoCard from './PhotoCard'

const PHOTOS = [
  { title: 'Aviation', location: 'Pitt Meadows, Canada', year: '2022', image: '/photobar/aviation.jpg' },
  { title: 'Alpine Skiing', location: 'Vancouver, Canada', year: '2025', image: '/photobar/snow-hiking.jpg' },
  { title: 'Night Walks', location: 'Markham, Canada', year: '2026', image: '/photobar/night-bridge.jpg' },
  { title: 'Munich', location: 'Munich, Germany', year: '2024', image: '/photobar/munich.jpg' },
  { title: 'Exploring', location: 'Victoria, Canada', year: '2018', image: '/photobar/wooden-bridge.jpg' },
  { title: 'Travel', location: 'Český Krumlov, Czech Republic', year: '2024', image: '/photobar/town-arch.jpg' },
  { title: 'Stoos', location: 'Stoos, Switzerland', year: '2024', image: '/photobar/stoos.jpeg' },
  { title: 'Innsbruck', location: 'Innsbruck, Austria', year: '2024', image: '/photobar/innsbruck.jpeg' },
  { title: 'Breitachklamm', location: 'Breitachklamm, Germany', year: '2024', image: '/photobar/breitachklamm.jpeg' },
  { title: 'Salzburg', location: 'Salzburg, Austria', year: '2024', image: '/photobar/salzburg.jpeg' },
  { title: 'Vancouver', location: 'Vancouver, Canada', year: '2025', image: '/photobar/vancouver.jpeg' },
]

// Split into two rows
const ROW_1 = PHOTOS.filter((_, i) => i % 2 === 0)
const ROW_2 = PHOTOS.filter((_, i) => i % 2 === 1)

// Double each for seamless loop
const MARQUEE_ROW_1 = [...ROW_1, ...ROW_1]
const MARQUEE_ROW_2 = [...ROW_2, ...ROW_2]

export default function PhotoGallery() {
  const [paused, setPaused] = useState(false)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (!selected) return
    const handleKey = (e) => {
      if (e.key === 'Escape') setSelected(null)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [selected])

  return (
    <>
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Edge fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Row 1 */}
        <div
          className="flex gap-4 w-max py-2 animate-marquee"
          style={{ animationPlayState: paused ? 'paused' : 'running', animationDuration: '90s' }}
        >
          {MARQUEE_ROW_1.map((photo, index) => (
            <div key={index} className="flex-shrink-0" onClick={() => photo.image && setSelected(photo)}>
              <PhotoCard photo={photo} />
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div
          className="flex gap-4 w-max py-2 animate-marquee"
          style={{ animationPlayState: paused ? 'paused' : 'running', animationDuration: '90s' }}
        >
          {MARQUEE_ROW_2.map((photo, index) => (
            <div key={index} className="flex-shrink-0" onClick={() => photo.image && setSelected(photo)}>
              <PhotoCard photo={photo} />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected.image}
            alt={selected.title}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 text-sm text-center">
            {selected.location}{selected.year ? `, ${selected.year}` : ''}
          </div>
        </div>
      )}
    </>
  )
}
