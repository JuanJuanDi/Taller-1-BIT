//Pedir al usuario que confirme si desea realizar una acción utilizando confirm, y mostrar un mensaje según su respuesta.

// Pedir al usuario que confirme si desea realizar una acción utilizando confirm
var confirmacion = confirm("¿Estás seguro de que deseas realizar esta acción?");

// Verificar la respuesta del usuario
if (confirmacion) {
    // Si el usuario confirma, mostrar un mensaje indicando que la acción será realizada
    alert("La acción será realizada.");
} else {
    // Si el usuario cancela, mostrar un mensaje indicando que la acción ha sido cancelada
    alert("La acción ha sido cancelada.");
}
