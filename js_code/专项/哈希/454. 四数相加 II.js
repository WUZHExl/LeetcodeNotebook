/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
`
给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：
0 <= i, j, k, l < n
nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
`
`
本题解题步骤：

首先定义 一个unordered_map，key放a和b两数之和，value 放a和b两数之和出现的次数。
遍历大A和大B数组，统计两个数组元素之和，和出现的次数，放到map中。
定义int变量count，用来统计 a+b+c+d = 0 出现的次数。
在遍历大C和大D数组，找到如果 0-(c+d) 在map中出现过的话，就用count把map中key对应的value也就是出现次数统计出来。
最后返回统计值 count 就可以了
`
 var fourSumCount = function(nums1, nums2, nums3, nums4) {

  let window={},count=0

  for(let n1 of nums1){
      for(let n2 of nums2){
          let temp=n1+n2
          window[temp]=(window[temp]||0)+1
      }
  }

  for(let n3 of nums3){
      for(let n4 of nums4){
          if(window[0-n3-n4]){
              count+=window[0-n3-n4]
          }
      }
  }
  return count
};