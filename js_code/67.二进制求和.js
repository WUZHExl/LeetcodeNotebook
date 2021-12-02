/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let res=''
  let l1=a.length-1,l2=b.length-1
  let carry=0
  while(l1>=0||l2>=0) {
    let numa=l1>=0?a[l1]-'0':0
    let numb=l2>=0?b[l2]-'0':0

    let sum=numa+numb+carry
    res+=sum%2
    carry=Math.floor(sum/2)

    l1--
    l2--
  }
  if(carry) res+=carry
  return res.split("").reverse().join('')
};
// @lc code=end

