import React, { useState } from 'react';
import { Header } from '../components/Header';
import { ProductList } from '../components/Lista_articulos';
import Footer from '../components/Footer';
import '../index.css'

function OtherPage({ onClick }) {
    const [todos_articulos, settodos_articulos] = useState([]);
    const [total, setTotal] = useState(0);
    const [cant_articulos, setcant_articulos] = useState(0);
    const handleClickAtras = () => {
        onClick();
    };
    return (
        <>
            <Header
                todos_articulos={todos_articulos}
                settodos_articulos={settodos_articulos}
                total={total}
                setTotal={setTotal}
                cant_articulos={cant_articulos}
                setcant_articulos={setcant_articulos}
            />
            <ProductList
                todos_articulos={todos_articulos}
                settodos_articulos={settodos_articulos}
                total={total}
                setTotal={setTotal}
                cant_articulos={cant_articulos}
                setcant_articulos={setcant_articulos}
            />
            <br /><br /><br />
            <div className='centrado'>
                <button className='boton-reservar' onClick={handleClickAtras}>Volver</button>
            </div>
            <br /><br />
            <Footer />
        </>
    );
}

export default OtherPage;
