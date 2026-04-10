import { Mail, Linkedin, BookOpen } from 'lucide-react'
import ExperienceCard from '../ExperienceCard'
import ProjectRow from '../ProjectRow'
import PhotoGallery from '../PhotoGallery'

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

          {/* Contact links */}
          <div className="flex flex-wrap gap-5 items-center">
            <a
              href="mailto:gordon.tan111@gmail.com"
              className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors"
            >
              <Mail size={20} strokeWidth={1.5} />
              <span className="text-base underline">gordon.tan111@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/gordon-tan04/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors"
            >
              <Linkedin size={20} strokeWidth={1.5} />
              <span className="underline">LinkedIn</span>
            </a>
            <button
              onClick={() => navigate('blog')}
              className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors"
            >
              <BookOpen size={20} strokeWidth={1.5} />
              <span className="underline">Blog</span>
            </button>
          </div>

          <p className="text-slate-600 leading-relaxed text-lg">
            I am a 4th year Engineering Science student specializing in Machine
            Intelligence at the University of Toronto. I am currently a
            research intern at Huawei Noah's Ark Lab on the SpatialAI/Autonomous Driving team where I had the privileged to be mentored by{' '}
            <a href="https://binbin-xu.github.io/" target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-700 underline">Dr. Binbin Xu</a>,
            focusing on 3D reconstruction. Prior to this,
            I was a summer research intern at the Technical University of
            Munich (TUM) under <a href="https://www.dynsyslab.org/prof-angela-schoellig/" target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-700 underline">Prof. Dr. Angela Schoellig</a>, working on semantic
            autonomous navigation for mobile manipulators.
          </p>
          <p className="text-slate-600 leading-relaxed text-lg">
            Outside of school, I am an avid cyclist with a goal of cycling on
            every continent in the world (including Antarctica). Currently, I'm 3/7 on the way! I am also a private pilot and enjoy flying around
            Toronto and Vancouver, my hometown, seeing the beautiful scenic nature and cities from
            above.
          </p>
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
        <h2 className="text-4xl font-bold text-slate-800 mb-8">💼 Experience</h2>
        <div className="flex flex-wrap gap-6 justify-start">
          <ExperienceCard
            title="Huawei Noah's Ark Lab"
            role="Assistant Researcher Intern"
            image="/huawei.png"
          />
          <ExperienceCard
            title="Technical University of Munich"
            role="Undergraduate Researcher"
            image="/tum_logo.png"
          />
        </div>
      </section>

      {/* ── GOALS & QUESTS ────────────────────────────────────────── */}
      <section id="goals" className="max-w-6xl mx-auto px-6 pt-6 pb-16">
        <h2 className="text-4xl font-bold text-slate-800 mb-8">🎯 Goals & Quests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
          {[
            { title: 'BASc Engineering Science', current: 4, total: 5, unit: 'years', gradient: 'from-emerald-400 to-teal-500' },
            { title: 'Continents Cycled', current: 3, total: 7, unit: 'continents', gradient: 'from-amber-400 to-orange-500' },
            { title: 'Commercial Pilot License', current: 71.4, total: 200, unit: 'hours', gradient: 'from-sky-400 to-indigo-500' },
            { title: 'Countries Visited', current: 11, total: 196, unit: 'countries', gradient: 'from-rose-400 to-pink-500' },
            { title: <>Learning Chopin <a href="https://www.youtube.com/watch?v=tSAwZP8e-zQ&list=RDtSAwZP8e-zQ&start_radio=1&pp=ygUaY2hvcGluIG5vY3R1cm5lIG9wIDQ4IG5vIDGgBwE%3D" target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-700 underline">Nocturne</a></>, current: 15, total: 100, unit: '', gradient: 'from-violet-400 to-purple-500' },
            { title: '???', current: 0, total: 1, unit: '', gradient: 'from-slate-300 to-slate-400' },
          ].map((goal, i) => (
            <div key={i} className="space-y-1.5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-800">{goal.title}</h3>
                {goal.unit && (
                  <span className="text-sm font-medium text-slate-500">
                    {goal.current} {goal.unit}
                  </span>
                )}
              </div>
              <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${goal.gradient} rounded-full transition-all duration-500 relative overflow-hidden`}
                  style={{ width: `${(goal.current / goal.total) * 100}%` }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.2) 4px, rgba(255,255,255,0.2) 8px)',
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PUBLICATIONS & PROJECTS PREVIEW — commented out for now, restorable from git ── */}

      {/* ── PHOTOS ────────────────────────────────────────────────── */}
      <section
        id="photos"
        className="max-w-6xl mx-auto px-6 pb-32 border-t border-slate-100 pt-16"
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          📸 Photos
        </h2>
        <PhotoGallery />
      </section>

      {/* ── MISCELLANEOUS ─────────────────────────────────────────── */}
      <section id="misc" className="max-w-6xl mx-auto px-6 pb-32 border-t border-slate-100 pt-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">🪴 Miscellaneous</h2>
        <p className="text-slate-600 text-lg mb-4">
          Aside from cycling and flying, I have a few other interests (that may be excessive).
        </p>
        <div className="space-y-1">
          <div className="flex gap-3">
            <span className="mt-2 w-2.5 h-2.5 rounded-full bg-violet-500 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900">🎹 Piano</h3>
              <p className="text-slate-600 leading-relaxed">
                I'm a massive fan of classical music and my favorite composers are Chopin and Rachmaninoff. Their music just feels magical to me. They capture every emotion you can think of and if the time is right, it immerses you to a new and vibrant world of imagination.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="mt-2 w-2.5 h-2.5 rounded-full bg-sky-500 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900">⛷️ Skiing</h3>
              <p className="text-slate-600 leading-relaxed">
                Whether it's the Alps or the Rockies, I love hitting the slopes in winter. There's nothing quite like carving fresh tracks on a cold morning with mountains stretching out in every direction.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="mt-2 w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900">🥾 Hiking</h3>
              <p className="text-slate-600 leading-relaxed">
                I just recently got into hiking, both in the winter and summer. Both seasons are amazing with their own distinct sceneries, beauties, and unforgettable challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
