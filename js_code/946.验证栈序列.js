/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  let temp=[],num=0
  for(i of pushed){
      temp.push(i)//入栈
      while(temp.length!==0&&temp[temp.length-1]===popped[num]){
          temp.pop()
          num++;
      }
  }
  return temp.length===0
};
// @lc code=end

