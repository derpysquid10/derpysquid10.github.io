export default function NavBar({ activePage, navigate }) {
  const scrollToSection = (id) => {
    const scrollTo = () => {
      const el = document.getElementById(id)
      if (!el) return
      const navHeight = 56
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }

    if (activePage !== 'home') {
      navigate('home')
      setTimeout(scrollTo, 80)
    } else {
      scrollTo()
    }
  }

  const handleHomeClick = (e) => {
    e.preventDefault()
    navigate('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const linkBase =
    'text-sm font-normal font-sans text-slate-600 hover:text-navy-600 transition-colors duration-200 cursor-pointer'
  const activeLink =
    'text-sm font-medium font-sans text-navy-600 cursor-pointer'

  const isExperiencePage = activePage === 'huawei' || activePage === 'tum'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={handleHomeClick}
          className="text-xl font-semibold font-serif tracking-tight leading-tight text-navy-600 hover:text-navy-500 transition-colors duration-200"
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

          <button
            onClick={() => scrollToSection('research')}
            className={linkBase}
          >
            Research
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
