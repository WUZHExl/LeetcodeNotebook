/**
 * @param {number} n
 * @return {number}
 */
`
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
`

//设dp[i]表示到达第i个台阶有几种方法
 var climbStairs = function(n) {

    let dp=new Array(n)
    dp[1]=1,dp[0]=1
    for(let i=2;i<=n;i++){
      dp[i]=dp[i-1]+dp[i-2]  //每次只能走一步或两步 
    }
    return dp[n]
};