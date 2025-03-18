let amigos = [];

function atualizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function adicionarAmigo() {
    let inAmigo = document.getElementById("amigo");
    let amigo = inAmigo.value.trim(); // Removendo espaços extras

    if (!amigo) {
        alert("Por favor, digite o nome do amigo(a)");
        return;
    }

    if (amigos.includes(amigo)) {
        alert("Este nome já foi adicionado ao sorteio!");
        return;
    }

    amigos.push(amigo);
    atualizarAmigos();
    inAmigo.value = "";
}

function sortearAmigo() {
    if (amigos.length < 3) {
        alert("Adicione mais amigos para sortear.");
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.textContent = `O amigo sorteado é: ${amigoSorteado}!`;
}

function reiniciarSorteio() {
    let resultado = document.getElementById("resultado");
    resultado.textContent = "";
    amigos = [];
    atualizarAmigos();
    alert("Novo Sorteio");
}
