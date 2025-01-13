import style from './Beginning.module.css';

const Beginning = () => {
    return (
        <>
            <h1 className={style.title}>Código de Ética</h1>
            <div className={`${style.beginning} block`}>
                <div className={`${style.mision} ${style.container}`}>
                    <img src="https://i.ibb.co/9HVmsgJ/Mision.png" />
                    <span>Misión</span>
                </div>

                <div className={`${style.vision} ${style.container}`}>
                    <img src="https://i.ibb.co/m6bB4yh/vision.png" />
                    <span>Visión</span>
                </div>

                <div className={`${style.valores} ${style.container}`}>
                    <img src="https://i.ibb.co/vX88MBw/valores.png" />
                    <span>Valores</span>
                </div>
            </div>
        </>
    );
};

export default Beginning;
