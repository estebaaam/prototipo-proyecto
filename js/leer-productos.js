const idProducto = localStorage.getItem('producto');

if(idProducto){
  fetch('https://api.jsonbin.io/v3/b/66ff0863ad19ca34f8b243e9')
  .then(Response => Response.json())
  .then(data => {
    const productos = data.record.productos;

    const productoSeleccionado = productos.find(producto => producto.id == idProducto);

    if (productoSeleccionado) {
      document.getElementById('product-name').innerHTML = productoSeleccionado.nombre;
      document.getElementById('price').innerHTML = `$${productoSeleccionado.precio}`;
      document.getElementById('description').innerHTML = productoSeleccionado.descripcion;
      document.getElementById('product-img').src = productoSeleccionado.imagen;

      const stockText = productoSeleccionado.en_stock ? "En stock" : "Agotado";
      document.getElementById('stock').innerHTML = stockText;
    } else {
      console.error("Producto no encontrado");
    }
  })
  .catch(error => {
    console.error('Error al cargar los datos del JSON:', error);
  });
} else {
window.location.href = "tienda.html";
}

const addToCart = () => {
  let cartState = document.getElementById('add-to-cart-btn').innerHTML;
  let cartCounter = parseInt(localStorage.getItem('cartCounterStorage'));
  if(cartCounter >= 0){
    if(cartState === 'Añadir al Carrito'){
      document.getElementById('add-to-cart-btn').innerHTML = 'Quitar del carrito';
      cartCounter++;
      localStorage.setItem('cartCounterStorage',cartCounter);
      cartCounter = parseInt(localStorage.getItem('cartCounterStorage'));
      document.getElementById('cart-counter').innerHTML = cartCounter;
    }else{
      document.getElementById('add-to-cart-btn').innerHTML = 'Añadir al Carrito';
      cartCounter--;
      localStorage.setItem('cartCounterStorage',cartCounter);
      cartCounter = parseInt(localStorage.getItem('cartCounterStorage'));
      document.getElementById('cart-counter').innerHTML = cartCounter;
    }
  }else {
    alert('el carrito esta vacio')
  }
}
