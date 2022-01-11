// 双指针
/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  let l=0,r=height.length-1
  let maxArea=0
  while(l<r){
      tempArea=Math.min(height[l],height[r])*(r-l)
      maxArea=Math.max(maxArea,tempArea)
      if(height[l]<=height[r]) l++
      else r--
  }
  return maxArea
};