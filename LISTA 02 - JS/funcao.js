function exercicio01(){
    const var01 = document.getElementById("VarEx01").value;
    const var02 = document.getElementById("VarEx02").value;
    const calcular = document.getElementById("calcular").innerText;
    
    let diferenca = var01 - var02;

    let dobro = ((var01 * 2) + (var02*3));

    let multiplicacao = (var01 * var02);

    let maiorMenor = []

    if(var01 > var02){
       maiorMenor[0] = var01;
       maiorMenor[1] = var02;
    }else{
       maiorMenor[0] = var02;
       maiorMenor[1] = var01;
    };

    document.getElementById("diferenca").innerText = "A diferença entre eles é: " + diferenca;
    document.getElementById("dobro").innerText = "O dobro mais o triplo é: " + dobro;
    document.getElementById("multiplicacao").innerText = "Eles multiplicados: " + multiplicacao;
    document.getElementById("maiorMenor").innerText = "Em ordem decrescente: " + maiorMenor;
}
function exercicio02(){
    const nome = document.getElementById("nomeFuncionario").value;
    const bruto = document.getElementById("salarioBruto").value;
    const inss = bruto * 0.8;

    document.getElementById("nome").innerText = nome;
    document.getElementById("salario").innerText = bruto;
    document.getElementById("inss").innerText = inss;
    document.getElementById("liquido").innerText = bruto - inss;
    
}

function exercicio03() {
    const nome = document.getElementById("nomeFuncionario").value;
    const bruto = document.getElementById("salarioBruto").value;
    let inss = 1;

    if (bruto < 1000.01) {
        inss = bruto * 0.08;
    } else if (bruto > 1500) {
        inss = bruto * 0.09;
    } else {
        inss = bruto * 0.085;
    }

    document.getElementById("nome1").innerText = nome;
    document.getElementById("salario1").innerText = bruto;
    document.getElementById("inss1").innerText = inss;
    document.getElementById("liquido1").innerText = bruto - inss;

    if (salario1 < 1000.01) {
        const inss1 = salario1 * 0.08;
    } else if (salario1 > 1500) {
        const inss1 = salario1 * 0.09;
    } else {
        const inss1 = salario1 * 0.085;
    }
}