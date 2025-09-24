//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//array para guardar os nomes
let amigos = [];

//função para add os nomes
function adicionarAmigo() {
    const acessoInput = document.getElementById('amigo'); // acesso ao <input>
    const nomes = acessoInput.value.trim(); // guarda o nome digitado e limpa o <input>

    //alerta
    if (nomes === '') {
        alert("Por favor, insira um nome válido.");
        return; 
    }
    
    amigos.push(nomes);
    acessoInput.value = '';
}


