import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper indigo">
          <div className="container">
            <Link to="/" className="brand-logo">Nostalgia</Link>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/jogos">Jogos</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <Link to="/"><li><a href="#">Home</a></li></Link>
              <Link to="/jogos"><li><a href="#">Jogos</a></li></Link>
              <Link to="/login"><li><a href="#">Login</a></li></Link>
            </ul>
          </div>
        </div>
      </nav>

    </div >
  )
}

export default Navbar;