import React from 'react'
import { Link } from 'react-router-dom'
import { headerMenus } from '../../data/header'

const Header = () => {

    return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <Link to='/'>
                    <span>coffeemenu</span>
                </Link>
            </h1>
            <nav className='header__menu'>
                <ul className='menu container'>
                    {headerMenus.map((menu, key) => (
                        <li key={key}>
                            <Link to={menu.src}>
                                <input type="checkbox" className="check__icon"></input>
                                <span className="indicator"></span>
                                <span>{menu.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header
