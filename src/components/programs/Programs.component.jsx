import { useState } from 'react';
import style from './Programs.module.css';
import PopUp from '../popUp/PopUp.component';

const Programs = () => {
    const [isOpenPopup, setIsOpenPopup] = useState(false);

    return (
        <>
            <h1>Programas</h1>
            <div className={`${style.programs} block`}>
                <div className={`${style.school} ${style.containerProgram}`}>
                    <div
                        className={`${style.contendorSpan}`}
                        onClick={setIsOpenPopup.bind(this, true)}
                    >
                        <span>Escuela Permanente</span>
                        {isOpenPopup && (
                            <PopUp setIsOpenPopup={setIsOpenPopup} />
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
                    <img src="https://i.ibb.co/mDPxbVp/competencia.jpg" />
                </div>
                <div className={`${style.office} ${style.containerProgram}`}>
                    <div className={`${style.contendorSpan}`}>
                        <span>After Office</span>
                    </div>
                    <img src="https://i.ibb.co/dfW89RR/office.jpg" />
                </div>
                <div className={`${style.summer} ${style.containerProgram}`}>
                    <div className={`${style.contendorSpan}`}>
                        <span>Summer Camp</span>
                    </div>
                    <img src="https://i.ibb.co/m4WyFDr/Summer.jpg" />
                </div>
            </div>
        </>
    );
};

export default Programs;
