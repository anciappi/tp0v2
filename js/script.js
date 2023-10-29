function validateAge() {
    var age = document.getElementById("age").value;
    var message = document.getElementById("message");

    if (age >= 18) {
        message.innerHTML = "¡Bienvenido!";
    } else {
        message.innerHTML = "Debes ser mayor de 18 años para acceder.";
    }

    return false; // Esto evita que el formulario se envíe
}