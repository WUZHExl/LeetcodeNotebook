`
给你一个字符串 s 和一个整数 repeatLimit ，
用 s 中的字符构造一个新字符串 repeatLimitedString ，
使任何字母 连续 出现的次数都不超过 repeatLimit 次。
你不必使用 s 中的全部字符。
返回 字典序最大的 repeatLimitedString 。
`

/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
 var repeatLimitedString = function(s, repeatLimit) {


    let mp=new Map()
    for(let chr of s) mp.set(chr,mp.get(chr)+1||1)
    console.log(mp)

    let  ans=[]
    // for(let chr='z';)


};

repeatLimitedString("cczazcc",3)