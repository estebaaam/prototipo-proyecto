const addToCart = () => {
  if (!localStorage.getItem('userName')) {
    alert('debe iniciar sesion para poder añadir al carrito')
    window.location.href = "../html/log-in.html";
  } else {
    let cartCounter = parseInt(localStorage.getItem('cartCounter'));
    let cantidadSeleccionada = parseInt(document.getElementById('quantity').value);
    cartCounter += cantidadSeleccionada;
    localStorage.setItem('cartCounter', cartCounter);
    document.getElementById('cart-counter').innerHTML = cartCounter;
    document.querySelector('.added-to-cart').innerHTML = 'añadido';
    setTimeout(() => {
      document.querySelector('.added-to-cart').innerHTML = '';
    }, 2000);
  }
}

const addToCartFromStore = (idProducto) => {
  if (!localStorage.getItem('userName')) {
    window.location.href = "../html/log-in.html";
  } else {
    let listaIdProductos = JSON.parse(localStorage.getItem('listaIdProductos')) || [];
    let contadorProductos = JSON.parse(localStorage.getItem('contadorProductos')) || {};

    if (!listaIdProductos.includes(idProducto)) {
      listaIdProductos.push(idProducto);
    }

    if (contadorProductos[idProducto]) {
      contadorProductos[idProducto] += 1;
    } else {
      contadorProductos[idProducto] = 1;
    }

    localStorage.setItem('listaIdProductos', JSON.stringify(listaIdProductos));
    localStorage.setItem('contadorProductos', JSON.stringify(contadorProductos));

    let cartCounter = 0;

    for (let idProducto in contadorProductos) {
      cartCounter += contadorProductos[idProducto];
    }

    localStorage.setItem('cartCounter', cartCounter);

    document.getElementById('cart-counter').innerHTML = cartCounter;

    document.querySelector(`.added-to-cart${idProducto}`).innerHTML = 'añadido';
    setTimeout(() => {
      document.querySelector(`.added-to-cart${idProducto}`).innerHTML = '';
    }, 2000);
  }
};
