import { useState } from 'react'
import PhotoCard from './PhotoCard'

const PHOTOS = [
  { title: 'Aviation', location: 'Pitt Meadows, Canada', year: '2024', image: '/photos/aviation.jpg' },
  { title: 'Alpine Skiing', location: 'Vancouver, Canada', year: '2025', image: '/photos/snow-hiking.jpg' },
  { title: 'Night Walks', location: 'Markham, Canada', year: '2026', image: '/photos/night-bridge.jpg' },
  { title: 'Munich', location: 'Munich, Germany', year: '2024', image: '/photos/munich.jpg' },
  { title: 'Exploring', location: 'Victoria, Canada', year: '2018', image: '/photos/wooden-bridge.jpg' },
  { title: 'Travel', location: 'Český Krumlov, Czech Republic', year: '2024', image: '/photos/town-arch.jpg' },
  { title: 'Classical Piano', location: 'Home', year: '2024', image: '' },
  { title: 'Cycling', location: 'The Alps', year: '2023', image: '' },
]

// Double for seamless loop
const MARQUEE_PHOTOS = [...PHOTOS, ...PHOTOS]

export default function PhotoGallery() {
  const [paused, setPaused] = useState(false)

  return (
    <div className="relative w-full overflow-hidden">
      {/* Edge fade gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div
        className={`flex gap-6 w-max py-4 ${
          paused ? '[animation-play-state:paused]' : ''
        } animate-marquee`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ animationPlayState: paused ? 'paused' : 'running' }}
      >
        {MARQUEE_PHOTOS.map((photo, index) => (
          <div key={index} className="flex-shrink-0">
            <PhotoCard photo={photo} />
          </div>
        ))}
      </div>
    </div>
  )
}
