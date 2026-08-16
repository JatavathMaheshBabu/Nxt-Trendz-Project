import { Link, useNavigate } from 'react-router-dom'
import { removeToken } from '../../services/auth'
import './index.css'
const Header = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    removeToken()
    navigate('/login', {replace: true})
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/products" className="logo">
          Nxt Trendz
        </Link>

        <nav className="nav-menu">
          <Link to="/products" className="nav-link">
            Products
          </Link>

          <button
            type="button"
            className="logout-button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header  