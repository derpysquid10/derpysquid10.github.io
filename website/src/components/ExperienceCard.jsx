import { Layers } from 'lucide-react'

export default function ExperienceCard({ image, title, role, onClick }) {
  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
      aria-label={`View details for ${title}`}
      className={`group relative flex items-center justify-center bg-white rounded-2xl shadow-sm transition-all duration-300 overflow-hidden border border-slate-200 h-36 w-full md:w-[48%] ${onClick ? 'cursor-pointer hover:shadow-xl hover:-translate-y-1' : ''}`}
    >
      <div className="absolute inset-0 flex items-center justify-center p-4">
        {image ? (
          <img
            src={image}
            alt={title}
            className="max-h-28 max-w-full object-contain mix-blend-multiply transition-all duration-500"
          />
        ) : (
          <div className="text-slate-300">
            <Layers size={48} />
          </div>
        )}
      </div>
    </div>
  )
}
