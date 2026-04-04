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

if (typeof module !== "undefined") {
    module.exports = { converterTemperatura };
};