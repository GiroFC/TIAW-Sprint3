// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Igor Franco",
            "idade": "19",
            "cidade": "nova lima",
            "hobbies": "computador e amigos",
            "estuda": "sim",
            "trabalha": "não",
            "sonhos": "ser engenheiro de softwere",
            "tempolivre": "4 horas por dia",
            "procrastinador": "sim",
            "motivo": "jogos",
            "escala": "4",
            "app": "nao",
            "perde": "interação social",
            "sabermotivo": "Sim, ansiedade, e vontade de jogar",
            "causa": "atraso em atividades",
            "solucao": "um aplicativo de agenda que me ajudasse a me organizar"
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "idade" : contato.idade,
        "cidade": contato.cidade,
        "hobbies" : contato.hobbies,
        "estuda": contato.estuda,
        "trabalha": contato.trabalha,
        "sonhos": contato.sonhos,
        "tempolivre": contato.tempolivre,
        "procrastinador": contato.procrastinador,
        "motivo": contato.motivo,
        "escala": contato.escala,
        "app": contato.app,
        "perde": contato.perde,
        "sabermotivo": contato.sabermotivo,
        "causa": contato.causa,
        "solucao": contato.solucao
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
    db.data[index].idade = contato.idade,
    db.data[index].cidade = contato.cidade,
    db.data[index].hobbies = contato.hobbies,
    db.data[index].estuda = contato.estuda,
    db.data[index].trabalha = contato.trabalha,
    db.data[index].sonhos = contato.sonhos,
    db.data[index].tempolivre = contato.tempolivre,
    db.data[index].procrastinador = contato.procrastinador,
    db.data[index].motivo = contato.motivo,
    db.data[index].escala= contato.escala,
    db.data[index].app = contato.app,
    db.data[index].perde = contato.perde,
    db.data[index].sabermotivo = contato.sabermotivo,
    db.data[index].causa = contato.causa,
    db.data[index].solucao = contato.solucao

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}