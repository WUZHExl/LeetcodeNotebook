/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

//超时
// var myPow = function(x, n) {
//     let sum=1,temp
//     if(n===0) return sum;
//     else if(n>0){
//         for(i=0;i<n;i++){
//             sum=sum*x
//         }
//         return sum.toFixed(5)
//     }
//     else if(n<0){
//         temp=1/x;
//         for(i=0;i<Math.abs(n);i++){
//             sum=sum*temp
//         }
//         return sum.toFixed(5)
//     }
// };

//通过
//递归
var myPow = function(x, n) {
  if(n === 0) return 1;
  if(n === 1) return x;
  if(n === -1) return 1/x;
  if(n%2===0){
      let a = myPow(x,n/2);
      return a * a
  }
  else{
      let b = myPow(x,(n-1)/2);
      return b*b*x
  }
};

/*
使用递归的方法：

n=0时，任何x都返回1
n=1时，返回x
n=-1时，返回1/x
对于其他n值：

当n为偶数时，myPow(x,n) = myPow(x,n/2)* myPow(x,n/2)
当n为奇数时：myPow(x,n) = myPow(x,(n-1)/2) * myPow(x,(n-1)/2) * x
注意
递归时先用一个变量取得myPow(x,n/2)的值再平方，可以降低时间复杂度（减少递归调用的次数）
 */