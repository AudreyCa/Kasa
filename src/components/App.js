import React from "react";
import logoKasa from './../assets/logo.svg';
import logoKasaWhite from './../assets/logo-noiretblanc.png';
import '../styles/App.scss';
import { NavLink, Outlet } from 'react-router-dom';


function App() {
    return <>
        <div className="App">
            <header>
                <img src={logoKasa} className="logo-header" alt="logo de Kasa" />
                <nav>
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/apropos">A propos</NavLink>
                </nav>
            </header>
            <section className="bodyApp">
                <Outlet />
            </section>
            <footer>
                <img src={logoKasaWhite} className="logo-header" alt="logo de Kasa" />
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        </div>
    </>
}

export default App;