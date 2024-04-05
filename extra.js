const leer = require("prompt-sync")();

function juego() {
    let numSecreto = 0;
    let numIntento = 0;
    let intento = 0;
    let intentoUsuario = 0;
    const MIN_PERMITIDO = 3;
    console.log("Cuántos intentos quieres tener? - (0) para salir");
    intentoUsuario = Number(leer());
    if (intentoUsuario == 0) {
        console.log("juego terminado")
    } else if (intentoUsuario >= MIN_PERMITIDO) {
        numSecreto = (Math.floor(Math.random()) + 1 * intentoUsuario * 2)

        for (intento = 1; intento <= intentoUsuario; intento++) {
            console.log("Cuál es el número secreto?");
            numIntento = Number(leer());
            if (numIntento == numSecreto) {
                console.log("Adivinaste el número secreto!");
                intento = intentoUsuario;
            } else if (numIntento != numSecreto) {
                console.log("No lograste adivinar.");
                if (intento == intentoUsuario)
                    console.log("El número secreto era", numSecreto);
            }
        }
    } else {
        console.log("el mínimo de intentos permitidos es ", MIN_PERMITIDO);
        juego();
    }

}
juego();
