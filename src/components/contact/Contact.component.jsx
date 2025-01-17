import { useState } from 'react';
import style from './Contact.module.css';

const Contact = () => {
    const [validateName, setValidateName] = useState();
    const [validatePhone, setValidatePhone] = useState();
    const [validateAddress, setValidateAddress] = useState();
    const [validateSchool, setValidateSchool] = useState();

    const btnSubmir = (e) => {
        e.preventDefault();
        alert('Working');
    };

    return (
        <div className={style.contact}>
            <h1 className={style.title}>Completa nuestro formulario</h1>
            <form className={style.formulario} onSubmit={btnSubmir}>
                <div className={style.input}>
                    <input
                        type="text"
                        className={style.textInput}
                        onChange={(e) => setValidateName(e.target.value)}
                        value={validateName}
                    />
                    <i
                        className="fa-solid fa-user"
                        style={{ color: '#7d8b7c' }}
                    ></i>
                    <span
                        className={
                            validateName ? style.spanValited : style.span
                        }
                    >
                        Nombre
                    </span>
                </div>

                <div className={style.input}>
                    <input
                        type="text"
                        className={style.textInput}
                        onChange={(e) => setValidatePhone(e.target.value)}
                        value={validatePhone}
                    />
                    <i
                        className="fa-solid fa-phone"
                        style={{ color: '#7d8b7c' }}
                    ></i>
                    <span
                        className={
                            validatePhone ? style.spanValited : style.span
                        }
                    >
                        Telefono
                    </span>
                </div>

                <div className={style.input}>
                    <input
                        type="text"
                        className={style.textInput}
                        onChange={(e) => setValidateAddress(e.target.value)}
                        value={validateAddress}
                    />
                    <i
                        className="fa-solid fa-location-dot"
                        style={{ color: '#7d8b7c' }}
                    ></i>
                    <span
                        className={
                            validateAddress ? style.spanValited : style.span
                        }
                    >
                        Dirección
                    </span>
                </div>

                <div className={style.input}>
                    <input
                        type="text"
                        className={style.textInput}
                        onChange={(e) => setValidateSchool(e.target.value)}
                        value={validateSchool}
                    />
                    <i
                        className="fa-solid fa-school"
                        style={{ color: '#7d8b7c' }}
                    ></i>
                    <span
                        className={
                            validateSchool ? style.spanValited : style.span
                        }
                    >
                        Colegio
                    </span>
                </div>

                <button className="btnHome">Enviar</button>
            </form>
            <a href="https://wa.link/mf3yg1" className={style.linkContact}>
                <i
                    className="fa-brands fa-whatsapp"
                    style={{
                        fontWeight: 'bold',
                        fontSize: '30px',
                    }}
                ></i>
                <h2>Contactanos vía WhatsApp</h2>
            </a>
        </div>
    );
};

export default Contact;
