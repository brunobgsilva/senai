const botaoAcao = document.getElementById('btn-acao');
const cepInput = document.getElementById('cep');

cepInput.addEventListener('blur', realizarAcaoClick);
botaoAcao.addEventListener('click', realizarAcaoClick);

function realizarAcaoClick() {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        document.getElementById('rua').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('complemento').value = data.complemento;
        document.getElementById('cidade').value = data.localidade;
        document.getElementById('estado').value = data.estado;
    })
    .catch(err => {
        console.log(err);
    });
}