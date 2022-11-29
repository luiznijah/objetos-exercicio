// # Exercício 1

// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
const sacolao = [];

// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 
const fruta1 = {
    nome: "Maça",
    preço: 5.00,
    disponibiliidade: true
};

const fruta2 = {
    nome: "Banana",
    preço: 7.00,
    disponibiliidade: true
};

const fruta3 = {
    nome: "Pera",
    preço: 9.00,
    disponibiliidade: true
};


// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
sacolao.push(fruta1,fruta2,fruta3);


// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**
console.table(sacolao);