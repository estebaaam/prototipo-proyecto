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