/**
 * @param {string} s
 * @return {number}
 */

//986 / 987 个通过测试用例
//时间超出限制
// var lengthOfLongestSubstring = function(s) {
//     if(s.length===0) return 0
//     if(s.length===1) return 1
//     let l=0,r=1,ans=-1;
//     while(l!==s.length){
//         temp=s.slice(l,r);
//         if([...new Set(temp)].join('')===temp){
//             ans=Math.max(temp.length,ans)
//         }
//         if(r===s.length){
//             l++
//             r=l+1
//         }else{
//             r++
//         }
//     }
//     return ans
// };

//通过代码，耗时和内存太多
var lengthOfLongestSubstring = function(s) {
    if(s.length===0) return 0
    // if(s.length===1) return 1
    let l=0,r=1,ans=-1;
    while(r<=s.length){
        temp=s.slice(l,r);
        if([...new Set(temp)].join('')===temp){
            ans=Math.max(temp.length,ans)
        }
        else{
            l++
        }
        r++
    }
    return ans
};

// var lengthOfLongestSubstring = function(s) {

//     let window={}
//     let l=0,r=0,ans=0
//     while(r<s.length){
//         let c=s[r]
//         r++
//         window[c]=(window[c]||0)+1
//         while(window[c]>1){
//             let d=s[l]
//             l++
//             window[d]--
//         }
//         ans=Math.max(ans,r-l)
//     }
//     return ans
//   };