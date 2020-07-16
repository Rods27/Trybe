let n = 4;
let linha = '';
let simbolo = '*'
posicaoColunaInicial = n;

for (let i = 0; i <= n; i ++){
   linha+=(simbolo);
    for (let colunaAtual = 0; colunaAtual < n; colunaAtual++) {
        if (i2 < posicaoColunaInicial){
            linha += " ";
    }else{
        linha += simbolo;
    }
}

console.log(linha);
linha = "";
posicaoColunaInicial = posicaoColunaInicial -1;
}