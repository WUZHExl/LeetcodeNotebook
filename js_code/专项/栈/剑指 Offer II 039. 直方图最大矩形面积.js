/**
 * @param {number[]} heights
 * @return {number}
 */


// 暴力解法//超时
 var largestRectangleArea = function(heights) {

    let maxArea=0;
    for(let left=0;left<heights.length;left++) {
      let minHeight=heights[left];
      for(let right=left;right<heights.length;right++){
        minHeight=Math.min(minHeight,heights[right]);
        maxArea=Math.max(maxArea,(right-left+1)*minHeight);
      }
    }
    return maxArea;

};
`
1.栈中保存的是柱子在数组中的下标，可以根据下标得到柱子的高度
2.确保保存在栈中的直方图的柿子的高度是递增排序的，假设从左到右逐一扫描数组中的每根柱子。
3.如果当前柱子的高度大于位于栈顶的柱子的高度，那么将该柱子的下标入栈；
4.否则将位于栈项的柱子的下标出栈，并且计算以位于栈项的柱子为顶的最大矩形面积
`

// 单调栈
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
}

