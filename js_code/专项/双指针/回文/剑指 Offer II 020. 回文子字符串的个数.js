/**
 * @param {string} s
 * @return {number}
 */

//  给定一个字符串 s ，请计算这个字符串中有多少个回文子字符串。
//  具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

/*
解题思路
1.判断回文可以从字符串的两端向里移动指针来判断字符串是否是一个回文
2.本题的解题思路就是换一个方向从字符串的中心开始向两端延伸
3.如果存在一个长度为m的回文子字符串，则分别再向该回文的两端延伸一个字符，并判断回文前后的字符是否相同，如果相同就找到一个长度为m+2的回文子字符串
4.回文的长度既可以是奇数，也可以是偶数；长度为奇数的回文的对称中心只有一个字符；长度为偶数的回文的对称中心只有两个字符
*/

 var countSubstrings = function(s) {


  const countPalindrome=(s,start, end)=>{
    let count=0
    while(start>=0&&end<s.length&&s[start]===s[end]){
      end++;
      start--;
      count++
    }
    return count
  }

  let count=0;
  for(let i=0;i<s.length;i++){
    // 长度为奇数的回文的对称中心只有一个字符
    // 第i个字符本身可以成为长度为奇数的回文子字符串的对称中心
    count+=countPalindrome(s,i,i)
    // 长度为偶数的回文的对称中心只有两个字符
    // 第i个字符和第i+1个字符可以一起成为长度为偶数的回文子字符串的对称中心
    count+=countPalindrome(s,i,i+1)
  }
  return count 
};