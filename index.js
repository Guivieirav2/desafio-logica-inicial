let nome = "gabigol"; //nome do herói
let xp = 7500; // nivel do herói
let nível = "";

//tomada de decisão 
if (xp < 1000) {
        nível = ferro;
} else if (xp >= 1001 && xp <= 2000) {
        nível = "bronze"
} else if (xp >= 2001 && xp <= 5000) {
        nível = "prata"
} else if (xp >= 5001 && xp <= 7000) {
        nível = "ouro"
} else if (xp >= 7001 && xp <= 8000) {
        nível = "platina"
} else if (xp >= 8001 && xp <= 9000) {
        nível = "ascendente"
} else if (xp >= 9001 && xp <= 10000) {
        nível = "imortal"
} else if (xp >= 10000) {
        nível = "radiante"
}

//saida
console.log("O herói de nome " + nome + " está no nível de " + nível)