
/*
 如果将数组 nums 中的所有元素按照单调递增或单调递减的顺序排序，
 那么下标为 ⌊ n/2⌋的元素（下标从 0 开始）一定是众数

 */

 var majorityElement = function(nums) {
  nums.sort((a,b)=>a-b)
  return nums[Math.floor(nums.length/2)]
};


/*
摩尔投票法
用每一个出现最多的数和其他不同的数抵消，因为最多的数大于一半，所以最后剩下的肯定就是最多的数。
用count来表示抵消，相同+1，不同抵消-1。
一开始假设nums[0]是最大的数，如果遍历开始就发现count==0，被抵消了，那么马上换最大值。
*/

var majorityElement = function(nums) {
    let count=1,temp=nums[0]
    for (let i=1; i<nums.length; i++){
      if(count===0){
        temp=nums[i]
      }
      if(temp===nums[i]) count++;
      else count--
    }
    return temp
};
