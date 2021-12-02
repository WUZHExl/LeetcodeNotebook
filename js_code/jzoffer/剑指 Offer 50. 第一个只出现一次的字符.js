


//在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
/**
 * @param {string} s
 * @return {character}
 */
//  var firstUniqChar = function(s) {
//       let mp=new Map()
//       for(let i=0;i<s.length;i++) {
//         if(!mp.has(s[i])) {
//           mp.set(s[i],1)
//         }else {
//           mp.set(s[i],mp.get(s[i])+1)
//         }
//       }
//       for(let [k,v] of mp){
//         if(v===1) 
//         {
//           return k
//         }
//       }
//       return " "
// };



var firstUniqChar = function(s) {
  let mp=new Map()
  for(let i of s){
    mp.set(i,(mp.get(i)||0)+1)
  }
  for(let i of mp){
    if(i[1]===1) return i[0]
  }
  return " "
};