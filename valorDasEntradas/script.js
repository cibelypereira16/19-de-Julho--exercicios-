let idade = Number(prompt("Digite a sua idade"));
if (idade >=60) {
    console.log ("Entrada gratuita");
}

else if (idade >=0 && idade <=12 ) {
    console.log ("O valor da sua entrada é de 10 reais");
}

else if (idade >=13 && idade <= 17){
    console.log ("O valor da sua entrada é de 15 reais ");
}

else if( idade >=18 && idade <=59){
    let estudante = (prompt("Você é estudante?"));
    if (estudante == "sim"){
        console.log ("O valor da sua entrada é de 17,50");
    }
      
    else {
        console.log ("O valor da sua entrada é de 35 reais");
    }

}
