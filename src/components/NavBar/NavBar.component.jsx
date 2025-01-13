import { useState } from 'react';
import style from './NavBar.module.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header>
            <img
                src="https://i.ibb.co/Kqt5n5c/Logo.png"
                alt="Logo"
                className={style.logo}
            />
            {/* <i
                className={`fa-solid fa-bars ${style.abriMenu}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {' '}
            </i> */}
            <nav className={!isOpen ? style.nav : style.isOpen}>
                {/* <i
                    className={`fa-solid fa-xmark ${style.cerrarMenu}`}
                    onClick={() => setIsOpen(!isOpen)}
                ></i> */}
                <ul className={style.navList}>
                    <li>Historia</li>
                    <li>Sedes</li>
                    <li>Programas</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
