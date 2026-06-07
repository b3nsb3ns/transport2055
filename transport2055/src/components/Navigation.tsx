import '../styles//Navigation.css'
import { useState, useContext } from 'react'
import { NAV_ITEMS } from '../data/navigation.ts'
import { ExpandedContext } from '../styles/ExpandedContext'
import type { ExpandedContextType } from '../styles/ExpandedContext'

interface NavigationProps {
  onSelectContentId: (id: string) => void;
}

function Navigation({onSelectContentId}: NavigationProps) {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null)
  // const [isVisible, setIsVisible] = useState(true)
  const [navExpanded, setNavExpanded] = useState(true)

  const { toggleExpanded } = useContext<ExpandedContextType>(ExpandedContext)

  const isOpen = (id: string) => openMenuId === id

  return (
    <nav className={`navigation ${navExpanded ? 'collapsed' : 'expanded'}`}>
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
          ☰
        </button>
        <button
          className="site-logo"
          onClick={() => {
            onSelectContentId('home')
            toggleExpanded()
          }}
        >
          Transport 
          <img src={`${import.meta.env.BASE_URL}2055.svg`} alt="2055"></img>
        </button>
      </div>
      <ul className={`nav-root ${navExpanded ? 'collapsed' : 'expanded'}`}>
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
                onClick={() => {
                  onSelectContentId(item.contentId)
                  setNavExpanded(v => !v)
                  toggleExpanded()
                }}
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
                        setNavExpanded(v => !v)
                        toggleExpanded()
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
