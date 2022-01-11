/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

// 双指针
var reverseWords = function(s) {
    s=s.trim()
    let i=s.length-1,j=s.length-1
    let ans=[]
    while(i>=0){
      while(i>=0&&s[i]!==' ') i=i-1 //跳出循环后，i=单词开头前的空格
      ans.push(s.slice(i+1,j+1))
      while(i>=0&&s[i]===' ') i=i-1 //寻找下一个单词的结尾
      j=i
    }
    return ans.join(' ')
};

// 使用JS内置函数
var reverseWords = function(s) {
  s=s.trim()
  // console.log(s.split(/  */).reverse())
  return s.split(/  */).reverse().join(' ')
};
// @lc code=end

