
/*
以除数和余数反复做除法运算，当余数为 0 时，取当前算式除数为最大公约数

*/


function gcd( a ,  b ) {
  // write code here
  let temp
  if(a>b) {[a,b]=[b,a]}
  let num1=a,num2=b
  while(a>0){
      temp=b%a,
      b=a,
      a=temp
  }
  //公约数
  return b
  //公倍数
  // console.log(num1*num2/b)
  
}
gcd(3,5)