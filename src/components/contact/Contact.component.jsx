import { useState } from 'react';
import style from './Contact.module.css';

const Contact = () => {
    const [validateName, setValidateName] = useState();
    return (
        <div className={style.contact}>
            <h1 className={style.title}>Completa nuestro formulario</h1>
            <form>
                <div className={style.input}>
                    <input
                        type="text"
                        className={style.textInput}
                        onChange={(e) => setValidateName(e.target.value)}
                        value={validateName}
                    />
                    <i className="fa-solid fa-user"></i>
                    <span
                        className={
                            validateName ? style.spanValited : style.span
                        }
                    >
                        Nombre
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
