import React, { useState } from 'react';
import Logo2 from './Logo2';
import Cart from './Cart';

export const Header = ({
  todos_articulos,
  settodos_articulos,
  total,
  cant_articulos,
  setcant_articulos,
  setTotal,
}) => {
  const [visible, cambiar_visibilidad] = useState(false);

  const borrar_articulo = (product) => {
    const results = todos_articulos.filter((item) => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setcant_articulos(cant_articulos - product.quantity);
    settodos_articulos(results);
  };

  const limpiar_articulo_carrito = () => {
    settodos_articulos([]);
    setTotal(0);
    setcant_articulos(0);
  };

  const aumentar_cantidad = (product) => {
    const products = todos_articulos.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    settodos_articulos([...products]);
    setTotal(total + product.price);
    setcant_articulos(cant_articulos + 1);
  };

  const disminuir_cantidad = (product) => {
    if (product.quantity === 1) {
      borrar_articulo(product);
    } else {
      const products = todos_articulos.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      settodos_articulos([...products]);
      setTotal(total - product.price);
      setcant_articulos(cant_articulos - 1);
    }
  };

  return (
    <header>
      <div className="logo2">
        <Logo2 />
      </div>
      <div className="desplazar">
        <nav>
          <ul>
            <li>
              <a href="../pages/VistaPrincipal">Home</a>
            </li>
            <li>
              <a href="https://www.instagram.com/tijerasdetriana/?hl=es">Sobre nosotros</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container-icon">
        <div className="container-cart-icon" onClick={() => cambiar_visibilidad(!visible)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon-cart"
            style={{ marginRight: '80px', marginTop: '50px' }}
          >
            <path d="M1 1h4l2.68 13.397a2 2 0 002 1.603h8.644a2 2 0 002-1.603L23 5H6" />
            <circle cx="10.5" cy="18.5" r="1.5" />
            <circle cx="18.5" cy="18.5" r="1.5" />
          </svg>
          <div className="count-products">
            <span id="contador-productos">{cant_articulos}</span>
          </div>
        </div>
        <Cart
          todos_articulos={todos_articulos}
          total={total}
          cant_articulos={cant_articulos}
          borrar_articulo={borrar_articulo}
          limpiar_articulo_carrito={limpiar_articulo_carrito}
          cambiar_visibilidad={cambiar_visibilidad}
          aumentar_cantidad={aumentar_cantidad}
          disminuir_cantidad={disminuir_cantidad}
          visible={visible}
        />
      </div>
    </header>
  );
};
