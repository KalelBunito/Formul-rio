const formulario = document.querySelector(".form");

formulario.addEventListener("submit", async function(e) {
    e.preventDefault();

    const usuario = {
        nome: document.getElementById('name-input').value, 
        email: document.getElementById('email-input').value, 
        mensagem: document.getElementById('textarea-input').value 
    }

    try {
        const response = await fetch('http://localhost:3000/usuarios/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        const result = await response.json();
        alert(result.mensagem);
    } catch (error) {
        console.error("Erro ao enviar os dados:", error);
    }
});