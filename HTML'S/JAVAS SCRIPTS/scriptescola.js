// Função para calcular a média
function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

// Função para exibir o resultado
function exibirResultado(nome, media, faltas, situacao) {
    const resultadoSecao = document.getElementById("resultado");
    const detalhes = document.getElementById("resultado-detalhes");

    detalhes.innerHTML = `
      <strong>Aluno:</strong> ${nome}<br>
      <strong>Média:</strong> ${media.toFixed(2)}<br>
      <strong>Faltas:</strong> ${faltas}%<br>
      <strong>Situação:</strong> ${situacao}
    `;
    
    // Remover a classe 'hidden' para exibir o resultado
    resultadoSecao.classList.remove("hidden");

    // Log no console (corrigido)
    console.log(`Aluno: ${nome}`);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log(`Faltas: ${faltas}%`);
    console.log(`Situação: ${situacao}`);
}

// Adiciona evento ao formulário
document.getElementById("form-dados").addEventListener("submit", function (e) {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    
    // Obtém os dados do aluno
    const nome = document.getElementById("nome").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const faltas = parseFloat(document.getElementById("faltas").value);

    // Calcula a média do aluno
    const media = calcularMedia(nota1, nota2, nota3);
    let situacao;

    // Determina a situação do aluno
    if (media >= 7 && faltas < 25) {
        situacao = "Aprovado";
    } else if (media >= 5 && media < 7 && faltas < 25) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    // Exibe o resultado
    exibirResultado(nome, media, faltas, situacao);
});
