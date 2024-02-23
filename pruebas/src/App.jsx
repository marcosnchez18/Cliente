import React, { useState } from 'react';
import VistaPrincipal from './pages/HomePage';
import OtraVista from './pages/OtherPage';

function App() {
    const [mostrarVistaPrincipal, setMostrarVistaPrincipal] = useState(true);

    const cambiarVista = () => {
        setMostrarVistaPrincipal(!mostrarVistaPrincipal);
    };

    return (
        <div className="App">
            {mostrarVistaPrincipal ? (
                <VistaPrincipal onClick={cambiarVista} />
            ) : (
                <OtraVista onClick={cambiarVista} />
            )}
        </div>
    );
}

export default App;
