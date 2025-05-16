
let botaoBuscar = document.getElementById('search-button');
let caixaButton = document.querySelector('.api')

botaoBuscar.addEventListener('click', async () => {
    const id = document.getElementById('idBuscar').value;

    try {
        const response = await fetch(`http://localhost:3000/usuarios/${id}`);
        const usuario = await response.json();

        if (usuario.id) {
            document.getElementById('resposta-api').innerText = `Usuário encontrado: ${usuario.nome}, email: ${usuario.email}`
            const botaoEditar = document.createElement("button");
            botaoEditar.id = "botao-editar";
            botaoEditar.innerText = "editar";
            caixaButton.appendChild(botaoEditar);
        } else {
            document.getElementById('resposta-api').innerText = 'Usuário não encontrado'
        }

    } catch (error) {
        console.error("erro ao acessar o back end", error);
    }
})