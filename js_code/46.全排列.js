/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const ans=[],track=[]
  // const use=new Array(nums.length).fill(false)
  const backtracking=(nums,track)=>{
      // 路径：记录在 track 中
      // 选择列表：nums 中不存在于 track 的那些元素
      // 结束条件：nums 中的元素全都在 track 中出现
      if(track.length===nums.length){
          ans.push(track.slice())
          return ;
      }

      for(let i=0;i<nums.length;i++){
          //排除不合法的选择
          if(track.indexOf(nums[i])!==-1) continue;
          // if(use[i]) continue;
          track.push(nums[i])
          // use[i]=true;
          backtracking(nums,track)
          track.pop()
          // use[i]=false;
      }
  }

  backtracking(nums,track)
  return ans
};
// @lc code=end

