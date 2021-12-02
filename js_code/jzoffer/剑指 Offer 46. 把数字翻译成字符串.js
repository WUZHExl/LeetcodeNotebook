//动态规划
////////////////////////////////
/*
给定一个数字，我们按照如下规则把它翻译为字符串：
0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。
请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。
*/

/*

​设 dp[i] 代表以 x_i为结尾的数字的翻译方案数量,一共有n位数
初始状态： dp[0] = dp[1] = 1，即 “无数字” 和 “第 1位数字” 的翻译方法数量均为 1 ；
返回值： dp[n] ，即此数字的翻译方案数量。
 */

/**
 * @param {number} num
 * @return {number}
 */
//  var translateNum = function(num) {
//     let dp=[],s=num.toString()
//     dp[0]=dp[1]=1
//     for(let i=2;i<=s.length;i++){
//       temp=s.slice(i-2,i)
//       dp[i]=temp>='10' && temp<='25' ? dp[i-1]+dp[i-2]:dp[i-1]
//     }
//     console.log(dp[s.length])
//     return dp[s.length]
// };


var translateNum = function(num) {
  let s=num.toString()
  let prea=preb=1
  for(let i=2;i<=s.length;i++){
    temp=s.slice(i-2,i)
    now=temp>='10' && temp<='25' ? prea+preb:preb
    prea=preb
    preb=now
  }
  console.log(preb)
  return preb
};

translateNum(12258)