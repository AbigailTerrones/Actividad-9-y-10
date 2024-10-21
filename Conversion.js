function convertirABinario() {
    // Obtener el número ingresado por el usuario
    let numeroDecimal = document.getElementById("numeroDecimal").value;

    // Verificar si el número ingresado es válido
    if (isNaN(numeroDecimal) || numeroDecimal === "") {
        document.getElementById("resultado").innerHTML = "Por favor ingresa un número válido.";
    } else {
        // Convertir el número a binario
        let resultadoBinario = parseInt(numeroDecimal).toString(2);

        // Mostrar el resultado en el div con id "resultado"
        document.getElementById("resultado").innerHTML = "El número decimal " + numeroDecimal + " en binario es: " + resultadoBinario;
    }
}