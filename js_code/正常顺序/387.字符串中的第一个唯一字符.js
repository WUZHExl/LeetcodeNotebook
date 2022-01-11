/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var firstUniqChar = function(s) {
//     const m=new Map();
//     for(i=0;i<s.length;i++) {
//       if(m.has(s[i])===false)
//       {
//         m.set(s[i],1)
//       }
//       else
//       {
//         num=m.get(s[i])
//         m.set(s[i],num+1)
//       }
//     }
//     for(i=0;i<s.length;i++)
//     {
//       if(m.get(s[i])===1)
//       {
//         return i
//       }
//     }
//     return -1;
// };


var firstUniqChar = function(s){
   for(i=0;i<s.length;i++){
       if(s.indexOf(s[i])===s.lastIndexOf(s[i])&&s.indexOf(s[i])!==-1) return i
   }
   return -1
}

// @lc code=end

