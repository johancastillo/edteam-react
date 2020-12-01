import React from 'react';
import './styles/styles.scss';

import Card from './components/Card';

const App = () => (
    <>
        <div class="main-banner img-container l-section" id="main-banner">
            <div class="ed-grid lg-grid-6">
                <div class="lg-cols-4 lg-x-2">
                    <img class="main-banner__img" src="https://manchainformacion.es/system/previews/91894/original/por-que-el-mejor-estudiante-de-la-clase-nunca-se-hace-rico.jpg" />
                    <div class="main-banner__data s-center">
                        <p class="t2 s-mb-0">Título del banner</p>
                        <p> Subtítulo del banner</p>
                        <a href="#" class="button">Botón del banner</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="ed-grid m-grid-3">
            <Card />
            <Card />
            <Card />
        </div>


    </>
);

export default App;

// Reglas JSX
// 1. Toda etiqueta debe cerrarse.
// 2. Los componentes deben retornar un solo elemento padre.
// 3. Apoyarse de los Fragments cuando necesitemos retornar 2 elementos.
// 4. <Fragment> </Fragment> => <> </>
// 5. <img> siempre se cierran.
// 6. class de CSS pasa a ser className
// 7. for => htmlFor