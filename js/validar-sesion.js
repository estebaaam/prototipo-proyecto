if (!localStorage.getItem('userName')) { 
  document.querySelector('.log-sign-buttons').innerHTML = `
  <a href="log-in.html"><button>Login</button></a>
  <a href="sign-in.html"><button>Sign In</button></a>
  `
}else {
  let userName = localStorage.getItem('userName');
  document.querySelector('.log-sign-buttons').innerHTML = `
  <p class="user-name">${userName}</p>
  <a href="informacion-personal.html"><img class="img-avatar" src="../img/icons/avatar.png"></a>
  `
  let cartCounter = localStorage.getItem('cartCounter');
  if(!cartCounter){
    localStorage.setItem('cartCounter',0)
    cartCounter = localStorage.getItem('cartCounter');
  }
  cartCounter = parseInt(cartCounter);
  document.getElementById('cart-counter').innerHTML = cartCounter;
}
const logout = () => {
  localStorage.removeItem('userName');
  localStorage.removeItem('idCarrito');
  window.location.href = "../html/tienda.html";
}

const validarIdProducto = (idProducto) => {
  localStorage.setItem('idProducto',idProducto)
}
