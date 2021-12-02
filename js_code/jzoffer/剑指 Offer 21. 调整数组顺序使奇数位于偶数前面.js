/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
  let n=nums.length
  let ans=new Array(n),l=0,r=n-1
  for(i of nums){
      if(i%2===0){
          ans[r]=i
          r--
      }else
      {
          ans[l]=i
          l++
      }
  }
  return ans

};