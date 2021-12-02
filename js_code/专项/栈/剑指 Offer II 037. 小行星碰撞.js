/**
 * @param {number[]} asteroids
 * @return {number[]}
 */


/*
首先，循环每一个元素时，在什么情况下无脑入栈呢？

栈为空
栈顶元素为负数(下一个为负数则一起向左，下一个为正数则分向两边)
当前元素为正数（栈顶为正一起向右，栈顶为负分向两边）
下来，我们需要看碰撞的场景又细分为什么情况：

栈顶元素大于abs(当前元素)，当前元素被撞毁
栈顶元素等于abs(当前元素)，栈顶弹出和当前元素抵消
栈顶元素小于abs(当前元素)，栈顶弹出，并与新栈顶完成上述判断
*/
 var asteroidCollision = function(asteroids) {

  let stack=[]
  let i=0
  while(i<asteroids.length){
      if(stack.length===0||stack[stack.length-1]<0||asteroids[i]>0){
          stack.push(asteroids[i])
      }
      else if(stack[stack.length-1]<=-asteroids[i]){
          if(stack.pop()<-asteroids[i]) continue
      }
      // i++表示当前元素被销毁
      i++
  }
  return stack
};