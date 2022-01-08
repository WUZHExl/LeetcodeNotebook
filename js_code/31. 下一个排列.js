/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

`
实现获取 下一个排列 的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列（即，组合出下一个更大的整数）。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须 原地 修改，只允许使用额外常数空间。

`


 var nextPermutation = function(nums) {


      let swap=(l,r)=>{
        [nums[l],nums[r]]= [nums[r], nums[l]]
      }
      let l=-1,r=nums.length

      for(let i=r;i>=0;i--){//从右向左找第一个比右邻居小的数，把它换到后面去
          if(nums[i]>nums[i-1]) l=i-1,i=0
      }

      
      if(l!==-1){ 
        for(let i=r;i>l;i--){
          if(nums[i]>nums[l]) swap(i,l),i=0
        }
      }

      while(++l<--r) swap(l,r)

};

function nextPermutation(nums) {
  let i = nums.length - 2;                   // 向左遍历，i从倒数第二开始是为了nums[i+1]要存在
  while (i >= 0 && nums[i] >= nums[i + 1]) { // 寻找第一个小于右邻居的数
      i--;
  }
  if (i >= 0) {                             // 这个数在数组中存在，从它身后挑一个数，和它换
      let j = nums.length - 1;                // 从最后一项，向左遍历
      while (j >= 0 && nums[j] <= nums[i]) {  // 寻找第一个大于 nums[i] 的数
          j--;
      }
      [nums[i], nums[j]] = [nums[j], nums[i]]; // 两数交换，实现变大
  }
  // 如果 i = -1，说明是递减排列，如 3 2 1，没有下一排列，直接翻转为最小排列：1 2 3
  let l = i + 1;           
  let r = nums.length - 1;
  while (l < r) {                            // i 右边的数进行翻转，使得变大的幅度小一些
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++;
      r--;
  }
}

