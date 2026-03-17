const PORT = 5050;
const d = document;

const firstNumberInput = d.querySelector('#first-number');
const secondNumberInput = d.querySelector('#second-number');
const operationSelect = d.querySelector('#select-operation');
const sendButton = d.querySelector('#send-operation');

async function fetchOperation(operation) {
    const n1 = firstNumberInput.value;
    const n2 = secondNumberInput.value;

    let result;
    
    await fetch(
        `http://localhost:${PORT}/api/${operation}?a=${n1}&b=${n2}`
    )
    .then((res) => res.json())
    .then((res) => result = res);

    console.log(result);
    return result.resultado;
};  

async function renderResult() {
    const operation = operationSelect.value;
    result = await fetchOperation(operation);

    d.querySelector('#result')
        .innerHTML = `
            Resultado: ${result}
        `
};

sendButton.addEventListener('click', () => {
    renderResult();
});

