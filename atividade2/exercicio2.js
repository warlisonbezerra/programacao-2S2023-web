let matriz = [[1, 2], [3, 4], [5, 6]];

console.log("A matriz é:");
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i]);
}

console.log("\nA transposta da matriz é:");
let transposta = [];
for (let i = 0; i < matriz[0].length; i++) {
    transposta[i] = [];
    for (let j = 0; j < matriz.length; j++) {
        transposta[i][j] = matriz[j][i];
    }
}
for (let i = 0; i < transposta.length; i++) {
    console.log(transposta[i]);
}
