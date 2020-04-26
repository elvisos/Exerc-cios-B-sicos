/*
Objetivo:
    Faça um programa que entre com cinco números e imprima o quadrado de cada número.
*/

var n1 = window.prompt("Digite o primeiro número e descubra no fim o seu quadrado");
var n2 = window.prompt("Digite o segundo número e descubra no fim o seu quadrado");
var n3 = window.prompt("Digite o terceiro número e descubra no fim o seu quadrado");
var n4 = window.prompt("Digite o quarto número e descubra no fim o seu quadrado");
var n5 = window.prompt("Digite o quinto número e descubra no fim o seu quadrado");

/* Não é necessário neste caso converter para Int

var num1 = parseInt();
var num2 = parseInt();
var num3 = parseInt();
var num4 = parseInt();
var num5 = parseInt();

*/

//Poderia também ser impresso com o document.alert

document.write("O quadrado do número " + n1 + " é " + n1*2 + "<br>");
document.write("O quadrado do número " + n2 + " é " + n2*2 + "<br>");
document.write("O quadrado do número " + n3 + " é " + n3*2 + "<br>");
document.write("O quadrado do número " + n4 + " é " + n4*2 + "<br>");
document.write("O quadrado do número " + n5 + " é " + n5*2 + "<br>");