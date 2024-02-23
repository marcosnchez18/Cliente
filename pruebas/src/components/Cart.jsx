import React from 'react';

const Cart = ({
    todos_articulos,
    total,
    cant_articulos,
    borrar_articulo,
    limpiar_articulo_carrito,
    cambiar_visibilidad,
    aumentar_cantidad,
    disminuir_cantidad,
    visible,
}) => {
    return (
        <div className={`contenedor-carrito-articulos ${visible ? '' : 'hidden-cart'}`}>
            <h2 className='cess'>Cesta de la compra</h2>
            <hr />
            {todos_articulos.length ? (
                <>
                    <div className='row-product'>
                        {todos_articulos.map(product => (
                            <div className='cart-product' key={product.id}>
                                <div className='info-cart-product'>
                                <img className='imagen-articulo-carrito' src={product.img} alt={product.nameProduct} />
                                    <div className="quantity-controls">
                                        <button className="quantity-button" onClick={() => aumentar_cantidad(product)}>+</button>
                                        <button className="quantity-button" onClick={() => disminuir_cantidad(product)}>-</button>
                                    </div>
                                    <span className='cantidad-articulo-carrito'>
                                        {product.quantity}
                                    </span>
                                    <p className='titulo-articulo-carrito'>
                                        {product.nameProduct}
                                    </p>
                                    <span className='precio-articulo-carrito'>
                                        {product.price}€
                                    </span>
                                </div>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    className='icon-close'
                                    onClick={() => borrar_articulo(product)}
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                </svg>
                            </div>
                        ))}
                    </div>

                    <div className='cart-total'>
                        <h3>Total:</h3>
                        <span className='total-pagar'>{total.toFixed(2)}€</span>
                    </div>

                    <button className='btn-clear-all' onClick={limpiar_articulo_carrito}>
                        Vaciar Carrito
                    </button>

                    <button className='btn-clear-all2'>Ir al pago</button>

                </>
            ) : (
                <div className='cart-empty'>
                    <p>El carrito está vacío</p>
                    <button className='close-btn' onClick={() => cambiar_visibilidad(false)}>X</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
