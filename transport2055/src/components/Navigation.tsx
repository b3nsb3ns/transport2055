import './Navigation.css'

interface NavigationProps {
  onSelectTopic: (topic: string) => void;
}

function Navigation({onSelectTopic}: NavigationProps) {

  return (
    <nav className="navbar">
        <div className="navbar-left">
            <a href="/" className="logo">
            Transport 2055
            </a>
        </div>
        <div className="navbar-center">
            <ul className="nav-links">
                <li><button onClick={() => onSelectTopic('Home content')}>Home</button></li>
                <li><button onClick={() => onSelectTopic('SkyTrain content')}>SkyTrain</button></li>
                <li><button onClick={() => onSelectTopic('Regional Rail content')}>Regional Rail</button></li>
                <li><button onClick={() => onSelectTopic('RapidBus content')}>RapidBus</button></li>
                <li><button onClick={() => onSelectTopic('ExpressBus content')}>ExpressBus</button></li>
                <li><button onClick={() => onSelectTopic('Tram content')}>Tram</button></li>
                <li><button onClick={() => onSelectTopic('BRT content')}>BRT</button></li>
                <li><button onClick={() => onSelectTopic('Minimum Viable Network content')}>Minimum Viable Network</button></li>
                <li><button onClick={() => onSelectTopic('Bonus content')}>Bonus</button></li>
                <li><button onClick={() => onSelectTopic('Local Bus content')}>Local Bus</button></li>
            </ul>
        </div>
        <div className="navbar-right">
            <a href="/cart" className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">0</span>
            </a>
            <a href="/account" className="user-icon">
            <i className="fas fa-user"></i>
            </a>
        </div>
    </nav>
  )
}

export default Navigation
