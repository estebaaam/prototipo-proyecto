async function logIn (event) {
    event.preventDefault();
    const email = document.getElementById('correo').value;
    const password = document.getElementById('password').value;

    try {
        const responseUsers = await fetch('https://api.jsonbin.io/v3/b/670c0ae3e41b4d34e4420857');
        const dataUsers = await responseUsers.json();
        const users = dataUsers.record.record.usuario;
        const user = users.find(user => user.correo === email && user.password === password);

        const responseProductos = await fetch('https://api.jsonbin.io/v3/b/66ff0863ad19ca34f8b243e9');
        const dataProductos = await responseProductos.json();
        const productos = dataProductos.record.productos;

        localStorage.setItem('productos',JSON.stringify(productos));

        if (user) {
            const rol =user.id_rol;
            localStorage.setItem('userName', user.nombre);
            if (rol === 1) {
                window.location.href = "../dashboard.html";
            } else if (rol === 2) {
                window.location.href = "../index.html";
            }
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    } catch (error) {
        console.error('Error al cargar los datos del JSON:', error);
        return null;
    }
}