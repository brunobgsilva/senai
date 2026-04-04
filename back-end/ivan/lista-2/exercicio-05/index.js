const d = document;

const valorInputElement = d.querySelector('#valor-input');
const quantidadeInputElement = d.querySelector('#quantidade-input');
const enviarButton = d.querySelector('#enviar-button');

enviarButton.addEventListener('click', () => {
    const valorLucro = Number(valorInputElement.value);
    const quantidadeSocios = Number(quantidadeInputElement.value);

    const valorCalculadoResult = dividirLucro(valorLucro, quantidadeSocios);
    const mostrarValorElement = d.querySelector('#mostrar-valor');

    mostrarValorElement.innerText = `
        Lucro a ser Dividido: ${valorCalculadoResult.lucroTotal}
        Quantidade de Socios: ${valorCalculadoResult.quantidadeSocios}
        Valor Calculado: R$${valorCalculadoResult.valorPorSocio.toFixed(2)}
    `;
});

function dividirLucro(lucroTotal, quantidadeSocios = 3) {
    const valorPorSocio = lucroTotal / quantidadeSocios;

    return { lucroTotal, valorPorSocio, quantidadeSocios }
};