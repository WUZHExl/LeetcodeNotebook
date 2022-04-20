`
给你一个整数数组 nums 和一个整数 k ，按以下方法修改该数组：

选择某个下标 i 并将 nums[i] 替换为 -nums[i] 。
重复这个过程恰好 k 次。可以多次选择同一个下标 i 。

以这种方式修改数组后，返回数组 可能的最大和 

`
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var largestSumAfterKNegations = function(nums, k) {


  nums.sort((a,b)=>Math.abs(b)-Math.abs(a))//按照绝对值大小，从大到小排序

  for(let i=0;i<nums.length;i++){//遍历数组，遇到小于0的，取反
      if(nums[i]<0&&k>0){
          nums[i]=-nums[i]
          k--
      }
  }

  //若k仍大于0，此时数组全为正值
  //k为奇数时，改变
  if(k>0&&k%2===1) nums[nums.length-1]*=-1
  
  return nums.reduce((a,b)=>a+b)
};