const leer = require("prompt-sync")();

function juego(){
const NUMERO_SECRETO=54;
let numIntento=0;
let intento=0;
for (intento = 1; intento <= 3; intento++) {
   console.log("Cuál es el número secreto?");
   numIntento=Number(leer());
   if (numIntento==NUMERO_SECRETO){
    console.log("Adivinaste el número secreto!");
    intento=3;
   } else if (numIntento!=NUMERO_SECRETO){
    console.log("No lograste adivinar.");

   }
}
}
juego();