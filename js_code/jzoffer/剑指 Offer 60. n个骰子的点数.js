// 把n个骰子扔在地上，所有骰子朝上一面的点数之和为s。输入n，打印出s的所有可能的值出现的概率。
// 你需要用一个浮点数数组返回答案，其中第 i 个元素代表这 n 个骰子所能掷出的点数集合中第 i 小的那个的概率。

/**
 * @param {number} n
 * @return {number[]}
 */
//  dp[i][j] ，表示投掷完i枚骰子后，点数j的出现次数。
 var dicesProbability = function(n) {
  // 数组的长度
  // [n~6*n] 5n+1
      let dp=new Array(15).fill().map(()=>new Array(70).fill(0))
      for(let i=1;i<=6;i++) dp[1][i]=1

      for(let i=2;i<=n;i++){  //i骰子数，第几阶段
        for(let j=i;j<=6*n;j++){//j是点数和
          for(let cur=1;cur<=6;cur++){//当前的可能点数
            if(j-cur<=0) break
            dp[i][j]+=dp[i-1][j-cur]
          }
        }
      }
      let sum=Math.pow(6,n)
      let ans=[]
      for(let i=n;i<=6*n;i++){
        ans.push(dp[n][i]/sum)
      }
      return ans


};