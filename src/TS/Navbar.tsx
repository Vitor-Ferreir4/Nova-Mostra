import React, { useState } from 'react';
import Logo from '../MÍDIA/LOGO.svg';
import '../CSS/nav.css';
import Carro from '../MÍDIA/carro.svg'
import Perfil from '../MÍDIA/perfil.png'
import Lua from '../MÍDIA/moon.svg'

function Nav() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      document.body.classList.toggle('dark-mode');
    };
    return (
        <div className="geralzao">
            <nav className="nav">
                <ul className="nav-itens">
                    <img src={Logo} alt="Logo" />
                    <li className="nav-links">Home</li>
                    <li className="nav-links">Exposições</li>
                    <li className="nav-links">Sobre</li>
                    <li className="nav-links">Comunidade</li>
                </ul>
                <div className='perfil-carro'>
                    <img src={Carro} alt="carro" width={40} />
                    <img src={Perfil} alt="perfil" width={40} />
                </div>
                <button onClick={toggleDarkMode} className='lua-botao'>
                    <img src={Lua} alt='Lua' className='Lua' width={40}/>
                </button>
            </nav>
        </div>
    );
}

export default Nav;