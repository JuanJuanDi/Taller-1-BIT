//Utilizar los operadores lógicos para verificar si un número ingresado por el usuario es mayor que 10 y menor que 20, y mostrar el resultado con alert.

// Pedir al usuario que ingrese un número usando prompt
var numero = prompt("Por favor, ingresa un número:");

// Convertir la entrada del usuario a un número
numero = parseFloat(numero);

// Verificar si el número ingresado es mayor que 10 y menor que 20
if (numero > 10 && numero < 20) {
    // Si el número cumple ambas condiciones, mostrar un mensaje indicando que está dentro del rango
    alert("El número ingresado está entre 10 y 20.");
} else {
    // Si el número no cumple ambas condiciones, mostrar un mensaje indicando que está fuera del rango
    alert("El número ingresado no está entre 10 y 20.");
}