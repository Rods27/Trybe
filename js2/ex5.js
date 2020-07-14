let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
menor = maior = 0
for(let i = 0; i < numbers.length; i++){
    if(i == 0){
        maior = menor = numbers[i]
    }
    if (numbers[i] > maior){
            maior = numbers[i]
    }
    else if(numbers[i] < menor){
            menor = numbers[i]
    }
}
console.log(maior)
console.log(menor)


