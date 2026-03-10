import { ChevronLeft, Layers } from 'lucide-react'

export default function ExperienceCard({ image, title, role, onClick }) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`View details for ${title}`}
      className="group relative flex items-center justify-center bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden border border-slate-200 h-36 w-full md:w-[48%]"
    >
      {/* Default state: logo */}
      <div className="absolute inset-0 flex items-center justify-center p-8 transition-all duration-500 group-hover:opacity-0 group-hover:scale-95">
        {image ? (
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain mix-blend-multiply filter grayscale opacity-70"
          />
        ) : (
          <div className="text-slate-300">
            <Layers size={48} />
          </div>
        )}
      </div>

      {/* Hover state: dark overlay with title + CTA */}
      <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-100">
        <h3 className="font-bold text-xl text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {title}
        </h3>
        <p className="text-sm font-medium text-slate-400 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
          {role}
        </p>
        <div className="mt-4 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-indigo-400 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150">
          View Details <ChevronLeft className="rotate-180" size={14} />
        </div>
      </div>
    </div>
  )
}
