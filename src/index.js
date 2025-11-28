
console.log("🚀 Desafio DIO - Lógica de Programação - 02");
console.log("=====================================");
console.log(" 📅 Data: 28/11/2025");
console.log(" 2️⃣ Calculadora de partidas Rankeadas");
console.log("=====================================");

let numWins = 50;
let numLoses = 5;


// Função principal que calcula saldo e determina rank
function calcularRankeadas(vitorias, derrotas) {
    
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

let casos = [
    { v: 8, d: 2 },    // Ferro (8 vitórias)
    { v: 15, d: 5 },   // Bronze (15 vitórias)
    { v: 50, d: 5 },   // Prata (50 vitórias)
    { v: 75, d: 10 },  // Ouro (75 vitórias)
    { v: 85, d: 15 },  // Diamante (85 vitórias)
    { v: 95, d: 5 },   // Lendário (95 vitórias)
    { v: 150, d: 20 }  // Imortal (150 vitórias)
];

console.log("--- Testando diferentes casos ---");
for (let i = 0; i < casos.length; i++) {
    let resultado = calcularRankeadas(casos[i].v, casos[i].d);
    console.log(`Caso ${i + 1}: ${casos[i].v} vitórias, ${casos[i].d} derrotas = Saldo: **${resultado.saldoVitorias}**, Nível: **${resultado.nivel}**`);
}


// Resultado principal
console.log("\n--- Resultado Principal ---");

let resultadoFinal = calcularRankeadas(numWins, numLoses);
console.log(`O Herói tem de saldo de ${resultadoFinal.saldoVitorias} está no nível de ${resultadoFinal.nivel}`);