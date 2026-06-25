//conditional statements

//check postive,negative zero
/*let num=3
if (num>0){
    console.log("positive")
}
else if(num<0){
    console.log("negative")
}
else{
    console.log("zero")
}*/


//largest of three number
/*let a=9
let b=-3
let c=60
if(a>=b&&a>=c){
    console.log(a," greater")
}
else if(b>=a&&b>=c){
    console.log(b,"greater")
}
else{
    console.log(c,"greater")
}*/


//largest of two numbers using ternary operator
/*let a=9
let b=3
let largest=a>b?"a is greater":"b is greater"
console.log(largest)*/


//leap year 
/*let year=2026
if(year%4===0){
    console.log("leap")
}
else{
    console.log("not leap")
}*/


//check divible by 5 and 11
/*let num=50
if(num%5===0&&num%11===0){
    console.log(num,"divisible by both 5 and 11")
}
else{
    console.log(num,"not divisible")
}*/


//grade using marks
/*let marks=49
if (marks>=90&&marks<=100){
    console.log("A")
}
else if(marks>=75&&marks<90){
    console.log("B")
}
else if(marks>=50&&marks<75){
    console.log("C")
}
else{
    console.log("fail")
}*/


//electricity bill
/*let units=300
let bill
if(units<=100){
    bill=units*2
}
else if(units<=200){
    bill=(100*2)+((units-100)*3)
}
else{
    bill=(100*2)+(100*3)+((units-200)*5)
}
console.log(bill)*/


//check character is vowel or consonant
/*let ch="b"
if(ch==="a"||ch==="e"||ch==="i"||ch==="o"||ch==="u"||ch==="A"||ch==="E"||ch==="I"||ch==="O"||ch==="U"){
    console.log(ch,"vowel")
}
else{
    console.log(ch,"consonant")
}*/


//type of triangle
/*let a=5
let b=5
let c=5
if(a===b&&b===c&&c===a){
    console.log("equilateral")
}
else if(a===b||b===c||c===a){
    console.log("isosles")
}
else{
    console.log("scalene")
}*/


//menu driven calci using switch
/*let op=3 //case number
let a=2
let b=4
switch(op){
    case 1:
        console.log("add=",a+b)
        break
    case 2:
        console.log("sub=",a-b)
        break
    case 3:
        console.log("multi=",a*b)
        break
    default:
        console.log("invalid choice")

}*/


//loops

//print 1 to n using for
/*let n=10
for(i=0;i<=n;i++){
    console.log(i)
}*/

//print 1 to n using while
/*let n=10
let i=0
while(i<=n){
    console.log(i)
    i++
}*/

//print 1 to n using do while
/*let n=10
let i=0
do{
    console.log(i)
    i++
}
while(i<=n)*/


//print even numbers
/*let n=10
for(i=1;i<=n;i++){
    if(i%2===0)
    console.log(i)
}*/


//sum of n numbers
/*let num=10
let sum=0
for(i=1;i<=num;i++){
    sum+=i
}
console.log(sum)*/


//factorial of num
/*let num=3
let fact=1
for(i=1;i<=num;i++){
    fact*=i
}
console.log(fact)*/


//reverse a number
/*let num=1234
let rev=0
while(num>0){
    let d=num%10
    rev=rev*10+d
    num=Math.floor(num/10)
}
console.log(rev)*/


//palindrome
/*let num=131
let original=num
let rev=0
while(num>0){
    let d=num%10
    rev=rev*10+d
    num=Math.floor(num/10)
}
if(original===rev){
    console.log("palindrome")
}
else {
    console.log("not palindrome")
}*/


//armstrong number(sum of the digits raised to the power of number of digits(132=1^3+3^3+2^3))

//checking
/*let num=153
let original=num
let digits=num.toString().length
let sum=0
while(num>0){
    let digit=num%10
    sum+=digit**digits
    num=Math.floor(num/10)
}
if(sum===original){
    console.log("armstrong")
}
else{
    console.log("not armstrong")
}*/

//printing
/*for(let n=1;n<=1000;n++){
    let original=n
    let temp=n
    let digits=n.toString().length
    let sum=0
    while(temp>0){
        let digit=temp%10
        sum+=digit**digits
        temp=Math.floor(temp/10)
    }
if(sum===original){
    console.log(original)
}
}*/

