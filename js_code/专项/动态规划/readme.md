> 五步曲，这五步都搞清楚了，才能说把动态规划真的掌握了！

1. 确定dp数组（dp table）以及下标的含义
2. 确定递推公式
3. dp数组如何初始化
4. 确定遍历顺序
5. 举例推导dp数组



## 背包问题

> 有n件物品和一个最多能背重量为w 的背包。第i件物品的重量是weight[i]，得到的价值是value[i] 。每件物品只能用一次，求解将哪些物品装入背包里物品价值总和最大。

> 使用二维数组，即dp[i][j] 表示从下标为[0-i]的物品里任意取，放进容量为j的背包，价值总和最大是多少。

> 那么可以有两个方向推出来dp[i][j]，
不放物品i：由dp[i - 1][j]推出，即背包容量为j，里面不放物品i的最大价值，此时dp[i][j]就是dp[i - 1][j]。(其实就是当物品i的重量大于背包j的重量时，物品i无法放进背包中，所以被背包内的价值依然和前面相同。)
放物品i：由dp[i - 1][j - weight[i]]推出，dp[i - 1][j - weight[i]] 为背包容量为j - weight[i]的时候不放物品i的最大价值，那么dp[i - 1][j - weight[i]] + value[i] （物品i的价值），就是背包放物品i得到的最大价值
所以递归公式： dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);



### 降维，dp数组用一维的，（滚动数组）
> dp[j]表示：容量为j的背包，所背的物品价值可以最大为dp[j]

> 一维dp数组的递推公式
dp[j]为 容量为j的背包所背的最大价值，那么如何推导dp[j]呢？
dp[j]可以通过dp[j - weight[i]]推导出来，dp[j - weight[i]]表示容量为j - weight[i]的背包所背的最大价值。
dp[j - weight[i]] + value[i] 表示 容量为 j -weight[i] 重量 的背包 加上 物品i的价值。（也就是容量为j的背包，放入物品i了之后的价值即：dp[j]）
此时dp[j]有两个选择，一个是取自己dp[j] 相当于 二维dp数组中的dp[i-1][j]，即不放物品i，一个是取dp[j - weight[i]] + value[i]，即放物品i，指定是取最大的，毕竟是求最大价值，

```
dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);
```

```
 function testweightbagproblem (wight, value, size) {
  const len = wight.length, 
    dp = array.from({length: len + 1}).map(
      () => array(size + 1).fill(0)
    );
  
  for(let i = 1; i <= len; i++) {
    for(let j = 0; j <= size; j++) {
      if(wight[i - 1] <= j) {
        dp[i][j] = math.max(
          dp[i - 1][j], 
          value[i - 1] + dp[i - 1][j - wight[i - 1]]
        )
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

//   console.table(dp);

  return dp[len][size];
}

function testWeightBagProblem2 (wight, value, size) {
  const len = wight.length, 
    dp = Array(size + 1).fill(0);
  for(let i = 1; i <= len; i++) { // 遍历物品
    for(let j = size; j >= wight[i - 1]; j--) { // 遍历背包容量
      dp[j] = Math.max(dp[j], value[i - 1] + dp[j - wight[i - 1]]);
    }
  }
  return dp[size];
}


function test () {
  console.log(testWeightBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
}

test();
```