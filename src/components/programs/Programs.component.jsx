import { useState } from 'react';
import style from './Programs.module.css';
import PopUp from '../popUp/PopUp.component';

const Programs = () => {
    const [popupPosition, setPopupPosition] = useState(null);

    return (
        <>
            <h1>Programas</h1>
            <div className={`${style.programs} block`}>
                <div className={`${style.school} ${style.containerProgram}`}>
                    <div className={`${style.contendorSpan}`}>
                        <span>Escuela Permanente</span>
                        <div
                            className={style.button}
                            onClick={() => setPopupPosition(0)}
                        >
                            Ver más
                        </div>
                        {popupPosition === 0 && (
                            <PopUp
                                setIsOpenPopup={setPopupPosition}
                                position={0}
                            />
                        )}
                    </div>
                    <img src="https://i.ibb.co/CbV4x3g/permanete.jpg" />
                </div>
                <div
                    className={`${style.competence} ${style.containerProgram}`}
                >
                    <div className={`${style.contendorSpan}`}>
                        <span>Club de Competencias</span>
                    </div>
                    <div
                        className={style.button}
                        onClick={() => setPopupPosition(1)}
                    >
                        Ver más
                    </div>
                    {popupPosition === 1 && (
                        <PopUp setIsOpenPopup={setPopupPosition} position={1} />
                    )}
                    <img src="https://i.ibb.co/mDPxbVp/competencia.jpg" />
                </div>
                <div className={`${style.office} ${style.containerProgram}`}>
                    <div className={`${style.contendorSpan}`}>
                        <span>After Office</span>
                    </div>
                    <div
                        className={style.button}
                        onClick={() => setPopupPosition(2)}
                    >
                        Ver más
                    </div>
                    {popupPosition === 2 && (
                        <PopUp setIsOpenPopup={setPopupPosition} position={2} />
                    )}
                    <img src="https://i.ibb.co/dfW89RR/office.jpg" />
                </div>
                <div className={`${style.summer} ${style.containerProgram}`}>
                    <div className={`${style.contendorSpan}`}>
                        <span>Summer Camp</span>
                        <div
                            className={style.button}
                            onClick={() => setPopupPosition(3)}
                        >
                            Ver más
                        </div>
                        {popupPosition === 3 && (
                            <PopUp
                                setIsOpenPopup={setPopupPosition}
                                position={3}
                            />
                        )}
                    </div>
                    <img src="https://i.ibb.co/m4WyFDr/Summer.jpg" />
                </div>
            </div>
        </>
    );
};

export default Programs;
