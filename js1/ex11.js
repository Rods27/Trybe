var salario = prompt("Qual seu salário? ")
inss = 0
impostoDeRenda = 0

if(salario <= 1556.94){
    inss = salario * 0.08 
}
else if(salario <= 2594.92){
    inss = salario * 0.09 
}
else if (salario <= 5189.82){
    inss = salario * 0.11
}else{
inss = 570.88
}
salarioBruto = salario - inss

if(salarioBruto > 1903.98 && salarioBruto <= 2826.65){
    impostoDeRenda = salarioBruto* 0.075 - 142.8
}

else if(salarioBruto <= 3751.05){
    impostoDeRenda = salarioBruto* 0.15 - 354.8
}

else if(salarioBruto <= 4664.68){
    impostoDeRenda = salarioBruto* 0.225 - 636.13
}else{
impostoDeRenda = salarioBruto* 0.275 - 869.36
}
salarioFinal = salarioBruto - impostoDeRenda
console.log(salarioFinal)