export default function NavBar({ activePage, navigate }) {
  const scrollToSection = (id) => {
    if (activePage !== 'home') {
      navigate('home')
      // Wait for React to render HomePage before scrolling
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleHomeClick = (e) => {
    e.preventDefault()
    navigate('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const linkBase =
    'text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200 cursor-pointer'
  const activeLink =
    'text-sm font-medium text-indigo-600 cursor-pointer'

  const isExperiencePage = activePage === 'huawei' || activePage === 'tum'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={handleHomeClick}
          className="text-xl font-black tracking-tight leading-tight text-slate-900 hover:text-indigo-600 transition-colors duration-200"
        >
          Gordon Tan
        </button>

        {/* Nav links */}
        <div className="flex items-center gap-8">
          <button
            onClick={handleHomeClick}
            className={activePage === 'home' ? activeLink : linkBase}
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection('experience')}
            className={isExperiencePage ? activeLink : linkBase}
          >
            Experience
          </button>

          {/* Projects tab commented out for now
          <button
            onClick={() => navigate('projects')}
            className={activePage === 'projects' ? activeLink : linkBase}
          >
            Projects
          </button>
          */}

          <button
            onClick={() => scrollToSection('photos')}
            className={linkBase}
          >
            Photos
          </button>
        </div>
      </div>
    </nav>
  )
}
