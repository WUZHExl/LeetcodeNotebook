/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//     for(i=0;i<s.length;i++)
//     {
//       let index=t.indexOf(s[i]);
//       if(index===-1) return false;
//       else t=t.slice(0,index)+t.slice(index+1);
//     }
//     if(t.length!==0) return false;
//     else return true;
// };

// var isAnagram = function(s,t){
//   let m1=new Map();
//   if(s.length>t.length) [s,t]=[t,s];
//   for(i=0;i<s.length;i++)
//   {
//     if(m1.has(s[i])===false) m1.set(s[i],1);
//     else{
//       let num=m1.get(s[i]);
//       m1.set(s[i],num+1);
//     }
//   }
//   for(i=0;i<t.length;i++)
//   {
//     if(m1.has(t[i])===false||m1.get(t[i])===0) return false;
//     else{
//       let num=m1.get(t[i]);
//       m1.set(t[i],num-1);
//     }
//   }
//   return true;
// }

var isAnagram = function(s,t){
  return s.split('').sort().join('')===t.split('').sort().join('') ? true : false;
}

// @lc code=end

