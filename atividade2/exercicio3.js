function multiplica_matrizes(matriz1, matriz2) {
    let linhas1 = matriz1.length;
    let colunas1 = matriz1[0].length;
    let linhas2 = matriz2.length;
    let colunas2 = matriz2[0].length;

    if (colunas1 !== linhas2) {
        return "Não é possível calcular";
    }

    let resultado = new Array(linhas1);
    for (let i = 0; i < linhas1; i++) {
        resultado[i] = new Array(colunas2);
        for (let j = 0; j < colunas2; j++) {
            resultado[i][j] = 0;
            for (let k = 0; k < colunas1; k++) {
                resultado[i][j] += matriz1[i][k] * matriz2[k][j];
            }
        }
    }

    return resultado;
}

let A = [[1, 2], [3, 4], [5, 6]];
let B = [[7, 8], [9, 10]];
let C = multiplica_matrizes(A, B);

console.log("Matriz A:");
for (let i = 0; i < A.length; i++) {
    console.log(A[i]);
}

console.log("Matriz B:");
for (let i = 0; i < B.length; i++) {
    console.log(B[i]);
}

console.log("Matriz C:");
if (typeof C === "string") {
    console.log(C);
} else {
    for (let i = 0; i < C.length; i++) {
        console.log(C[i]);
    }
}
