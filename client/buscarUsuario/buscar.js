
let botaoBuscar = document.getElementById('search-button');
let caixaButton = document.querySelector('.api')
let containerResposta = document.querySelector('.api');

botaoBuscar.addEventListener('click', async () => {
    const id = document.getElementById('idBuscar').value;

    try {
        const response = await fetch(`http://localhost:3000/usuarios/${id}`);
        const usuario = await response.json();

        if (usuario.id) {
            document.getElementById('resposta-api').innertText = `Usuário encontrado: ${usuario.nome}, email: ${usuario.email}`

            if (!document.getElementById('input-nome')) {
                const inputNome = document.createElement('input')
                inputNome.id = 'input-nome';
                inputNome.placeholder = 'Novo nome'

                const inputEmail = document.createElement('input')
                inputEmail.id = 'input-email';
                inputEmail.placeholder = 'Novo email'

                const botaoEditar = document.createElement('button')
                botaoEditar.id = "botao-editar";
                botaoEditar.innerText = "Salvar alteraçoes";

                containerResposta.appendChild(inputNome);
                containerResposta.appendChild(inputEmail);
                containerResposta.appendChild(botaoEditar);

                botaoEditar.addEventListener('click', () => editarUsuario(id))
            }
        } else {
            document.getElementById('resposta-api').innerText = 'Usuário não encontrado'
        }

    } catch (error) {
        console.error("erro ao acessar o back end", error);
    }
})

async function editarUsuario(id) {
    const novoNome = document.getElementById('input-nome').value;
    const novoEmail = document.getElementById('input-email').value;

    const dadosAtualizados = {
        nome: novoNome,
        email: novoEmail
    }

    try {
        const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
            method: 'PUT',

            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosAtualizados)
        });

        const resultado = await response.json();
        document.getElementById('resposta-api').innerText = resultado.mensagem;
    }
    catch (error) {
        console.log(error);
        document.getElementById('resposta-api').innerText = "Erro ao atualiza o usuário"
    }
}