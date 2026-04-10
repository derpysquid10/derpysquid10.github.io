import { ChevronLeft, MapPin, Calendar } from 'lucide-react'

export default function ExperienceDetail({
  title,
  role,
  date,
  location,
  description,
  tags,
  logo,
  accentColor = 'from-slate-800 to-slate-900',
  highlights = [],
  navigate,
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* ── HEADER ────────────────────────────────────────────────── */}
      <div className={`bg-gradient-to-br ${accentColor} text-white pt-28 pb-20 px-6 relative overflow-hidden`}>
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <button
          onClick={() => navigate('home')}
          className="absolute top-[4.5rem] left-6 flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors text-sm font-medium group"
        >
          <ChevronLeft
            size={18}
            className="group-hover:-translate-x-0.5 transition-transform duration-200"
          />
          Back to Home
        </button>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Logo */}
          {logo && (
            <div className="mb-8 w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden border border-white/20 shadow-lg">
              <img
                src={logo}
                alt={`${title} logo`}
                className="w-14 h-14 object-contain filter brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.parentElement.style.display = 'none'
                }}
              />
            </div>
          )}

          <p className="text-navy-300 text-sm font-semibold uppercase tracking-widest mb-2">
            {role}
          </p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
            {title}
          </h1>

          <div className="flex flex-wrap gap-5 text-slate-300 text-sm font-medium">
            <span className="flex items-center gap-1.5">
              <MapPin size={15} className="text-navy-400" />
              {location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={15} className="text-navy-400" />
              {date}
            </span>
          </div>
        </div>
      </div>

      {/* ── BODY ──────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-14">
        {/* Overview */}
        <div>
          <h2 className="text-2xl font-bold text-navy-500 mb-4">Role Overview</h2>
          <p className="text-slate-600 text-lg leading-relaxed">{description}</p>
        </div>

        {/* Highlights */}
        {highlights.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-navy-500 mb-6">Key Contributions</h2>
            <ul className="space-y-4">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-2 w-2 h-2 rounded-full bg-navy-500 flex-shrink-0" />
                  <span className="text-slate-600 text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div>
          <h2 className="text-2xl font-bold text-navy-500 mb-5">Technologies & Skills</h2>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold tracking-wide border border-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Back CTA */}
        <div className="pt-4 border-t border-slate-100">
          <button
            onClick={() => navigate('home')}
            className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-700 font-semibold transition-colors group"
          >
            <ChevronLeft
              size={18}
              className="group-hover:-translate-x-0.5 transition-transform duration-200"
            />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}
