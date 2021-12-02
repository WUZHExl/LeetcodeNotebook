/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//  给定一个整数数组和一个整数 k ，请找到该数组中和为 k 的连续子数组的个数。
// 这个题目并不能用双指针法解决，是因为题目中的数组并没有说明是由正整数来组成的，
// 因此不能保证在子数组中添加新的数字就能得到和更大的子数组，同样也不能保证删除子数组最左边的数字就能得到和更小的子数组

// 什么是前缀和？前缀和是一个数组的某项下标之前(包括此项元素)的所有数组元素的和

// 即用一个数组b其中b[i]记录的是原数组a[0]到a[i]的和

 var subarraySum = function(nums, k) {
      let pre_sum=0,count=0;
      let mp=new Map()  //哈希表的键是前i个数字之和，值为每个和出现的次数
      mp.set(0,1)
      for(let n of nums) {
        pre_sum+=n         //计算前缀和，表示从0到当前位置的数组和
        // 数组的前i个数字之和记为x，如果存在一个j(j<i)，数组的前j个数字之和为x-k，
        // 那么数组中从第j+1个数字开始到第i个数字结束的子数组之和为k
        count+=mp.get(pre_sum-k)||0                   //为什么不直接用mp.get(k)？ 因为k值不能用前缀和表示
        mp.set(pre_sum,(mp.get(pre_sum)||0)+1)         //设置键值
      }
      return count

};