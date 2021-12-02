/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */


//  写一个函数，求两个整数之和，要求在函数体内不得使用 “+”、“-”、“*”、“/” 四则运算符号。
// 位运算




 var add = function(a, b) {
  while(b!==0){
      let c=(a&b)<<1
      a=a^b
      b=c
  }
  return a
};