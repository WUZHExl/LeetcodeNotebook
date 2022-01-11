/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
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
// @lc code=end

