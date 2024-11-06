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
                    <a href="https://www.facebook.com/profile.php?id=100063685296350">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/crossoveracademy/">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.tiktok.com/@crossoveracademy">
                        <i class="fa-brands fa-tiktok"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
