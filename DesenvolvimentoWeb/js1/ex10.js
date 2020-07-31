var custo = 450
var venda = 950
imposto = (custo * 20) / 100
custo += imposto
lucro = (venda - custo) * 1000
if(custo <= 0 || venda <= 0){
    console.log("Erro! Valores insuficientes, tente novamente!")
}else{
    console.log(lucro)
}

