/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//  给定两个字符串 s 和 t ，编写一个函数来判断它们是不是一组变位词（字母异位词）。

//  注意：若 s 和 t 中每个字符出现的次数都相同且字符顺序不完全相同，则称 s 和 t 互为变位词（字母异位词）。
 
 var isAnagram = function(s, t) {
  if(s===t) return false
  let need={},window={},vaild=0
  for(let i of s) need[i]=(need[i]||0)+1
  for(let i of t){
      if(need[i]){
          window[i]=(window[i]||0)+1
          if(window[i]===need[i]) vaild++
      }else return false

  } 
  if(vaild===Object.keys(need).length) return true
  return false
};