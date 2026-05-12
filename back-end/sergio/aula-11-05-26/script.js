const d = document;

const form = d.getElementById('formCliente');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let clientes = [];
    let radios = d.getElementsByName('genero');
    let genero;

    radios.forEach((val, i) => {
        if (radios[i].checked) {
            genero = radios[i].value
        };
    });

    const clienteObj = {
        nome: d.getElementById('nome').value,
        genero,
        email: d.getElementById('email').value,
        cpf: d.getElementById('cpf').value,
        endereco: {
            logradouro: d.getElementById('log').value,
            numero: d.getElementById('num').value,
            complemento: d.getElementById('comp').value,
            bairro: document.getElementById('bairro').value,
            cidade: d.getElementById('cidade').value,
            uf: d.getElementById('uf').options[d.getElementById('uf').options.selectedIndex].text,
            cep: d.getElementById('cep').value
        }
    };

    if (localStorage.cliLs) {
        clientes = JSON.parse(localStorage.getItem('cliLs'));
    } else {
        localStorage.setItem('cliLs', JSON.stringify(clienteObj));
    };

    clientes.push(clienteObj)
    localStorage.cliLs = JSON.stringify(clientes);

    alert(`Cliente ${clienteObj.nome} cadastrado com sucesso!`);

    d.getElementById('formCliente').reset();

});