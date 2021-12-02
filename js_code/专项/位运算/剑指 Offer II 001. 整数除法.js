/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

//  给定两个整数 a 和 b ，求它们的除法的商 a/b ，要求不得使用乘号 '*'、除号 '/' 以及求余符号 '%' 。
// 注意：本题与主站 29 题相同：https://leetcode-cn.com/problems/divide-two-integers/

// 1. 减法代替除法
 var divide = function(a, b) {
  //  判断边界
  if(a===Math.pow(-2,31)&&b===-1) return Math.pow(2,31)-1
  // 判断正负
  let sign=a*b>0?1:-1
  a=Math.abs(a)
  b=Math.abs(b)

 let sum=0
  while(a-b>=0){
    a=a-b
    sum++
  }
  return sign===1?sum:-sum
};

// 2.位运算