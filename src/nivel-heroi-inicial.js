// Variável para armazenar o nome do herói
let nome = "Michel Teobaldo"

// Variável para armazenar a experiência do herói
let xp = "5000"

//Variável para armazenar o nível do herói
let nivel

    // Comparar o poder e definir o nível
    if (xp <= 1000) { nivel = "Ferro"}
    else if (xp <= 2000) { nivel = "Bronze"}
    else if (xp <= 5000) { nivel = "Prata"}
    else if (xp <= 7000) { nivel = "Ouro"}
    else if (xp <= 8000) { nivel = "Platina"}
    else if (xp <= 9000) { nivel = "Ascendente"}
    else if (xp <= 10000) { nivel = "Imortal"}
    else { nivel = "Radiante"}

// Exibir a mensagem para o usuário
console.log("O Herói de nome " + nome + " está no nível de " + nivel)
