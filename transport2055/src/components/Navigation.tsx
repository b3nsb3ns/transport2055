import '../styles//Navigation.css'
import { useState } from 'react'
import { NAV_ITEMS } from '../data/navigation.ts'

interface NavigationProps {
  onSelectContentId: (id: string) => void;
}

function Navigation({onSelectContentId}: NavigationProps) {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null)

  const isOpen = (id: string) => openMenuId === id

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <button
          className="site-logo"
          onClick={() => onSelectContentId('home')}
        >
          Transport 2055
        </button>
      </div>
      <ul className="nav-root">
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
                  ▾
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
