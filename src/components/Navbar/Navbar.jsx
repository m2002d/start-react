import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="position-fixed top-0 w-100 z-3">
    <nav className="navbar navbar-expand-lg py-4">
    <div className="container">
      <Link className="navbar-brand text-uppercase fw-bolder" to="">Start React</Link>
      <button className="navbar-toggler text-light fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <span className="navbar-toggler-icon small ms-1"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link text-uppercase fw-bold px-4" aria-current="page" to="portfolio">portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-uppercase fw-bold px-4" to="about">about</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-uppercase fw-bold px-4" to="contact">contact</NavLink>
          </li>
          
          
        </ul>
        
      </div>
    </div>
  </nav>
    </header>
  )
}

