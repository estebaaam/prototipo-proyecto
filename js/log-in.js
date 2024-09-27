
  const validarUsuario = () =>{
 
      const email = document.getElementById('correo').value;
      const password = document.getElementById('password').value;

      
      fetch('../json/usuarios.json')
          .then(response => response.json())
          .then(users => {
             
              const user = users.find(user => user.email === email && user.password === password);

              if (user) {
                  
                  if (user.tipo === 'admin') {
                      window.location.href = "../html/TiendaAdmin.html";  
                  }
                  
                  else if (user.tipo === 'usuario') {
                      window.location.href = "../html/tienda.html";  
                  }
              } else {
                  
                  alert("Usuario o contraseña incorrectos");
              }
          })
          .catch(error => {
              console.error('Error al cargar los datos del JSON:', error);
          });
  }
