import React from 'react';
import productListData from '../assets/data.json'; 
import Button from './Button';
export const ProductList = ({
  todos_articulos,
  settodos_articulos,
  cant_articulos,
  setcant_articulos,
  total,
  setTotal,
}) => {
  const onAddProduct = (product) => {
    if (todos_articulos.find((item) => item.id === product.id)) {
      const products = todos_articulos.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price);
      setcant_articulos(cant_articulos + 1);
      settodos_articulos([...products]);
    } else {
      setTotal(total + product.price);
      setcant_articulos(cant_articulos + 1);
      settodos_articulos([...todos_articulos, { ...product, quantity: 1 }]);
      alert("Producto añadido a la cesta");
    }
  };

  return (
    <div className="container-items">
      {productListData.map((product) => ( 
        <div className="item" key={product.id}>
          <figure>
            <img src={product.img} alt={product.nameProduct} />
          </figure>
          <div className="info-product">
            <h2>{product.nameProduct}</h2>
            <p className="price">{product.price}€</p>
            <Button onClick={() => onAddProduct(product)} text="Añadir a la cesta" />
          </div>
        </div>
      ))}
    </div>
  );
};
