import React from 'react';
import './styles/styles.scss';

import Card from './components/Card';

const App = () => (
    <>
        <div class="main-banner img-container l-section" id="main-banner">
            <div class="ed-grid lg-grid-6">
                <div class="lg-cols-4 lg-x-2">
                    <img class="main-banner__img" src="https://manchainformacion.es/system/previews/91894/original/por-que-el-mejor-estudiante-de-la-clase-nunca-se-hace-rico.jpg" alt="" />
                    <div class="main-banner__data s-center">
                        <p class="t2 s-mb-0">Título del banner</p>
                        <p> Subtítulo del banner</p>
                        <a href="#" class="button">Botón del banner</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="ed-grid m-grid-3">
            <Card 
                title="React desde cero"
                image="https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg"
                price="20usd"
                teacher="Johan Castillo"
                imageTeacher="https://edteam-media.s3.amazonaws.com/users/thumbnail/36ee2910-a392-46f3-8303-937dc3055c91.jpg"
            />

            <Card 
                title="Big Data"
                image="https://edteam-media.s3.amazonaws.com/courses/medium/3241c8d2-386b-400c-80ce-6d3d2d4f3c02.png"
                price="10usd"
                teacher="Keymar Pérez"
                imageTeacher="https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-1/c76.0.100.100a/p100x100/86822032_2575776845864723_3849292038776291328_n.jpg?_nc_cat=108&ccb=2&_nc_sid=dbb9e7&_nc_ohc=55Mg3NIJD9UAX-fsevh&_nc_ht=scontent-mia3-1.xx&tp=27&oh=82f281e3dfdad54d8112e82b63c002f7&oe=5FEEC626"
            />

            <Card 
                title="Python desde cero"
                image="https://edteam-media.s3.amazonaws.com/courses/medium/85d3d7e4-19db-4cff-a4cb-cbead813b6b5.png"
                price="40usd"
                teacher="Johan Castillo"
                imageTeacher="https://edteam-media.s3.amazonaws.com/users/thumbnail/36ee2910-a392-46f3-8303-937dc3055c91.jpg"
            />

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