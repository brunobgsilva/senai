let nomeTurma = document.getElementById("nomeTurma");
let nomeCurso = document.getElementById("nomeCurso");
let nomeProfessor = document.getElementById("nomeProfessor");
let dataInicio = document.getElementById("dataInicio");
let dataFim = document.getElementById("dataFim");
let qtdAlunos = document.getElementById("qtdAlunos");
let slAlunos = document.getElementById("slAlunos");
let btnAdicionarAluno = document.getElementById("btnAdicionarAluno"); // Botão para adicionar alunos ao editar
let formTurma = document.getElementById("formTurma")

let idTurmaParaEditar = null;

function exibirQuantidadeAlunosParaCriar() {
    slAlunos.innerHTML = "";
    for (let i = 0; i < qtdAlunos.value; i++) {
        let div = document.createElement("div");
        div.classList.add("form-group-line");
        div.innerHTML = `
                <input id="in_aluno_nome_${i}" style="flex: 1;" type="text" placeholder="Nome do Aluno" required>
                <input id="in_aluno_idade_${i}" style="flex: 0 0 25%;" type="number" placeholder="Idade" required>
        `;
        slAlunos.appendChild(div);
    }
}

function adicionarAlunoAoEditar(){
    let nome = prompt("Digite o nome do aluno");
    let idade = prompt("Digite a idade do aluno");

    let dados = {
        "turma": idTurmaParaEditar,
        "nome": nome,
        "idade": idade
    };

    // Logica para adicionar o aluno na API

    let idAluno = 0; // Trocar pelo ID da API

    let div = document.createElement("div");
    div.classList.add("form-group-line");
    div.id = `aluno_${idAluno}`;
    div.innerHTML = `
            <input id="in_aluno_nome_${idAluno}" style="flex: 1;" type="text" placeholder="Nome do Aluno" value="${nome}" required>
            <input id="in_aluno_idade_${idAluno}" style="flex: 0 0 25%;" type="number" placeholder="Idade" value="${idade}" required>
            <button class="btn danger" style="flex: 0 0 15%;" type="button" onclick="removerAluno(${idAluno})">Remover</button>
    `;
    slAlunos.appendChild(div);

    qtdAlunos.value = parseInt(qtdAlunos.value) + 1;
}

function prencherDadosParaEditar(curso, turma, professor, dataInicioEditar, dataFimEditar, alunos) {
    nomeCurso.value = curso;
    nomeTurma.value = turma;
    nomeProfessor.value = professor;
    dataInicio.value = dataInicioEditar;
    dataFim.value = dataFimEditar;
    qtdAlunos.value = alunos.length;

    btnAdicionarAluno.hidden = false;
    btnAdicionarAlunoCadastro.disabled = true;
    qtdAlunos.disabled = true;
    
    slAlunos.innerHTML = "";
    for (let i = 0; i < qtdAlunos.value; i++) {
        let div = document.createElement("div");
        div.classList.add("form-group-line");
        div.id = `aluno_${alunos[i].id}`;
        div.innerHTML = `
                <input id="in_aluno_nome_${alunos[i].id}" style="flex: 1;" type="text" placeholder="Nome do Aluno" value="${alunos[i].nome}" required>
                <input id="in_aluno_idade_${alunos[i].id}" style="flex: 0 0 25%;" type="number" placeholder="Idade" value="${alunos[i].idade}" required>
                <button class="btn danger" style="flex: 0 0 15%;" type="button" onclick="removerAluno(${alunos[i].id})">Remover</button>
        `;
        slAlunos.appendChild(div);
    }
}

function obtemDadosAlunosParaCriarEditar() {
    let alunos = [];
    for (let i = 0; i < qtdAlunos.value; i++) {
        let aluno = {
            "nome": document.getElementById(`in_aluno_nome_${i}`).value,
            "idade": parseInt(document.getElementById(`in_aluno_idade_${i}`).value),
        };
        alunos.push(aluno);
    }
    return alunos;
}

function removerAluno(id_aluno) {
    // Implemente a lógica para remover o aluno

    element = document.getElementById(`aluno_${id_aluno}`);
    element.remove();

    qtdAlunos.value = parseInt(qtdAlunos.value) - 1;

    console.log(`Removendo aluno com ID: ${id_aluno}`); // Remover depois esse console, utilize para testes
    
}

function adicionarTurmaHTML() {

}

function removerTurma(id_turma) {
    // Utilize o confirm antes de remover a turma
    // Implemente a lógica para remover a turma

    console.log(`Removendo turma com ID: ${id_turma}`); // Remover depois esse console, utilize para testes
}

function editarTurma(id_turma) {
    // Implemente a lógica para editar a turma

    console.log(`Editando turma com ID: ${id_turma}`); // Remover depois esse console, utilize para testes
}

function salvarTurmaAPI() {

    const alunos = obtemDadosAlunosParaCriarEditar();

    let idTurma;

    const dadosTurma = {
        nome_curso: nomeCurso.value,
        nome_professor: nomeProfessor.value,
        nome_turma: nomeTurma.value,
        data_inicio: dataInicio.value,
        data_fim: dataFim.value
    }
    
    fetch('http://127.0.0.1:8000/api/turma/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosTurma)    
    })
    .then(res => res.json())
    .then((res) => {
        console.log('Turma criada: ')
        console.log(res)

        idTurma = res.id;

        // adicionando o ID da turma que acabamos de criar nos alunos para que seja possivel direciona-los para a turma que acabamos de criar
        alunos.forEach((aluno) => {
            aluno.turma = idTurma;
        })

        fetch('http://127.0.0.1:8000/api/alunos/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(alunos)
        })
        .then(res => res.json())
        .then((data) => {
            
                console.log(data)
            
        })
        .catch((error) => {
            console.log('ERRO: ' + error)
        })

    })
    .catch((res) => {
        console.log('ERRO: ' + res);
    })

    console.log(alunos);

    

}

function salvarTurma(event) {

    event.preventDefault();
    
    const alunos = obtemDadosAlunosParaCriarEditar();

    if (idTurmaParaEditar == null) {
        salvarTurmaAPI();
        listarTurmas();
    } else {
        // Implemente a lógica para editar a turma
    }

}

function listarTurmas() {

    fetch('http://127.0.0.1:8000/api/turma/')
    .then(res => res.json())
    .then((data) => {

        console.log(data)

        data.forEach((turma) => {

            turmaHTML = document.createElement('tr');

            turmaHTML.innerHTML = `
                <td>${turma.nome_curso}</td>
                <td>${turma.nome_turma}</td>
                <td>${turma.nome_professor}</td>
                <td>${turma.data_inicio}</td>
                <td>${turma.data_fim}</td>
                <td><button class="btn warning" type="button" onclick="editarTurma()">Editar</button> <button class="btn danger" type="button" onclick="removerTurma()">Excluir</button></td>
            `

            document.querySelector('#lista-itens .table tbody')
                .appendChild(turmaHTML);

        })

    })
    .catch(res => console.log('ERRO: ' + res))

}

// Eventos
formTurma.addEventListener("submit", salvarTurma);

exibirQuantidadeAlunosParaCriar();
listarTurmas();

// para teste