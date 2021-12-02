/**
 * @param {number} n
 * @return {number[]}
 */

//  给定一个非负整数 n ，请计算 0 到 n 之间的每个数字的二进制表示中 1 的个数，并输出一个数组。

/*
位运算：
使用Brian Kernighan 算法，原理是：
对于任意整数 x，令x=x & (x−1)，该运算将 x 的二进制表示的最后一个 1 变成 0。
因此，对 x 重复该操作，直到 x 变成 0，则操作次数即为 x 的「一比特数」。
*/

 var countBits = function(n) {
    const countOne=(x)=>{
      let count=0;
      while(x>0){
        x=x&(x-1)
        count++;
      }
      return count;
    }
    let res=[]
    for(let i=0;i<=n;i++){
      res[i]=countOne(i)
    }
    return res;
};

// 2.位运算+动态规划

var countBits = function(n) {
  let ans=[]
  ans[0]=0
  for(let i=1;i<=n;i++)
  {
    // ans[i]=i%2===0?ans[i>>1]:ans[i>>1]+1
    // ans[i]=ans[i>>1]+Math.floor(i%2)
    ans[i]=ans[i>>1]+(i&1)
  }
  return ans
};