import style from './Footer.module.css';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.image}>
                <img
                    src="https://i.ibb.co/DDGHTNM/logo-crossover-footer.png"
                    alt="logo-crossover-footer"
                />
                <span>Academy</span>
            </div>
            <div className={style.redes}>
                <span>Síguenos</span>
                <div className={style.iconos}>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-whatsapp"></i>
                    <i class="fa-brands fa-tiktok"></i>
                </div>
            </div>
        </div>
    );
};

export default Footer;
