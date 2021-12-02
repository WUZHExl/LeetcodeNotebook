/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */

/*
首先，我们可以利用通用的进制转换思路来做，不断循环 num % k 和 num / k 的操作来构造出 k 进制每一位。
但需要处理「补码」问题：对于负数的 num，我们需要先在num基础上加上 2^32的偏移量，再进行进制转换。
*/


// String.prototype.charCodeAt():返回字符串指定位置的 Unicode 码点
// 字符串变成对应ASCII码数字

// String.fromCharCode()：该方法的参数是一个或多个数值，代表 Unicode 码点，返回值是这些码点组成的字符串。
// 数字变成字符串


var toHex = function(num) {
  let temp=num,a,b,ans=[]
  if(temp < 0)    temp += 2**32;
  if(temp === 0) return "0"
  while(temp!==0){
      a=temp%16  //低位数
      b=a+''
      if(a>=10){
          b=String.fromCharCode((a-10)+'a'.charCodeAt())
      }
      ans.push(b)
      temp=Math.floor(temp/16)
  }
  return ans.reverse().join('')
};
// @lc code=end

