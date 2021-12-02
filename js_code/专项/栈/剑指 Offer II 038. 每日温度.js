/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

//  请根据每日 气温 列表 temperatures ，重新生成一个列表，要求其对应位置的输出为：
//  要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

 var dailyTemperatures = function(temperatures) {

  let stack=[]
  let l=0,r=0
  while(l<temperatures.length){
      while(temperatures[r]<=temperatures[l]) r++
      if(r<temperatures.length) 
      {
          stack.push(r-l)
      }
      else stack.push(0)
      l++
      r=l
      
  }
  return stack

};