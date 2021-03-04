import React, {useContext, useEffect} from 'react'
import { NavLink, useHistory, } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import M from "materialize-css/dist/js/materialize.min.js";

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    useEffect(() => {
        let sidenav = document.querySelector("#slide-out");
        M.Sidenav.init(sidenav, {});
    }, [])

    return (
        // <nav>
        //     <div class="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }}>
        //     <a href="/" class="brand-logo">Обмен рецептами</a>
        //     <ul id="nav-mobile" class="right hide-on-med-and-down">
        //         <li><NavLink to="/create">Создать</NavLink></li>
        //         <li><NavLink to="/links">Sass</NavLink></li>
        //         <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
        //     </ul>
        //     </div>
        // </nav>
        <div>
        <nav className='nav z-depth-0'>
          <div className='nav-wrapper'>
            <span className='brand-logo purple-text text-darken-4 ml-0'>
              ВКУСНОТИЩА
            </span>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
                <NavLink
                    to="/myrecipes/"
                    className='btn btn-nav transparent z-depth-0 purple-text text-darken-4'
                >
                    Мои рецепты
                </NavLink>
            </li> 
            <li>
                <NavLink
                    to="/create"
                    className='btn btn-nav transparent z-depth-0 purple-text text-darken-4'
                >
                    Добавить рецепт
                </NavLink>
            </li>
            <li>
                <a
                    href="/"
                    onClick={logoutHandler}
                    className='btn btn-nav transparent z-depth-0 white-text text-darken-4 purple darken-4'
                >
                    Выйти
                </a>
            </li>
            </ul>
            <a href='#menu' data-target='slide-out' className='sidenav-trigger'>
              <i className='purple-text text-darken-4 material-icons'>menu</i>
            </a>
          </div>
        </nav>
        <ul id='slide-out' className='sidenav'>
            <li>
                <NavLink
                    to="/myrecipes/"
                    className='btn btn-nav transparent z-depth-0 purple-text text-darken-4'
                >
                    Мои рецепты
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/create"
                    className='btn btn-nav transparent z-depth-0 purple-text text-darken-4'
                >
                    Добавить рецепт
                </NavLink>
            </li>
            <li>
                <a
                    href="/"
                    onClick={logoutHandler}
                    className='btn btn-nav transparent z-depth-0 white-text text-darken-4 purple darken-4'
                >
                    Выйти
                </a>
            </li>
        </ul>
      </div>
    )
}
