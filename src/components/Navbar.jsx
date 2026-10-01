import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Education', '#education'],
  ['Certificate', '#certificate'],
  ['Contact', '#contact'],
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="section-wrap nav-shell" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            AR
          </span>
          <span>
            Avanish Rai<span className="brand-dot">.</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
        <div className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Say hello <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
