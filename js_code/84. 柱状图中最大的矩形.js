/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(heights) {
  let stack=[-1];
  let maxArea=0;
  for(let i=0;i<heights.length;i++){
    while(stack[stack.length-1]!==-1&&
      heights[stack[stack.length-1]]>=heights[i]){
      let height=heights[stack[stack.length-1]]
      stack.pop()
      let width=i-stack[stack.length-1]-1
      maxArea=Math.max(maxArea,height*width)
    }
    stack.push(i)
  }

  while(stack[stack.length-1]!==-1){
    let height=heights[stack[stack.length-1]]
    stack.pop()
    let width=heights.length-stack[stack.length-1]-1
    maxArea=Math.max(maxArea,height*width)
  }

  return maxArea
};