import style from './Sedes.module.css';

const Sedes = () => {
    return (
        <>
            <h1>Sedes</h1>
            <div className={style.sedes}>
                <div className={style.contenedor}>
                    <h2>Sede Norte</h2>
                    <h4>
                        Dirección:
                        <span>
                            {' '}
                            Alianza Americana - Juan José Villalengua 789 y 10
                            de Agosto
                        </span>
                    </h4>
                    <h2>Sede Sur</h2>
                    <h4>
                        Dirección:
                        <span> Parque el Calzado</span>
                    </h4>
                    <h2>Sede Valle de los Chillos</h2>
                    <h4>
                        Dirección:
                        <span>
                            {' '}
                            La Armenia 2 a 200 metros del ingreso al parque
                            ecologico de la Armenia
                        </span>
                    </h4>
                </div>
            </div>
        </>
    );
};

export default Sedes;
