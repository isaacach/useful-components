import '../styles/navbar.css'

export default function Navbar() {
  return (
    <nav>
      <header className="header-wrapper">
        <div className="img-wrapper">
          <img src="abstract.png" alt="brand icon" />
        </div>
        <div className="brand-wrapper">
          <p>Useful</p>
          <p>Components</p>
        </div>
      </header>
      <div className="light-dark-wrapper">
          <input type="checkbox" />
          <p className='dark'>Dark</p>
          <p className='light'>Light</p>
          <div className="slider"></div>
        </div>
    </nav>
  )
}