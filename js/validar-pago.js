const confirmarPago = (e) =>{
  e.preventDefault();

  let userName = document.getElementById('userName').value;
  let userPhone = document.getElementById('userPhone').value;
  let userAddress = document.getElementById('userAddress').value;
  let idProducto = localStorage.getItem('producto');
    fetch('https://api.jsonbin.io/v3/b/66ff0863ad19ca34f8b243e9')
  .then(Response => Response.json())
  .then(data =>{
    let productos = data.record.productos;
    const productoSeleccionado = productos.find(producto => producto.id == idProducto);
    let productPrice = productoSeleccionado.precio;
    let productName = productoSeleccionado.nombre;

    let datos_pedido = [productName,userName,userPhone,userAddress,productPrice];

    localStorage.setItem('pedido',JSON.stringify(datos_pedido));

    alert('su pedido se ah realizado correctamente')

    document.getElementById('userName').value = "";
    document.getElementById('userPhone').value = "";
    document.getElementById('userAddress').value = "";

  })
}

let idProducto = localStorage.getItem('producto');
    fetch('https://api.jsonbin.io/v3/b/66ff0863ad19ca34f8b243e9')
  .then(Response => Response.json())
  .then(data =>{
    let productos = data.record.productos;
    const productoSeleccionado = productos.find(producto => producto.id == idProducto);
    let productPrice = productoSeleccionado.precio;
    let productName = productoSeleccionado.nombre;

    document.getElementById('productName').innerHTML = productName;
    document.getElementById('productPrice').innerHTML = `Total: $${productPrice}`;

  })