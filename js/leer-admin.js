document.addEventListener('DOMContentLoaded', () => {
 
    fetch('../json/datos-admin.json')
        .then(response => response.json())
        .then(user => {
  
          document.getElementById('nombre').innerHTML = user.nombre;
          document.getElementById('telefono').innerHTML = user.telefono;
          document.getElementById('correo').innerHTML = user.correo;
          document.getElementById('direccion').innerHTML = user.direccion;
          document.getElementById('identificacion').innerHTML = user.identificacion;
          document.getElementById('password').innerHTML = user.password;
           
        })
        .catch(error => {
            console.error('Error al cargar los datos del JSON:', error);
          });
  });