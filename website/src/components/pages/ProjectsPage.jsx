import { ChevronLeft, Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: 'VideoRigAnything',
    description:
      'Rigged 4D mesh reconstruction from video. This project introduces a novel framework for automatically extracting animatable 3D meshes directly from monocular video footage, bridging the gap between static 3D capture and dynamic animation.',
    longDescription:
      'VideoRigAnything pushes the boundary of what is possible with monocular video as input. By combining advances in neural implicit representations with classical rigging techniques, the system automatically identifies skeletal structures, skinning weights, and produces temporally consistent mesh sequences — all without any manual annotation or multi-camera rigs.',
    image: '',
    github: '#',
    tags: ['Python', 'PyTorch', 'Three.js', 'CUDA', 'Computer Vision'],
  },
  {
    title: 'UniScale',
    description:
      'A unified, scale-aware multi-view 3D reconstruction framework for robotic applications. It uses a single feed-forward network to jointly estimate camera parameters, depth maps, and metric scale while flexibly integrating geometric priors without training from scratch.',
    longDescription:
      'UniScale addresses the fundamental ambiguity of scale in monocular and multi-view 3D reconstruction by conditioning the network on geometric priors at inference time. This makes it uniquely flexible — the same trained model can leverage sparse LiDAR returns, IMU data, or known object sizes to produce metric-accurate reconstructions crucial for downstream robotic planning tasks.',
    image: '',
    arxiv: '#',
    tags: ['Python', 'PyTorch', 'ROS', 'Robotics', 'Depth Estimation'],
  },
  {
    title: 'Deep Learning Classifier',
    description:
      'Custom CNN classifying images with 98% accuracy. Trained on a diverse dataset to identify granular object categories, heavily optimized for edge deployment.',
    longDescription:
      'This classifier was designed from the ground up for edge hardware constraints. The architecture employs depthwise separable convolutions, aggressive quantization-aware training, and a custom data augmentation pipeline to achieve state-of-the-art accuracy at a fraction of the parameter count of conventional models.',
    image: '',
    github: null,
    arxiv: null,
    tags: ['Python', 'TensorFlow', 'ONNX', 'Edge AI', 'Quantization'],
  },
]

function ProjectBlock({ project, index }) {
  const reverse = index % 2 !== 0

  return (
    <article
      className={`flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-start gap-10 md:gap-16 pb-20 border-b border-slate-100 last:border-0 last:pb-0`}
    >
      {/* Text */}
      <div className="w-full md:w-1/2 space-y-5">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">
            Project {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
          {project.title}
        </h2>

        <p className="text-slate-600 text-lg leading-relaxed">{project.description}</p>
        <p className="text-slate-500 leading-relaxed">{project.longDescription}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold tracking-wide border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-700 transition-colors font-medium text-sm shadow-sm hover:shadow-md"
            >
              <Github size={16} />
              GitHub
            </a>
          )}
          {project.arxiv && (
            <a
              href={project.arxiv}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-full hover:bg-slate-50 transition-colors font-medium text-sm shadow-sm hover:shadow-md"
            >
              <ExternalLink size={16} />
              arXiv Paper
            </a>
          )}
          {!project.github && !project.arxiv && (
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-400 rounded-full font-medium text-sm cursor-not-allowed select-none">
              Coming Soon
            </span>
          )}
        </div>
      </div>

      {/* Media */}
      <div className="w-full md:w-1/2 aspect-video md:aspect-[4/3] rounded-[2rem] overflow-hidden bg-slate-100 border border-slate-200 shadow-xl flex items-center justify-center group relative">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="flex flex-col items-center gap-3 text-slate-400">
            <div className="text-3xl font-black tracking-tighter text-slate-200 select-none">
              {project.title
                .split(' ')
                .map((w) => w[0])
                .join('')}
            </div>
            <span className="text-xs font-medium tracking-widest uppercase">
              Media Placeholder
            </span>
          </div>
        )}
      </div>
    </article>
  )
}

export default function ProjectsPage({ navigate }) {
  return (
    <div className="min-h-screen bg-white">
      {/* ── HEADER ─────────────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-28 pb-20 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 40px)',
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
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Things I've Done
          </h1>
          <p className="mt-4 text-slate-400 text-lg max-w-xl">
            A collection of projects spanning 3D reconstruction, machine learning, and systems
            engineering.
          </p>
        </div>
      </div>

      {/* ── PROJECT LIST ────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-20">
        {PROJECTS.map((project, i) => (
          <ProjectBlock key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* ── BACK CTA ────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <button
          onClick={() => navigate('home')}
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold transition-colors group"
        >
          <ChevronLeft
            size={18}
            className="group-hover:-translate-x-0.5 transition-transform duration-200"
          />
          Back to Home
        </button>
      </div>
    </div>
  )
}
