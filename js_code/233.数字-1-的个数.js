/*
 * @lc app=leetcode.cn id=233 lang=javascript
 *
 * [233] 数字 1 的个数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
  let sum=0,index=1
  for(let k=0;n>=index;k++){
    sum+=Math.floor(n/(index*10))*index+Math.min(Math.max(n%(index*10)-index+1,0),index)
    index*=10
  }
  return sum
};


// var countDigitOne = function(n) {

//     let dp=[]
//     const sum=(x)=>{
//         let sum=0,num=0
//         while(x){
//             a=x%10
//             x=Math.floor(x/10)
//             if(a===1) sum+=1
//             // console.log(a,n)
//         }
//         return sum;
//     }
//     // dp[0]=0,dp[1]=1
//     // for(i=2;i<=n;i++){
//     //     dp[i]=dp[i-1]+sum(i)
//     // }
//     // return dp[n]
//     let pre=0
//     for(let i=1;i<=n;i++){
//         pre=pre+sum(i)
//     }
//     return pre

// };




// @lc code=end

