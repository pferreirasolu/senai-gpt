// console.log("FOR");
// for (let contadora =1; contadora <=5; contadora++) {
// console.log(contadora);
// }

// console.log("WHILE");
// let contadoraWhile = 1;

// while (contadoraWhile <=5) {

//     console.log(contadoraWhile)

//     contadoraWhile++
// }

// console.log("DO..WHILE");

// do {

// console.log("Mostrar na tela!")
// } while(1==2)


// Exercícios de Laço de Repetição
// Nível Básico

// 1 Contagem de 1 a 10:

// for (i=1;i<=10;i++) {
// console.log(i);
// };

// 2 Tabuada de um número:

// let numero = prompt("Digite um numero")

// for (let i=1;i<=10;i++) {

//     console.log(numero+" X "+i+" = "+(numero*i));
// }

// 3 Soma dos primeiros N números naturais:

// let numero=Number(prompt("Digite um numero"));
// let soma =0;

// for (let i=1; i<=numero; i++) {
//      soma = soma+i;
// };
//     console.log(soma);


// Nível Intermediário

// 1 Exibir os números pares de 1 a 50:
// for (let i=1;i<=50; i++){

//     if(i%2==0) {
//         console.log(i)
//     }
// }

// 2 Jogo de adivinhação:
// const numeroAleatorio = Number(Math.floor(Math.random() * 101));
// console.log(numeroAleatorio);
// let numeroInserido;


// while (numeroInserido !== numeroAleatorio) {

//     numeroInserido = Number(prompt("Tente adivinhar o numero gerado!"));

//     if (numeroInserido > numeroAleatorio) {
//         alert("O numero é maior que o numero que foi gerado");
//     } else {
//         if (numeroInserido < numeroAleatorio) {
//             alert("O numero é menor que o numero que foi gerado")
//         } else {
//             alert("Acertou!!! Numero = " + numeroAleatorio);
//         }
//     }


// }

// 3 Contagem regressiva:

// let numero = Number(prompt("Digite um numero"));
    
//  numero = numero+1

// while(numero > 0) {
//     numero=numero-1;

// console.log(numero)
// }

// Nível Avançado

// 1 Soma dos dígitos de um número:

// let numeroInteiro = prompt("Digite um numero inteiro e positivo");

// let qtdDigitos = numeroInteiro.length;
// let i=0;
// let resultado = 0

// while(i < qtdDigitos) {
//     resultado += Number(numeroInteiro[i]);
//     i++
// }
// alert(resultado)


function adicionarLog () {

    let divLogs = document.querySelector(".logs")// seleciona a div
    let tagP = document.createElement("p"); // cria a tag p

    tagP.innerHTML = "Exercicio executado às "+ new Date().toLocaleDateString() +" as "+ new Date().toLocaleTimeString() ;
    divLogs.appendChild(tagP);
}












