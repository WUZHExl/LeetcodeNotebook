/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

//  给定两个 01 字符串 a 和 b ，请计算它们的和，并以二进制字符串的形式输出。

//  输入为 非空 字符串且只包含数字 1 和 0。

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