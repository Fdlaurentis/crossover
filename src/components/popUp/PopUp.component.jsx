import style from './PopUp.module.css';
import icon from '../../assets/icon.png';

const PopUp = ({ setIsOpenPopup }) => {
    return (
        <div onClick={setIsOpenPopup.bind(this, false)} className={style.popUp}>
            {/* Content */}
            <div onClick={(e) => e.stopPropagation()} className={style.content}>
                {/* Header */}
                <div className={style.headerPopUp}>
                    <h1>Escuela Permanente</h1>
                    <div
                        onClick={setIsOpenPopup.bind(this, false)}
                        className={style.closePopUp}
                    >
                        <i
                            class="fa-solid fa-xmark"
                            style={{ color: 'black' }}
                        ></i>
                    </div>
                </div>
                {/* Body */}
                <div>
                    <p>
                        Desarrollamos integralmente a niños y jóvenes tanto en
                        el ámbito deportivo como en el personal, fomentando
                        habilidades técnicas, tácticas y físicas propias del
                        baloncesto, al mismo tiempo que se promueven valores
                        como la disciplina, el trabajo en equipo, la
                        responsabilidad, el respecto y la perseverancia.
                    </p>
                </div>
                {/* Footer */}
                <a href="https://wa.link/mf3yg1">
                    <footer className={style.footerPopUp}>
                        <img
                            src={icon}
                            style={{ width: '35px', height: '35px' }}
                        />
                        <h2 style={{ color: '#189d0e' }}>Contactanos</h2>
                    </footer>
                </a>
            </div>
        </div>
    );
};

export default PopUp;
