const readline = require('readline');

// Cria a interface para ler a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para ler a entrada do usuário
function lerEntrada(pergunta) {
    return new Promise(resolve => rl.question(pergunta, resolve));
}

// Função principal para executar o programa
async function main() {

    // Declara a variável nome do Herói     
    let nome

    // Estrutura de para ler o nome do herói
    const heroi = await lerEntrada("Digite o nome do herói: ");
    nome = heroi
    // Estrutura de decisão que avalia se a variável nome está vazia e armazena o valor PLAYER 1 se a condição for satisfeita.
    if(!nome){
        nome = "PLAYER 1"
        console.log("O nome do Herói não foi digitado e será chamado de " + nome)
    }
    
    // Declara a variável xp do Herói
    let xp;

    // Estrutura de repetição que Lê o xp do usuário e verificar se é um número válido
    while (true) {
        const xpInput = await lerEntrada("Digite o valor da experiência do herói: ");
        xp = parseInt(xpInput);

        if (!isNaN(xp)) {
            break; // Sai do loop se xp for um número válido
        } else {
            // mensagem exibida quando o valor não for número
            console.log("Por favor, digite um valor numérico válido para a experiência.");
        }
    }

    // Variável para armazenar o nível do herói
    let nivel;

    // função que recebe um número e compara o valor para retornar um nível de acordo com o valor fornecido.
    function nivelHeroi(xp) {
        // Comparar o xp e definir o nível
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

    // Exibir a mensagem para o usuário
    console.log("O Herói de nome " + nome + " está no nível de " + nivel)

    // Fecha a interface de leitura
    rl.close();
}

// Executa a função principal
main();
