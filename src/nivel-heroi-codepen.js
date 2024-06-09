// Função para ler a entrada do usuário
function lerEntrada(mensagem) {
    return prompt(mensagem)
}

// Variável para armazenar o nome do usuário
let nome

// Variável para armazenar a experuência do herói
let xp

//Variável para armazenar o nível do herói
let nivel

// Ler o nome de usuário e definir Player 1 caso o usuário não deseje inserir o nome.

nome = lerEntrada("Digite o nome do Herói:")
if (!nome){
    alert ("O nome do Herói não foi digitado e será chamado de 'PLAYER 1'")
    nome = "PLAYER 1" //Atribruindo "PLAYER 1" na variavel nome
}

// Estrutura de repetição que Lê o xp do usuário e verificar se é um número válido
while (true) {
    xp = lerEntrada("Digite o valor do poder do herói:");
    xp = parseInt(xp);

    if (!isNaN(xp)) {
        break // Sai do loop se poder for um número válido
    } else {
         // mensagem exibida em forma de caixa de mensagem quando o valor não for número
        alert("Por favor, digite um valor numérico válido para o poder.")
    }
}

// função que recebe um número e compara o valor para retornar um nível de acordo com o valor fornecido.
function nivelHeroi(xp) {
    // Comparar o poder e definir o nível
    if (xp <= 1000) { return ("Ferro")} 
    if (xp <= 2000) { return ("Bronze")}
    if (xp <= 5000) { return ("Prata")}
    if (xp <= 7000) { return ("Ouro")}
    if (xp <= 8000) { return ("Platina")}
    if (xp <= 9000) { return ("Ascendente")}
    if (xp <= 10000) { return ("Imortal")}
    if (xp > 10000) { return ("Radiante")}
}

 // Chamada para a função nivelHeroi e retorna o nível de acordo com o valor armazenado na variável xp
 nivel = nivelHeroi(xp)


// Exibir a mensagem para o usuário em forma de caixa de mensagem
alert("O Herói de nome " + nome + " está no nível de " + nivel)
