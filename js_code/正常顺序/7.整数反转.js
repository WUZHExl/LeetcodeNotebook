/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
//  var reverse = function(x) {
      
//       let a,b,ans=0,temp=[],index=0
//       b=x>=0?x:-x
//       while(b!==0){
//           a=b%10
//           temp.push(a)
//           b=Math.floor(b/10)
//       }
//       for(let i=temp.length-1;i>=0;i--) {
//             ans+=temp[i]*Math.pow(10,index)
//             index++
//         }
//       if(ans>Math.pow(2,31)-1||ans<Math.pow(-2,31)) return 0
//       if(x<0) return -1*ans
//       return ans
  
// };

var reverse = function(x) {
      
  let a,b,ans=0
  b=x>=0?x:-x
  while(b!==0){
      a=b%10     //末尾的
      ans=ans*10+a
      b=Math.floor(b/10)
  }
  if(ans>Math.pow(2,31)-1||ans<Math.pow(-2,31)) return 0
  if(x<0) return -1*ans
  return ans

};
// @lc code=end

