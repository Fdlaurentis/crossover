import style from './PopUp.module.css';
import jsonInf from '../../assets/info.json';
import { useNavigate } from 'react-router-dom';

const PopUp = ({ setIsOpenPopup, position }) => {
    const info = jsonInf.information[position];
    if (!info) return null; // Verifica que la información existe
    const navigate = useNavigate();

    return (
        <div onClick={() => setIsOpenPopup(null)} className={style.popUp}>
            {/* Content */}
            <div onClick={(e) => e.stopPropagation()} className={style.content}>
                {/* Header */}
                <div className={style.headerPopUp}>
                    <h1>{info.tittle}</h1>

                    <div
                        onClick={() => setIsOpenPopup(null)}
                        className={style.closePopUp}
                    >
                        <i
                            className="fa-solid fa-xmark"
                            style={{ color: 'black' }}
                        ></i>
                    </div>
                </div>

                {/*Images */}
                <div className={style.carrusel}>
                    {/*{info.images.map((img) => (*/}
                    <img src={info.images[position]} key={info.id} />
                    {/*}))}*/}
                </div>

                {/* Body */}
                <div>
                    <p>{info.body}</p>
                    <a
                        onClick={() => {
                            navigate('/sedes');
                        }}
                        className={style.label}
                    >
                        Conoce nuestras Sedes
                    </a>
                </div>
                {/* Footer */}
                <a href="https://wa.link/mf3yg1">
                    <footer
                        className={style.footerPopUp}
                        style={{ color: '#189d0e' }}
                    >
                        <i
                            className="fa-brands fa-whatsapp"
                            style={{ fontWeight: 'bold', fontSize: '30px' }}
                        ></i>
                        <h2>Contactanos</h2>
                    </footer>
                </a>
            </div>
        </div>
    );
};

export default PopUp;
