import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import SocialBar from './components/SocialBar'
import HomePage from './components/pages/HomePage'
import ExperienceDetail from './components/pages/ExperienceDetail'
import ProjectsPage from './components/pages/ProjectsPage'
import BlogPage from './components/pages/BlogPage'

const HUAWEI_DATA = {
  title: "Huawei Noah's Ark Lab",
  role: 'Assistant Researcher Intern',
  date: 'Oct 2023 - Present',
  location: 'Munich, Germany',
  description:
    'Worked on large-scale distributed systems, focusing on optimizing data throughput and reducing latency for cloud infrastructure services.',
  tags: ['C++', 'Distributed Systems', 'Cloud Computing'],
  logo: '/huawei.png',
  accentColor: 'from-red-900 to-slate-900',
  highlights: [
    'Designed and implemented high-throughput data pipeline components handling millions of events per second.',
    'Reduced end-to-end latency by 35% through algorithmic optimization of critical hot paths.',
    'Collaborated with senior researchers to prototype novel scheduling strategies for cloud workloads.',
    'Contributed to internal tooling that reduced CI/CD pipeline execution time by 20%.',
  ],
}

const TUM_DATA = {
  title: 'Technical University of Munich',
  role: 'Undergraduate Researcher',
  date: 'Apr 2022 – Sep 2023',
  location: 'Munich, Germany',
  description:
    'Conducted research in the field of Computer Vision and Deep Learning, contributing to papers published in top-tier conferences.',
  tags: ['Python', 'PyTorch', 'Computer Vision', 'Academic Writing'],
  logo: '/tum_logo.png',
  accentColor: 'from-blue-900 to-slate-900',
  highlights: [
    'Co-authored a paper accepted at a top-tier computer vision conference.',
    'Built and trained deep learning models for 3D scene understanding tasks.',
    'Maintained a reproducible research codebase used by the broader lab team.',
    'Presented findings at internal seminars and external symposiums.',
  ],
}

export default function App() {
  const [activePage, setActivePage] = useState('home')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [activePage])

  const navigate = (page) => setActivePage(page)

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen">
      <NavBar activePage={activePage} navigate={navigate} />

      {activePage === 'home' && <SocialBar />}

      <main>
        {activePage === 'home' && <HomePage navigate={navigate} />}

        {activePage === 'huawei' && (
          <ExperienceDetail {...HUAWEI_DATA} navigate={navigate} />
        )}

        {activePage === 'tum' && (
          <ExperienceDetail {...TUM_DATA} navigate={navigate} />
        )}

        {activePage === 'projects' && <ProjectsPage navigate={navigate} />}

        {activePage === 'blog' && <BlogPage />}
      </main>
    </div>
  )
}
