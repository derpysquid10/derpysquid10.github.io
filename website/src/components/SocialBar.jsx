import { Linkedin, Mail } from 'lucide-react'

export default function SocialBar() {
  return (
    <div className="hidden md:flex fixed top-1/2 right-5 -translate-y-1/2 flex-col gap-5 z-50">
      <a
        href="https://www.linkedin.com/in/gordon-tan04/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="text-slate-700 opacity-60 hover:opacity-100 hover:text-navy-600 transition-all duration-200"
      >
        <Linkedin strokeWidth={1.5} size={22} />
      </a>
      <a
        href="mailto:gordon.tan111@gmail.com"
        aria-label="Email"
        className="text-slate-700 opacity-60 hover:opacity-100 hover:text-navy-600 transition-all duration-200"
      >
        <Mail strokeWidth={1.5} size={22} />
      </a>
    </div>
  )
}
