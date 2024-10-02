const leerDatosUsuario = () => {
 
  fetch('https://api.jsonbin.io/v3/b/66fccee2ad19ca34f8b14f91')
      .then(response => response.json())
      .then(data => {

        const user = data.record;

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
};