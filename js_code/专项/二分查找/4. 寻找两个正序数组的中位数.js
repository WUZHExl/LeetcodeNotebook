

`
给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

算法的时间复杂度应该为 O(log (m+n)) 。
`
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
  let i=0,j=0,ans=[],index=0

  //先把两个数组合并
  while(i<nums1.length&&j<nums2.length) ans[index++]=nums1[i]<=nums2[j]?nums1[i++]:nums2[j++]
  while(i<nums1.length) ans[index++]=nums1[i++]
  while(j<nums2.length) ans[index++]=nums2[j++]
  let n=ans.length

  //如果时合并后数组长度为偶数
  if(n%2==0){
      let a=Math.floor((n+1)/2),b=Math.ceil((n+1)/2)
      return ((ans[a-1]+ans[b-1])/2).toFixed(5)
  }else{
    //长度为奇数，取中点就可以
      let a=(n+1)/2
      return    ans[a-1].toFixed(5)
  }
};