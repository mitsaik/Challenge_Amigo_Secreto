//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//array para guardar os nomes
let amigos = [];

//função para add os nomes
function adicionarAmigo() {
    const acessoInput = document.getElementById('amigo'); // acesso ao <input>
    const nomes = acessoInput.value.trim(); // guarda o nome digitado e limpa o <input>

    //alerta campo vazio
    if (nomes === '') {
        alert("Por favor, insira um nome válido.");
        return; 
    }
    
    //alerta nome repitido
    if (amigos.includes(nomes)) {
        alert("Este nome já está na lista, por favor, não use nomes repitidos");
        acessoInput.value = '';
        return;
    }

    //adiciona o nome na lista
    amigos.push(nomes);
    acessoInput.value = '';
 
    //cria lista
    const listaNomes = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nomes;
    listaNomes.appendChild(li);
}

//função para sortear os nomes
function sortearAmigo() {
    //alerta para verificar se a nomes
    if (amigos.length < 2) {
        alert("Adicione 2 ou mais nomes antes de sortear");
        return;
    }

    //seleciona um nome aleatório
    const indiceAletorio = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceAletorio];

    //mostra o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    resultado.innerHTML = `<li>O amigo sorteado é: <strong>${nomeSorteado}</strong></li>`
}


