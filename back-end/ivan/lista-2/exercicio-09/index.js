const d = document;

const temperaturaInputElem = d.querySelector('#temperatura-input');
const converterParaSelectElem = d.querySelector('#converter-para-select');
const enviarButton = d.querySelector('#enviar-button');

enviarButton.addEventListener('click', () => {
    const converterPara = converterParaSelectElem.value;
    const temperatura = Number(temperaturaInputElem.value);

    const converterTempResultado = converterTemperatura(temperatura, converterPara);

    const mostrarTempElem = d.querySelector('#mostrar-temperatura');

    if (converterPara === "CtoF") {
        const tempConvertida = converterTempResultado.fahrenheit;
        mostrarTempElem.innerHTML = `
            Temperatura informada: ${temperatura}C°
            <br>
            Temperatura convertida: ${tempConvertida.toFixed(0)}F°
        `;
    } else if (converterPara === "FtoC") {
        const tempConvertida = converterTempResultado.celsius;
        mostrarTempElem.innerHTML = `
        Temperatura informada: ${temperatura}F°
        <br>
        Temperatura convertida: ${tempConvertida.toFixed(0)}C°
        `;
    };
});

function converterTemperatura(temperatura, converterPara) {
    if (converterPara === "CtoF") {
        const celsius = temperatura;

        const fahrenheit = (celsius * (9/5)) + 32;

        return {celsius, fahrenheit};
    };

    if (converterPara === "FtoC") {
        const fahrenheit = temperatura;

        const celsius = ((fahrenheit - 32) * 5) / 9;

        return {celsius, fahrenheit}
    };
};