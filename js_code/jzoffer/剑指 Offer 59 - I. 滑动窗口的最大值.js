/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
  let i=j=0,ans=[]
  while(j<nums.length){
      while(j<nums.length&&j-i+1!==k) j++
      if(j<nums.length&&j-i+1===k) ans.push(Math.max(...nums.slice(i,j+1)))
      i++
  }
  return ans
};