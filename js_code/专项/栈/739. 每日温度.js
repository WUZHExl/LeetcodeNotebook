/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

`
给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指在第 i 天之后，才会有更高的温度。如果气温在这之后都不会升高，请在该位置用 0 来代替。
`

var dailyTemperatures = function(T) {
  const res = new Array(T.length).fill(0)
  const stack = []
  for (let i = T.length - 1; i >= 0; i--) {

    // 若栈中有元素，且当前元素大于等于栈顶所指元素
    while (stack.length && T[i] >= T[stack[stack.length - 1]]) {
      //则栈顶元素出栈 
      stack.pop()
    }
    // 若栈中有元素，且当前元素小于栈顶所指元素
    if (stack.length) {
        // 得到一个答案
        // 从右向左找第一个小于栈顶元素的值
      res[i] = stack[stack.length - 1] - i
    }
    // 当前元素下标入栈
    stack.push(i)
  }
  return res
};


var dailyTemperatures = function(T) {
  const res = new Array(T.length).fill(0)
  const stack = []
  for(let i=0;i<T.length;i++){
      // 若当前元素大大于栈顶元素所指元素
      while(stack.length!==0&&T[i]>T[stack[stack.length-1]]){
        //栈顶元素出栈
        //对应的答案选取
        let preIndex=stack.pop()
        res[preIndex]=i-preIndex
      }
      stack.push(i)
  }
  return res
};