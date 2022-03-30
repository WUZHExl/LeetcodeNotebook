/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
`
在两条独立的水平线上按给定的顺序写下 nums1 和 nums2 中的整数。

现在，可以绘制一些连接两个数字 nums1[i] 和 nums2[j] 的直线，这些直线需要同时满足满足：

 nums1[i] == nums2[j]
且绘制的直线不与任何其他连线（非水平线）相交。
请注意，连线即使在端点也不能相交：每个数字只能属于一条连线。

以这种方法绘制线条，并返回可以绘制的最大连线数。
`
`
其实也就是说A和B的最长公共子序列是[1,4]，长度为2。 
这个公共子序列指的是相对顺序不变（即数字4在字符串A中数字1的后面，那么数字4也应该在字符串B数字1的后面）

本题说是求绘制的最大连线数，其实就是求两个字符串的最长公共子序列的长度！
`
var maxUncrossedLines = function(nums1, nums2) {

    let len1=nums1.length,len2=nums2.length
    //dp[i][j]：长度为[0, i - 1]的字符串text1与长度为[0, j - 1]的字符串text2的最长公共子序列的数量
    let dp=new Array(len1+1).fill().map(()=>new Array(len2+1).fill(0))
    for(let i=1;i<=len1;i++){
        for(let j=1;j<=len2;j++){
            if(nums1[i-1]===nums2[j-1]){
                dp[i][j]=dp[i-1][j-1]+1
            }else{
                dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
    }
    return dp[len1][len2]

};