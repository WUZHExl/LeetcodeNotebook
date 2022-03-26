/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

`
给你一个二进制字符串数组 strs 和两个整数 m 和 n 。
请你找出并返回 strs 的最大子集的长度，该子集中 最多 有 m 个 0 和 n 个 1 。
如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。
`
 var findMaxForm = function(strs, m, n) {
    const dp = Array.from(Array(m+1), () => Array(n+1).fill(0));
    let numOfZeros, numOfOnes;

    for(let str of strs) {
        numOfZeros = 0;
        numOfOnes = 0;
    
        for(let c of str) {
            if (c === '0') {
                numOfZeros++;
            } else {
                numOfOnes++;
            }
        }

        for(let i = m; i >= numOfZeros; i--) {
            for(let j = n; j >= numOfOnes; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - numOfZeros][j - numOfOnes] + 1);
            }
        }
    }

    return dp[m][n];
};