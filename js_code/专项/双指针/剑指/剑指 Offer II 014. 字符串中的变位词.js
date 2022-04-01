/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

//  给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的某个变位词。
//  换句话说，第一个字符串的排列之一是第二个字符串的 子串 。
// 注意：本题与主站 567 题相同： https://leetcode-cn.com/problems/permutation-in-string/
/*
滑动窗口的解题思路
1.我们在字符串 S 中使用双指针中的左右指针技巧，初始化 left = right = 0，把索引闭区间 [left, right] 称为一个「窗口」。
2.我们先不断地增加 right 指针扩大窗口 [left, right]，直到窗口中的字符串符合要求（包含了 t 中的所有字符）
3.我们停止增加 right，转而不断增加 left 指针缩小窗口 [left, right]，直到窗口中的字符串不再符合要求（不包含 T 中的所有字符了）。同时，每次增加 left，我们都要更新一轮结果
4.重复第 2 和第 3 步，直到 right 到达字符串 S 的尽头

这个思路的本质就是:增加窗口右边界，寻找一个可行解，在找到可行解的情况下增加窗口左边界，优化可行解，找到最优解
*/

 var checkInclusion = function(s1, s2) {
  let count={}//对象代替Map计数
  let window={} //窗口中的字符、s2
  for(let i of s1) count[i]=(count[i]||0)+1
  let l=0,r=0 
  let valid=0 //s1中验证的字符
  while(r<s2.length){
      // 即将移入窗口的字符
      let c=s2[r]
      r++
      if(count[c]){
        // 当前字符在需要的字符中，则更新当前窗口统计
          window[c]=(window[c]||0)+1
          // 当前窗口和需要的字符匹配时，验证数量增加1
          if(window[c]===count[c]) valid++ 
      }

      while(r-l>=s1.length){
          if(valid===Object.keys(count).length) return true

          //左移，出窗口的字符
          let d=s2[l]
          l++

          if(count[d]){
              //若移出窗口的字符巧好匹配，那么验证数量-1
              if(window[d]===count[d]) valid--
              window[d]--
          }
      }
  }

  return false
};