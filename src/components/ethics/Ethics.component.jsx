import { useState } from 'react';
import style from './Ethics.module.css';
import PopUp from '../popUp/PopUp.component';

const Ethics = () => {
    const [popupPosition, setPopupPosition] = useState(null);

    return (
        <>
            <h1 className={style.title}>Código de Ética</h1>
            <div className={`${style.ethics} block`}>
                <div
                    className={`${style.mision} ${style.container}`}
                    onClick={() => setPopupPosition(4)}
                >
                    <img src="https://i.ibb.co/9HVmsgJ/Mision.png" />
                    <span>Misión</span>
                    {popupPosition === 4 && (
                        <PopUp setIsOpenPopup={setPopupPosition} position={4} />
                    )}
                </div>

                <div
                    className={`${style.vision} ${style.container}`}
                    onClick={() => setPopupPosition(5)}
                >
                    <img src="https://i.ibb.co/m6bB4yh/vision.png" />
                    <span>Visión</span>
                    {popupPosition === 5 && (
                        <PopUp setIsOpenPopup={setPopupPosition} position={5} />
                    )}
                </div>

                <div
                    className={`${style.valores} ${style.container}`}
                    onClick={() => setPopupPosition(6)}
                >
                    <img src="https://i.ibb.co/vX88MBw/valores.png" />
                    <span>Valores</span>
                    {popupPosition === 6 && (
                        <PopUp setIsOpenPopup={setPopupPosition} position={6} />
                    )}
                </div>
            </div>
        </>
    );
};

export default Ethics;
