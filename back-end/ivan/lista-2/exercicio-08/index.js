const d = document;

const larguraInputElem = d.querySelector('#comprimento-input');
const comprimentoInputElem = d.querySelector('#largura-input');
const enviarButton = d.querySelector('#enviar-button');

enviarButton.addEventListener('click', () => {
    const comprimento = Number(comprimentoInputElem.value);
    const largura = Number(larguraInputElem.value);

    const calcularAreaResultado = calcularAreaTerreno(largura, comprimento);
    const mostrarAreaElem = d.querySelector('#mostrar-area');

    mostrarAreaElem.innerHTML = `
    Largura: ${calcularAreaResultado.largura}m
    <br>
    Comprimento: ${calcularAreaResultado.comprimento}m
    <br>
    Area do terreno: ${calcularAreaResultado.area}m².
    `;
});

function calcularAreaTerreno(largura, comprimento) {
    const area = largura * comprimento;

    return {area, largura, comprimento}
};