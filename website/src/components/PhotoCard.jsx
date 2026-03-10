import { useRef } from 'react'

export default function PhotoCard({ photo }) {
  const isVideo =
    photo.image && /\.(mp4|webm|ogg)$/i.test(photo.image)
  const videoRef = useRef(null)

  const handleMouseEnter = () => {
    if (isVideo && videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }

  const handleMouseLeave = () => {
    if (isVideo && videoRef.current) {
      videoRef.current.pause()
    }
  }

  return (
    <div
      className="relative h-[300px] md:h-[400px] w-auto bg-slate-100 rounded-xl overflow-hidden cursor-pointer shadow-sm group transition-all duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {photo.image ? (
        isVideo ? (
          <video
            ref={videoRef}
            src={photo.image}
            loop
            muted
            playsInline
            className="h-full w-auto object-contain bg-slate-100"
          />
        ) : (
          <img
            src={photo.image}
            alt={photo.title}
            className="h-full w-auto object-contain bg-slate-100"
          />
        )
      ) : (
        <div className="h-full w-56 flex items-center justify-center bg-slate-800">
          <span className="text-slate-500 font-medium text-[10px] tracking-widest uppercase text-center px-4">
            Waiting for Photo
          </span>
        </div>
      )}

      {/* Location overlay on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-slate-900/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-end">
        <span className="text-white/90 text-sm font-normal drop-shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {photo.location}
          {photo.year ? `, ${photo.year}` : ''}
        </span>
      </div>
    </div>
  )
}
