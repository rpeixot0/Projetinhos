    //Parse significa análise e int inteira ou seja o comando parseInt é uma análise inteira do que está dentro dele
    //Math.random é um comando para escolha aleatória de número (é multiplicado por 1001 pois é 0.9 (padrão) até 1000, se fosse por 1000 seria até 999)
    var numero = parseInt(Math.random() * 1000) + 1;

    var chutes = 0;

    var chutesrestantes = 10;

        while(chute != numero){
     
        var chute = prompt("Digite um número de 0 à 1000");

        chutes = chutes+1;
        chutesrestantes = chutesrestantes-1
        if(chute>numero){
            alert("Você errou, "+ chute +  " , o número secreto é mais baixo, você ainda tem " +chutesrestantes +" tentativas!");
     }   else if(chute<numero){
            alert("Você errou, "+ chute +  " , o número secreto é mais alto, você ainda tem " +chutesrestantes +" tentativas!");
        }   else if(chute==numero){
            {
            alert("Parabéns! Você acertou o número secreto");
            alert("Você fez o total de: " + chutes + " tentativa(s) até o acerto");
            break; //o break serve para não ler a linha após, caso o número não tenha sido descoberto
            }
        }  
            if(chutes >=10){
            alert("Você já atingiu o limite de tentativas, que pena!");
            break;
        }
         }
           