import style from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={style.navbar}>
            <img src="https://i.ibb.co/Kqt5n5c/Logo.png" alt="Logo" />
            <i className={`fa-solid fa-bars ${style.menuHamb}`}></i>
            <div className={style.menu}>
                <ul>
                    <li>Historia</li>
                    <li>Sedes</li>
                    <li>Programas</li>
                    <li>Contacto</li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
