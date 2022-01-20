
//动态规划
//dp[i]：长度为i的s[0:i-1]子串是否能拆分成单词。
//题目求:dp[s.length]
const wordBreak = (s, wordDict) => {
  const wordSet = new Set(wordDict);
  const len = s.length;
  const dp = new Array(len + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= len; i++) {
    for (let j = i - 1; j >= 0; j--) {    // j去划分成两部分
      const suffix = s.slice(j, i);       // 后缀部分 s[j: i-1]
      if (wordSet.has(suffix) && dp[j]) { // 后缀部分是单词，且左侧子串[0,j-1]的dp[j]为真
        dp[i] = true;
        break;  // dp[i] = true了，i长度的子串已经可以拆成单词了，不需要j继续划分子串了
      }
    }
  }
  return dp[len];
};

