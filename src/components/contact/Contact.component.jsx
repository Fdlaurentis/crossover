import style from './Contact.module.css';

const Contact = ({ setIsOpenPopup }) => {
    return (
        <div className={style.popUp}>
            {/* Content */}
            <div onClick={(e) => e.stopPropagation()} className={style.content}>
                {/* Header */}
                <div className={style.headerPopUp}>Header</div>
                {/* Body */}
                <div>Body</div>
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

export default Contact;
