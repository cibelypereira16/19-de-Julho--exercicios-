let idade = Number(prompt("Digite a sua idade"));
    if (idade >= 25 && idade <= 60) {
        let salario = Number(prompt("Digite o seu salario"));
            if (salario >= 2000) {
                let valorDoEmprestimo = Number(prompt("Digite o valor do emprestimo"));
                if (valorDoEmprestimo < 10 * salario) {
                    console.log("Emprestimo Aprovado");
                }else{
                    console.log("Emprestimo negado pelo valor pedido")
                }
            }else{
                console.log("Emprestimo negado pelo salario");
            }
    }else{
        console.log("Emprestimo negado pela idade");
}