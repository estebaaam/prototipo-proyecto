async function signIn (event) {
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    const direccion = document.getElementById('direccion').value;
    const identificacion = document.getElementById('identificacion').value;
    const password = document.getElementById('password').value;

    const nuevoUsuario = {
        id_usuario: Date.now(), 
        nombre: nombre,
        telefono: telefono,
        correo: correo,
        direccion: direccion,
        identificacion: identificacion,
        password: password,
        id_rol: 2 
    };

    try {
        const response = await fetch('https://api.jsonbin.io/v3/b/670c0ae3e41b4d34e4420857', {
            method: 'GET',
            headers: {
                'X-Master-Key': '$2a$10$L87v9IJk0dYn8nK.eHq48ue86EfP4loYxLYKKljijSH6MdNsyVO/K',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('No se pudo obtener la lista de usuarios');
        }

        const data = await response.json();
        const usuarios = data.record.record.usuario;

        const user = usuarios.find(user => user.correo === correo);

        if(user){
            alert('ya existe una cuenta con ese corre electronico')
        }else {
            localStorage.setItem('userName',nuevoUsuario.nombre);
            usuarios.push(nuevoUsuario);
            const updateResponse = await fetch('https://api.jsonbin.io/v3/b/670c0ae3e41b4d34e4420857', {
                method: 'PUT',
                headers: {
                    'X-Master-Key': '$2a$10$L87v9IJk0dYn8nK.eHq48ue86EfP4loYxLYKKljijSH6MdNsyVO/K',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ record: { usuario: usuarios } })
            });

            const responseProductos = await fetch('https://api.jsonbin.io/v3/b/66ff0863ad19ca34f8b243e9');
            const dataProductos = await responseProductos.json();
            const productos = dataProductos.record.productos;

            localStorage.setItem('productos',JSON.stringify(productos));
    
            if (!updateResponse.ok) {
                throw new Error('Error al guardar el usuario');
            }
    
            window.location.href = "index.html";      
        }
        

    } catch (error) {
        console.error('Hubo un problema con el registro:', error);
        alert('Hubo un error al registrar tu cuenta. Por favor, intenta de nuevo.');
    }
}