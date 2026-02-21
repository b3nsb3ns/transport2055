import '../styles//Navigation.css'
import { useState, useEffect } from 'react'
import { NAV_ITEMS } from '../data/navigation.ts'

interface NavigationProps {
  onSelectContentId: (id: string) => void;
}

function Navigation({onSelectContentId}: NavigationProps) {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [navExpanded, setNavExpanded] = useState(true)

  const isOpen = (id: string) => openMenuId === id

  useEffect(() => {
    let lastScrollY = window.scrollY
    let accumulated = 0
    let lastDirection: 'up' | 'down' | null = null

    const HIDE_THRESHOLD = 80 // scroll down 80 pixels to hide nav bar
    const SHOW_THRESHOLD = 60 // scroll up 60 pixels to make nav bar reappear
    const SCROLL_DEADZONE = 8

    const onScroll = () => {
      const currentScrollY = window.scrollY
      const delta = currentScrollY - lastScrollY

      // Ignore tiny trackpad jitter
      if (Math.abs(delta) < SCROLL_DEADZONE) return

      const direction = delta > 0 ? 'down' : 'up'

      // Reset accumulator if direction changes
      if (direction !== lastDirection){
        accumulated = 0
        lastDirection = direction
      }

      accumulated += Math.abs(delta)

      // Always show near top
      if (currentScrollY < 10) {
        setIsVisible(true)
        setNavExpanded(true)
        accumulated = 0
      } else if (direction == 'down' && accumulated > HIDE_THRESHOLD) {
        // scrolling down
        setIsVisible(false)
        setOpenMenuId(null) // close menus when hiding
        accumulated = 0
      } else if (direction == 'up' && accumulated > SHOW_THRESHOLD) {
        // scrolling up
        setIsVisible(true)
        accumulated = 0
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navigation ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="nav-brand">
        <button
          className="nav-toggle"
          aria-expanded={navExpanded}
          aria-label="Toggle navigation options"
          onClick={() => {
            setNavExpanded(v => !v)
            setOpenMenuId(null)
          }}
        >
          {navExpanded ? '☰' : '☰'}
        </button>
        <button
          className="site-logo"
          onClick={() => onSelectContentId('home')}
        >
          Transport 
          <img src={`${import.meta.env.BASE_URL}2055.svg`} alt="2055"></img>
        </button>
      </div>
      <ul className={`nav-root ${navExpanded ? 'expanded' : 'collapsed'}`}>
        {NAV_ITEMS.map(item => (
          <li
            key={item.id}
            className="nav-item"
            onMouseEnter={() => setOpenMenuId(item.id)}
            onMouseLeave={() => setOpenMenuId(null)}
          >
            <div className="nav-parent">
              {/* Parent content button */}
              <button
                className="nav-link"
                onClick={() => onSelectContentId(item.contentId)}
              >
                {item.label}
              </button>

              {/* Submenu toggle (mainly for mobile) */}
              {item.children && (
                <button
                  className="nav-caret"
                  aria-haspopup="menu"
                  aria-expanded={isOpen(item.id)}
                  onClick={() =>
                    setOpenMenuId(isOpen(item.id) ? null : item.id)
                  }
                >
                  ▼
                </button>
              )}
            </div>

            {/* Submenu */}
            {item.children && isOpen(item.id) && (
              <ul className="dropdown">
                {item.children.map(child => (
                  <li key={child.id}>
                    <button
                      onClick={() => {
                        onSelectContentId(child.id)
                        setOpenMenuId(null)
                      }}
                    >
                      {child.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
