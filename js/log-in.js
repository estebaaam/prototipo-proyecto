async function logIn (event) {
    event.preventDefault();
    const email = document.getElementById('correo').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://api.jsonbin.io/v3/b/670c0ae3e41b4d34e4420857');
        const data = await response.json();
        const users = data.record.record.usuario;
        const user = users.find(user => user.correo === email && user.password === password);

        if (user) {
            const rol =user.id_rol;
            localStorage.setItem('userName', user.nombre);
            if (rol === 1) {
                window.location.href = "../html/dashboard.html";
            } else if (rol === 2) {
                window.location.href = "../html/tienda.html";
            }
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    } catch (error) {
        console.error('Error al cargar los datos del JSON:', error);
        return null;
    }
}