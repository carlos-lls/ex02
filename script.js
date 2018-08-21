let tentativa = parseInt(prompt("Tente advinhar o número entre 0 e 100"));

 let sorteio = Math.floor(Math.random() * 100 + 1);
 

while(tentativa !== sorteio){

if(sorteio > tentativa ){
    alert("É um número maior " );
    
}

else  {
    alert("É um número menor");
    
}
tentativa = parseInt(prompt("Tente novamente"));
}
alert("Você tem sorte")
