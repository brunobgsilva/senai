const estoqueCarros = [];

function pedirCarro() {
   const carro = prompt("Qual carro deseja adicionar ao estoque?");

   if (carro === "") {
      alert("Você não escreveu nada.");
      pedirCarro();
   }else{
      estoqueCarros.push(carro);
      desejaContinuar();
   }

}

function desejaContinuar() {
   const confirmacao = confirm("Deseja continuar?");
   
   if (confirmacao) {
      pedirCarro();
   } else {
      console.log(estoqueCarros);
      perguntarSeQuerComprar();
   }

}

function perguntarSeQuerComprar() {
   const confirmacao = confirm("Você deseja um dos carros?");

   if (confirmacao) {
      escolherCarroParaCompra();
   } else {
      return;
   }

}

function escolherCarroParaCompra() {
   const carroEscolhido = prompt("Qual carro você deseja?");
   let carroExiste = false;

   for (const carro of estoqueCarros) {
      if (carroEscolhido === carro) {
         carroExiste = true;
         alert("Carro existe.")
         break;
      }
   }

   if (carroExiste) {
      const trocar = confirm("Quer trocar seu carro por este?");

      if (trocar) {
         trocarCarro(carroEscolhido);
      } else {
         comprarCarro(carroEscolhido);
      }

   } else {
      alert("Carro não existe.");

      if (confirm("Deseja outro carro?")) {
         escolherCarroParaCompra();
      } else {
         alert("Busca terminada.")
      }

   }

   return carroEscolhido;

}

function trocarCarro(carroEscolhido) {
   const carroParaTroca = prompt("Qual carro você deseja dar na troca?");

   const indexDoCarroEscolhido = estoqueCarros.indexOf(carroEscolhido);

   estoqueCarros.splice(indexDoCarroEscolhido, 1, carroParaTroca);

}

function comprarCarro(carroEscolhido) {
   const indexDoCarroEscolhido = estoqueCarros.indexOf(carroEscolhido);
   estoqueCarros.splice(indexDoCarroEscolhido, 1);
   alert("Carro comprado.")
   console.log(estoqueCarros);
}

pedirCarro();