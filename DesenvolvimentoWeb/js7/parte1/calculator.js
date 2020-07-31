function squareNumber(num){
    square = num * num
    return square;
}
function halfThisNumber(num){
    half = num / 2
    return half;
}
function fraction (num1,num2){
    percentage = (num1*num2) /100
    return percentage;
}
function areaOfCircle (radius){
    area = Math.PI * squareNumber(radius)
    return area;
}

var squareButton = document.getElementById('square-button');
squareButton.addEventListener('click', function() {
    var num = document.getElementById('square-input').value;
    document.getElementById('solution').innerHTML = squareNumber(num);
});

var halfButton = document.getElementById('half-button');
halfButton.addEventListener('click', function() {
    var num = document.getElementById('half-input').value;
    document.getElementById('solution').innerHTML = halfThisNumber(num);
})

var percentButton = document.getElementById('percent-button');
percentButton.addEventListener('click', function(){
    var num1 = document.getElementById('percent1-input').value;
    var num2 = document.getElementById('percent2-input').value;
    document.getElementById('solution').innerHTML = fraction(num1,num2);
})

var areaButton = document.getElementById('area-button');
areaButton.addEventListener('click', function(){
    var radius = document.getElementById('area-input').value;
    document.getElementById('solution').innerHTML = areaOfCircle(radius);
})