/**
 * @param {string} s
 * @return {boolean}
 */

//  给定一个非空字符串 s，请判断如果 最多 从字符串中删除一个字符能否得到一个回文字符串。
// 本题与主站 680 题相同： https://leetcode-cn.com/problems/valid-palindrome-ii/
/*
解题思路
1.从字符串的两端开始向里逐步比较两个字符串是不是相同
2.如果相同则继续向里移动指针比较里面的两个字符
3.如果不相同，在删除一个字符之后再比较其它的字符就能够形成一个回文
4.由于事先不知道应该删除两个不同字符中的哪一个，因此两个字符都进行尝试
*/

 var validPalindrome = function(s) {
   
  let l=0,r=s.length-1
  //辅助函数，判断是不是回文
  const isPalindrome=(s,start,end)=>{
      while(start<=end){
          if(s[start]!==s[end]) return false
          start++
          end--
      }
      return true
  }
  while(l<=r){
      if(s[l]!==s[r]) break;
      l++
      r--
  }
  return isPalindrome(s,l+1,r)||isPalindrome(s,l,r-1)||l>r
};