document.addEventListener("DOMContentLoaded", function () {
    // Espero que se cargue el dom


    document.getElementById("submit").addEventListener("click", function () {
        //Chequeamo email
        let inputemail = document.getElementById("inputE").innerText
        var emailSucceeded = false;
        if (inputemail == "" || inputemail.includes(" ")) {
            event.preventDefault(); // Prevengo enviar
            //muestro error
            alert("Porfavor ingrese un mail valido");
        } else {
            emailSucceeded = true;

        }

        // Chequeamo password
        let password = document.getElementById("inputPass").innerText
        if (password.length > 8 && password.length < 12 && !password.includes(" ") && emailSucceeded) {
            //success
            alert("Muy bien, enviado correctamente!")
        } else if (!emailSucceeded) { // Fallo alguna de mis validaciones de contraseña
            //fail
            alert("Porfavor ingrese una contraseña valida");
        }
    });


});



