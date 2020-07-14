const a = 3
const b = 4
const c = 2

if((a==0 || b==0 || c==0) || (a+b<c || a+c<b || b+c<a)){
    console.log(false)

}else{
    console.log(true)
}