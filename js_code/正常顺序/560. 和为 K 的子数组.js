/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//  前缀和 + 哈希表优化
 var subarraySum = function(nums, k) {

  let mp=new Map()
  mp.set(0,1)
  let count=0,pre=0
  for(let n of nums){
      pre+=n
      if(mp.has(pre-k)){
          count+=mp.get(pre-k)
      }
      mp.set(pre,mp.get(pre)+1||1)
  }
  return count
};

// 
var subarraySum = function(nums, k) {
  let count = 0;
  for (let start = 0; start < nums.length; ++start) {
      let sum = 0;
      for (let end = start; end >= 0; --end) {
          sum += nums[end];
          if (sum == k) {
              count++;
          }
      }
  }
  return count;
};

