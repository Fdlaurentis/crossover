import style from './Beginning.module.css';

const Beginning = () => {
    return (
        <>
            <h1 className={style.title}>Objetivos</h1>
            <div className={`${style.beginning} block`}>
                <div className={`${style.mision} ${style.container}`}>
                    <img src="https://i.ibb.co/xDR6cCw/mision.png" />
                    <span>Misión</span>
                </div>

                <div className={`${style.vision} ${style.container}`}>
                    <img src="https://i.ibb.co/ZY056ZN/vision.png" />
                    <span>Visión</span>
                </div>

                <div className={`${style.valores} ${style.container}`}>
                    <img src="https://i.ibb.co/12WZGjx/valores.png" />
                    <span>Valores</span>
                </div>
            </div>
        </>
    );
};

export default Beginning;
