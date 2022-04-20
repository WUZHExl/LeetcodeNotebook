/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
`
nums1 中数字 x 的 下一个更大元素 是指 x 在 nums2 中对应位置 右侧 的 第一个 比 x 大的元素。

给你两个 没有重复元素 的数组 nums1 和 nums2 ，下标从 0 开始计数，其中nums1 是 nums2 的子集。

对于每个 0 <= i < nums1.length ，找出满足 nums1[i] == nums2[j] 的下标 j ，并且在 nums2 确定 nums2[j] 的 下一个更大元素 。如果不存在下一个更大元素，那么本次查询的答案是 -1 。

返回一个长度为 nums1.length 的数组 ans 作为答案，满足 ans[i] 是如上所述的 下一个更大元素 。
`
//单调栈
//定义stack栈中保存需要判断的元素的下标，栈顶元素是当前需要判断元素下标
//定义window,保存num2中每个数右边第一个比他大的数
var nextGreaterElement = function(nums1, nums2) {

  let stack=[],window={}
  let ans=new Array(nums1.length).fill(-1)
  for(let i=0;i<nums2.length;i++){

      while(stack&&nums2[i]>nums2[stack[stack.length-1]]){
          let index=stack.pop()  //这个是当前判断出结果的元素下标，num[i]是对应结果（大于小于）
          window[nums2[index]]=nums2[i]
      }
      stack.push(i)
  }
  //console.log(window)
  for(let i=0;i<nums1.length;i++){
      ans[i]=window[nums1[i]]||-1
  }
  return ans

};



//暴力遍历
 var nextGreaterElement = function(nums1, nums2) {

  let ans=[],curIndex=nums2.length
  for(let n1 of nums1){
      let flag=1
      curIndex=nums2.length
      for(let i=0;i<nums2.length;i++){
          if(nums2[i]===n1) curIndex=i
          if(nums2[i]>n1&&i>curIndex) {
              ans.push(nums2[i])
              flag=0
              break;
          }
      }
      if(flag===1) ans.push(-1)
  }
  return ans
};


