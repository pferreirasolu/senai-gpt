

// Exercicio 1  Verificar maioridade:

function exercicio01 () {

    let idade = prompt("Qual é a sua idade?")

    if (idade != null) {
        
        if (idade >= 18) {
        
            alert("Parabens, você é maior de idade")
        } else {
            alert("Cuidado, você é menor de idade")
        
        };

    }
adicionarLog();
}



//Exercicio 2 Verificar se um número é positivo ou negativo:

function exercicio02 () {

    let numero = prompt("Digite um numero")

    if (idade != null) {
    if (numero < 0 ) {
        alert("O numero é negativo")
    
    } else {
        alert("O numero é positivo")
    
    }
    }
}




// Exercicio 3 Aprovação em uma prova:

function exercicio03 () {

    let nota = prompt("Ditite a nota do aluno")

    if (idade != null) {
    if (nota >= 60) {
    
    alert("Aprovado")
    } else {
    
    alert("Reprovado")
    }
}
    
}

// Exercicio 4 - Verificar se um número é positivo, negativo ou zero:

function exercicio04 () {

    let numero = prompt("Digite um numero")

    if (idade != null) {
    if (numero < 0) {
        alert("O numero é negativo")
    } else {
        if (numero == 0) {
            alert("O numero é zero")
        } else {
            alert("O numero e positivo")
        }
    }
}
    
}


// Exercicio 5 Classificação de idade:

function exercicio05 () {

    let idade =prompt("Insira sua idade")

    if (idade != null) {
    if (idade >=0  && idade <= 12 ){
        alert("Criança")
    
    }else {
        if (idade >=13  && idade <= 17 ) {
            alert("Adolescente")
        }else {
            alert("Adulto")
        }
    
    }
}
    
}



// Exercicio 6 Verificar se um número é par ou ímpar:

function exercicio06 () {

    let numero =prompt("Digite um numero")

    if (numero != null) {

        if (numero % 2== 0) {
            alert("O numero é par")
        } else {
            alert("O numero é ímpar")
        }
}
    
}


// Nível Intermediário

// Calculadora simples

function exercicio01i () {

    let numero1 = Number(prompt("Digite um numero"));
    let numero2 = Number(prompt("Digite mais um numero"));
    let operacao = prompt("Qual operação?");
    
    
    if (operacao == "+") {
        alert(numero1 + numero2);
    } else {
        if (operacao == "-") {
            alert("O resultado dois dois numeros é " + (numero1 - numero2));
        } else {
            if (operacao == "/") {
                alert("O resultado dois dois numeros é " + (numero1 / numero2));
            } else {
                alert("O resultado dois dois numeros é " + (numero1 * numero2));
            }
    
        }
    
    }
}


// 2 Maior entre três números:

function exercicio02i () {

    let numero1 = Number(prompt("Digite o primeiro numero"))
    let numero2 = Number(prompt("Digite o segundo numero"))
    let numero3 = Number(prompt("Digite o terceiro numero"))
    
    if (numero1 > numero2 && numero1 > numero3) {
        alert("O numero maior é o numero = "+numero1)
    } else {
        if (numero2 > numero1 && numero2 > numero3) {
            alert("O numero maior é o numero = "+numero2)
        } else {
            alert("O numero maior é o numero =  "+numero3)
        }
    
    }
}





// 3 Desconto em compras:

function exercicio03i () {

    let valorCompra = Number(prompt("Qual o valor da compra?"));

    if (valorCompra >= 100 ) {
        alert("O valor da compra com desconto de 10% é: "+(valorCompra-(valorCompra*10)/100))
    } else {
        alert("O valor da compra é: "+valorCompra);
    }

}



// 4 Sistema de login simples:

function exercicio04i () {

    let usuario = prompt("Digite o usuario");
    let senha = Number(prompt("Digite a senha"));
    
    if (usuario == "admin" && senha == 1234) {
        alert("Login bem-sucedido")
    } else {
        alert("Acesso negado")
    }

}





// Nível Avançado

// 1 - Classificação de triângulos:

function exercicio01a () {

    let lado1 = Number(prompt("Digite o lado 1"));
    let lado2 = Number(prompt("Digite o lado 2"));
    let lado3 = Number(prompt("Digite o lado 3"));
    
    if (lado1 == lado2 && lado1 == lado3) {
        alert("O triangulo é um Equilátero")
    } else {
        if (lado1 != lado2 && lado1 != lado3) {
            alert("O triangulo é um escaleno")
        } else {
            alert("O triangulo é um isósceles")
        }
    }

}


// 2 Conversão de notas para conceitos:

function exercicio02a () {

    let notaAluno = prompt("Digite a nota do aluno")

    if (notaAluno < 60 ) {
        alert("F")    
    } else { 
            if(notaAluno >= 60 && notaAluno <= 69 ) {
                alert("D")
            } else {
                if(notaAluno >= 70 && notaAluno <= 79 ) {
                    alert("C")
                } else {
                    if(notaAluno >= 80 && notaAluno <= 89 ) {
                        alert("B")
                    } else {
                        alert("A")
                }
            }
        }
    
    }

}


// 3 Cálculo de IMC:

function exercicio03a () {

    let peso = Number(prompt("Digite o peso"));
    let altura = Number(prompt("Digite a altura"));
    
    let resultado = peso/(altura*altura);
    
    if (resultado < 18.5) {
        alert("Abaixo do peso " + resultado)
    } else {
        if (resultado >= 18.5 && resultado <= 24.9 ) {
            alert("Peso normal "+ resultado)
        } else {
            if (resultado >= 25 && resultado <= 29.9 ){
                alert("Sobrepeso "+resultado)
            } else {
                alert("Obesidade "+resultado)
            }
        }
    }
    

}


// 4 Validação de ano bissexto:

function exercicio04a () {

    let ano = Number(prompt("Digite o ano (Formato 1900)"))

    if (ano % 4 === 0 && ano % 100 !== 0) {
        alert("É Bissexto")
    } else {
        if (ano % 400 === 0) {
        alert("É Bissexto")
    } else {
        alert("Não é Bissexto")
    }
    }
}

