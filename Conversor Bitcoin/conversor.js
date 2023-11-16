var quantiaReal = prompt("Digite o valor que você gostaria de comprar em bitcoin:");
var valorbitc = 180344.03;

totalbitc = quantiaReal / valorbitc ;
totalbitc = totalbitc.toFixed(8);
alert("Com esse valor você consegue comprar: " +totalbitc +" bitcoin(s)");