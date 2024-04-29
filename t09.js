// Utilizar console.log para imprimir mensajes de depuración durante la ejecución de un programa sencillo que realice alguna tarea específica.

// Definir la función para contar hasta un número específico
// function contarHasta(numero) {
//     Iniciar el contador en 1
//     let contador = 1;

//     Imprimir un mensaje de inicio de conteo
//     console.log("Iniciando conteo hasta el número " + numero + "...");

//     Iterar mientras el contador sea menor o igual que el número
//     while (contador <= numero) {
//         Imprimir el valor actual del contador
//         console.log("Contando: " + contador);

//         Incrementar el contador en 1
//         contador++;
//     }

//     Imprimir un mensaje al finalizar el conteo
//     console.log("Conteo completado.");
// }

// Llamar a la función para contar hasta el número 5
// contarHasta(5); 


//Teacher version

const nombreCompleto = prompt('Digita tu nombre completo');
const listaNombres = nombreCompleto.split( ' ' );
console.log(' tu nombre lo conforman ' + listaNombres.length + ' nombres');