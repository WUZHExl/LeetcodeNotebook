/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
`
给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
`
`
1.首先新建一个Map对象，然后使用循环对元素的频率进行统计
2.接着将字典转成数组，然后对数组中的第二个元素（频度）从小到大排序
3.最后截取频率前k高的元素返回即可
`
 var topKFrequent = function(nums, k) {

  let map=new Map()
  for(let n of nums){
      map.set(n,map.has(n)?map.get(n)+1:1)
  }

  let ans=Array.from(map).sort((a,b)=>b[1]-a[1]) //按照键值从大到小排序
  return ans.slice(0,k).map(item=>item[0])

};