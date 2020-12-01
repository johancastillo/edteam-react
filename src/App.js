import React from 'react';
import './styles/styles.scss';

const App = () => (
    <>
        <h1 className="text-center">Hola mundo</h1>
        <p className="text-center">Desde el componente App</p>
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