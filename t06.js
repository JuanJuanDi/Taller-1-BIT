//Comparar la edad ingresada por el usuario con tu edad utilizando prompt y alert, y mostrar un mensaje indicando si son iguales o diferentes.

// Edad predefinida
const miEdad = 23;

// Pedir al usuario que ingrese su edad usando prompt
let edadUsuario = prompt("Por favor, ingresa tu edad:");

// Convertir la entrada del usuario a un nÃºmero entero
edadUsuario = parseInt(edadUsuario);

// Comparar la edad ingresada por el usuario con mi edad
if (edadUsuario === miEdad) 
    // Si son iguales, mostrar un mensaje indicando que son iguales
    alert("Tu edad y mi edad son iguales.");
else 
    // Si son diferentes, mostrar un mensaje indicando que son diferentes
    alert("Tu edad y mi edad son diferentes.");
