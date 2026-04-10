import { Construction } from 'lucide-react'

export default function BlogPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-28 pb-32 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <Construction size={64} className="text-indigo-500 mb-6" />
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        Blog — Under Construction 🚧
      </h1>
      <p className="text-slate-500 text-lg max-w-md">
        I'm working on something here. Check back soon!
      </p>
    </section>
  )
}
