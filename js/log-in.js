
  const validarUsuario = (event) =>{

    event.preventDefault();
 
      const email = document.getElementById('correo').value;
      const password = document.getElementById('password').value;

      
      fetch('https://api.jsonbin.io/v3/b/66fcc56ee41b4d34e43b8b3f')
          .then(response => response.json())
          .then(data => {
            
            const users = data.record;

              const user = users.find(user => user.email === email && user.password === password);

              if (user) {

                localStorage.setItem('isLoggedIn', 'true');
                  
                  if (user.tipo === 'admin') {
                      window.location.href = "../html/dashboard.html";
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
