// 求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

/**
 * @param {number} n
 * @return {number}
 */

/*
逻辑运算符的短路效应：
本题需要实现 “当 n = 1 时终止递归” 的需求，可通过短路效应实现。
n > 1 && sumNums(n - 1) // 当 n = 1 时 n > 1 不成立 ，此时 “短路” ，终止后续递归

*/

 var sumNums = function(n) {
  if(n===1) return 1
  return sumNums(n-1)+n

};

var sumNums = function(n) {
  n && (n += sumNums(n-1));
  return n;

};