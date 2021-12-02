/**
 * @param {string[]} words
 * @return {number}
 */


//  给定一个字符串数组 words，请计算当两个字符串 words[i] 和 words[j] 不包含相同字符时，它们长度的乘积的最大值。
//  假设字符串中只包含英语的小写字母。如果没有不包含相同字符的一对字符串，返回 0。

 var maxProduct = function(words) {

  const checkHas=(a,b)=>{
      for(let s of a){
          if(b.includes(s)) return false
      }
      return true
  }
  let maxLength=0
  for(let i=0;i<words.length-1;i++){
      for(let j=i+1;j<words.length;j++){
          if(checkHas(words[i],words[j])) maxLength=Math.max(maxLength,words[i].length*words[j].length)
      }
  }
  return maxLength
};

function checkHas(a,b){
  for(let s of a){
    if(b.includes(s)) return false
  }
  return true
}
