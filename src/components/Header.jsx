import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header' id='header'>
      <nav className='nav container'>
        <Link to="/" className="nav__logo">
            <img src="/servitec.png" width="120px"/>
        </Link>

        <div className='nav__menu'>
          <ul className='nav__list'>
              <li className='nav__item'>
                  <Link className='nav__link' to="/">
                    Inicio
                  </Link>
              </li>

              <li className='nav__item'>
                  <Link className='nav__link' to="/Servicios">
                      Servicios
                  </Link>
              </li>

              <li className='nav__item'>
                  <Link className='nav__link' to="/Nosotros">
                      Nosotros
                  </Link>
              </li>

              <li className='nav__item'>
                  <Link className='nav__link' to="/Contacto">
                      Contacto
                  </Link>
              </li>
          </ul>

        </div>
      </nav>

    </header>
  )
}

export default Header