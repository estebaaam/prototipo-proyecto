let pedido = localStorage.getItem('pedido');

if(pedido){
  pedido = JSON.parse(pedido)
  document.getElementById('Cliente').innerHTML = pedido[1];
  document.getElementById('Producto Comprado').innerHTML = pedido[0];
  document.getElementById('Precio Total').innerHTML = pedido[4];
  document.getElementById('Direccion').innerHTML = pedido[3];
  document.getElementById('Numero de telefono').innerHTML = pedido[2];
}
