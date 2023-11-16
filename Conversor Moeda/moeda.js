var quantia = prompt("Quantos reais você quer transformar em guaranis?");
var valorguarani = 0.00066;

var valorreais = quantia * valorguarani;
valorreais = valorreais.toFixed(2);
alert("R$ " + valorreais);