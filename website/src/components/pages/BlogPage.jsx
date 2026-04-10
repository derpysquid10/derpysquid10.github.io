import { Construction, ArrowLeft } from 'lucide-react'

export default function BlogPage({ navigate }) {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-28 pb-32 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <Construction size={64} className="text-navy-500 mb-6" />
      <h1 className="text-4xl md:text-5xl font-bold text-navy-500 mb-4">
        Blog — Under Construction
      </h1>
      <p className="text-slate-500 text-lg max-w-md mb-10">
        I'm working on something here. Check back soon!
      </p>
      <button
        onClick={() => navigate('home')}
        className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white text-lg font-semibold rounded-full hover:bg-slate-700 transition-colors"
      >
        <ArrowLeft size={22} />
        Back to Home
      </button>
    </section>
  )
}
