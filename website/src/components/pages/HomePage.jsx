import { Mail, Github, Linkedin, BookOpen, Camera, ArrowRight } from 'lucide-react'
import ExperienceCard from '../ExperienceCard'
import ProjectRow from '../ProjectRow'
import PhotoGallery from '../PhotoGallery'

const SKILLS = [
  'Full Stack Development',
  '3D Web Graphics (Three.js)',
  'System Architecture',
]

export default function HomePage({ navigate }) {
  return (
    <>
      {/* ── ABOUT / HERO ──────────────────────────────────────────── */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 pt-28 pb-8 flex flex-wrap md:flex-nowrap items-center gap-12"
      >
        {/* Left: bio */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Hello, I'm Gordon!
          </h1>
          <p className="text-slate-600 leading-relaxed text-lg">
            I'm a passionate developer focusing on bridging the gap between
            engineering and design. Currently studying at TUM, I have experience
            working with massive scale systems at Huawei and building interactive
            3D experiences on the web.
          </p>

          {/* Contact links */}
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="mailto:gordon.tan111@gmail.com"
              className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors w-fit"
            >
              <Mail size={20} strokeWidth={1.5} />
              <span className="text-base">gordon.tan111@gmail.com</span>
            </a>

            <div className="flex flex-wrap gap-6 items-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors"
              >
                <Github size={20} strokeWidth={1.5} />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/gordon-tan04/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors"
              >
                <Linkedin size={20} strokeWidth={1.5} />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors"
              >
                <BookOpen size={20} strokeWidth={1.5} />
                <span className="font-medium">Blog</span>
              </a>
            </div>
          </div>

          {/* Skills */}
          <ul className="space-y-2 text-slate-600 pt-2">
            {SKILLS.map((skill) => (
              <li key={skill} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: profile photo */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-sm aspect-[3/4] bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <img
              src="/about.jpg"
              alt="Gordon Tan"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ────────────────────────────────────────────── */}
      <section id="experience" className="max-w-6xl mx-auto px-6 pt-6 pb-16">
        <h2 className="text-4xl font-bold text-slate-800 mb-8">Experience</h2>
        <div className="flex flex-wrap gap-6 justify-start">
          <ExperienceCard
            title="Huawei Noah's Ark Lab"
            role="Assistant Researcher Intern"
            image="/huawei_logo.png"
            onClick={() => navigate('huawei')}
          />
          <ExperienceCard
            title="Technical University of Munich"
            role="Undergraduate Researcher"
            image="/tum_logo.jpg"
            onClick={() => navigate('tum')}
          />
        </div>
      </section>

      {/* ── PROJECTS PREVIEW ──────────────────────────────────────── */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 pb-32 border-t border-slate-100 pt-16"
      >
        <div className="flex items-end justify-between mb-20">
          <h2 className="text-4xl font-bold text-slate-800">Things I've Done</h2>
          <button
            onClick={() => navigate('projects')}
            className="hidden md:inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold text-sm transition-colors group"
          >
            View All Projects
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform duration-200"
            />
          </button>
        </div>

        <div className="flex flex-col gap-28">
          <ProjectRow
            title="VideoRigAnything"
            description="Rigged 4D mesh reconstruction from video. This project introduces a novel framework for automatically extracting animatable 3D meshes directly from monocular video footage, bridging the gap between static 3D capture and dynamic animation."
            image=""
            github="#"
          />
          <ProjectRow
            title="UniScale"
            description="A unified, scale-aware multi-view 3D reconstruction framework for robotic applications. It uses a single feed-forward network to jointly estimate camera parameters, depth maps, and metric scale while flexibly integrating geometric priors without training from scratch."
            image=""
            arxiv="#"
            reverse
          />
          <ProjectRow
            title="Deep Learning Classifier"
            description="Custom CNN classifying images with 98% accuracy. Trained on a diverse dataset to identify granular object categories, heavily optimized for edge deployment."
            image=""
          />
        </div>

        {/* Mobile CTA */}
        <div className="mt-16 flex md:hidden">
          <button
            onClick={() => navigate('projects')}
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold text-sm transition-colors group"
          >
            View All Projects
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform duration-200"
            />
          </button>
        </div>
      </section>

      {/* ── PHOTOS ────────────────────────────────────────────────── */}
      <section
        id="photos"
        className="max-w-6xl mx-auto px-6 pb-32 border-t border-slate-100 pt-16"
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <Camera className="text-slate-400" size={30} />
          Photos
        </h2>
        <PhotoGallery />
      </section>
    </>
  )
}
