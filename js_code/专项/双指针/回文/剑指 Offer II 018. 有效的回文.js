/**
 * @param {string} s
 * @return {boolean}
 */

//  给定一个字符串 s ，验证 s 是否是 回文串 ，只考虑字母和数字字符，可以忽略字母的大小写。
//  本题中，将空字符串定义为有效的 回文串 。

 var isPalindrome = function(s) {

  let news=""
  for(let i of s){
      if((i<='z'&&i>='a')||(i>='0'&&i<='9')) news+=i
      else if(i<='Z'&&i>='A') news+=i.toLowerCase()
  }
  let l=0,r=news.length-1
  while(l<=r){
      if(news[l]!==news[r]) return false
      l++
      r--
  }
  return true
};