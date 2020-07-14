let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
sum = 0
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]
    media = sum / numbers.length 
}
if(media > 20){
    console.log("Valor maior que 20")
    console.log(media)
}else{
    console.log("Valor menor ou igual a 20")
    console.log(media)
}
