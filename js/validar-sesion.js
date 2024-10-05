if (!localStorage.getItem('isLoggedIn')) {
  window.location.href = "../html/log-in.html"; 
}
const logout = () => {
  localStorage.removeItem('isLoggedIn');
  window.location.href = "../html/log-in.html";
}

const validarId = (idProducto) => {
  localStorage.setItem('producto',idProducto)
}

let cartCounter = localStorage.getItem('cartCounterStorage');
if(!cartCounter){
  localStorage.setItem('cartCounterStorage',0);
  cartCounter = parseInt(localStorage.getItem('cartCounterStorage'));
}else{
  cartCounter = parseInt(cartCounter);
}
document.getElementById('cart-counter').innerHTML = cartCounter;