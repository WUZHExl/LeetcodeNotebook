/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
  for(i=0;i<ransomNote.length;i++)
  {
    let index=magazine.indexOf(ransomNote[i]);
    if(index===-1) return false;
    else
    {
      magazine=magazine.slice(0,index)+magazine.slice(index+1);
    }
  }
  return true;
};
// @lc code=end

