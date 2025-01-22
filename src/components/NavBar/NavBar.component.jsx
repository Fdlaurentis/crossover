import { useState } from 'react';
import style from './NavBar.module.css';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <header>
            <h1 className={style.schoolLogo}>Club Formativo de Basketball</h1>
            <img
                src="https://i.ibb.co/Kqt5n5c/Logo.png"
                alt="Logo"
                className={style.logo}
                onClick={() => {
                    navigate('/');
                }}
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
                    <li
                        onClick={() => {
                            navigate('/sedes');
                        }}
                    >
                        Sedes
                    </li>
                    <li
                        onClick={() => {
                            navigate('/programas');
                        }}
                    >
                        Programas
                    </li>
                    <li
                        onClick={() => {
                            navigate('/contacto');
                        }}
                    >
                        Contacto
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
