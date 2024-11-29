// Função para validar a senha
function validarSenha(event) {
    event.preventDefault(); // Impede o envio do formulário

    var senha = document.getElementById("senha").value;
    var resultado = document.getElementById("resultado");

    // Verifica se a senha tem 8 ou mais caracteres
    if (senha.length >= 8) {
        resultado.textContent = "Senha válida";
        resultado.classList.remove("senha-invalida");
        resultado.classList.add("senha-valida");
    } else {
        resultado.textContent = "Senha inválida";
        resultado.classList.remove("senha-valida");
        resultado.classList.add("senha-invalida");
    }

    // Exibe o resultado
    resultado.style.display = "block";
}

// Associa a função de validação ao formulário
document.getElementById("formSenha").addEventListener("submit", validarSenha);
