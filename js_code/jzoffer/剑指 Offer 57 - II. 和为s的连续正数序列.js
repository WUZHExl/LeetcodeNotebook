// 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
// 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。
/**
 * @param {number} target
 * @return {number[][]}
 */
 var findContinuousSequence = function(target) {
  let slow=1,fast=2,ans=[]
  while(slow<fast){
    let sum=Math.floor((slow+fast)*(fast-slow+1)/2)
    if(sum===target){
      let temp=[]
      for(let i=slow;i<=fast;i++)  temp.push(i)
      ans.push(temp)
      slow++
    }else if(sum<target)
    {
      fast++
    }else if(sum>target){
      slow++
    }
  }
  return ans

};