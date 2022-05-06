/**
 * @param {number[]} ratings
 * @return {number}
 */

`
n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。

你需要按照以下要求，给这些孩子分发糖果：

每个孩子至少分配到 1 个糖果。
相邻两个孩子评分更高的孩子会获得更多的糖果。
请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。
`
`
采用了两次贪心的策略：

一次是从左到右遍历，只比较右边孩子评分比左边大的情况。
一次是从右到左遍历，只比较左边孩子评分比右边大的情况。
`
 var candy = function(ratings) {


  let arr=new Array(ratings.length).fill(1)
  for(let i=1;i<ratings.length;i++){
      if(ratings[i]>ratings[i-1]) arr[i]=arr[i-1]+1
  }

  for(let i=ratings.length-1;i>0;i--){
      if(ratings[i-1]>ratings[i]) arr[i-1]=Math.max(arr[i]+1,arr[i-1])
  }

  return arr.reduce((a,b)=>a+b,0)
};