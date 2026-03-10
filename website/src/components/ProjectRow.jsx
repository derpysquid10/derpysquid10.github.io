import { Github, ExternalLink } from 'lucide-react'

export default function ProjectRow({ title, description, image, github, arxiv, reverse }) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-center gap-12 md:gap-16`}
    >
      {/* Text block */}
      <div className="w-full md:w-1/2 space-y-6">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          {title}
        </h3>
        <p className="text-slate-600 text-lg leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-4 pt-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-700 transition-colors font-medium text-sm shadow-sm hover:shadow-md"
            >
              <Github size={16} />
              GitHub
            </a>
          )}
          {arxiv && (
            <a
              href={arxiv}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-full hover:bg-slate-50 transition-colors font-medium text-sm shadow-sm hover:shadow-md"
            >
              <ExternalLink size={16} />
              arXiv Paper
            </a>
          )}
          {!github && !arxiv && (
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-400 rounded-full font-medium text-sm cursor-not-allowed select-none">
              Coming Soon
            </span>
          )}
        </div>
      </div>

      {/* Media block */}
      <div className="w-full md:w-1/2 aspect-video md:aspect-[4/3] rounded-[2rem] overflow-hidden bg-slate-100 shadow-xl border border-slate-200 flex items-center justify-center group relative">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <span className="text-slate-400 text-xs font-medium tracking-widest uppercase">
            Media Placeholder
          </span>
        )}
      </div>
    </div>
  )
}
