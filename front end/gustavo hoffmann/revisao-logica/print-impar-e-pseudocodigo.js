// Pseudocódigo para imprimir números impar
//
// VARIAVEL numeroAtual = 1;
//
// ENQUANTO (numeroAtual MENOR QUE OU IGUAL A 100) {
//    SE (RESTO DA DIVISAO DE numeroAtual POR 2 IGUAL A 0) {
//       IMPRIMA numeroAtual
//       numeroAtual++
//    }
// }

let numeroAtual = 1;

while (numeroAtual <= 99) {
   if (numeroAtual % 2 !== 0) {
      console.log(numeroAtual);
   }
   numeroAtual++;
}