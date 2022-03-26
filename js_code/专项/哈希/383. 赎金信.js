/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

//windwo保存出现的次数，相当于hash
 var canConstruct = function(ransomNote, magazine) {

  let window={}
  for(let c of magazine){
      window[c]=(window[c]||0)+1
  }

  for(let c of ransomNote){
      if(window[c]){
           window[c]--
           if(window[c]<0) return false
      }
      else  return false
  }
  return true

};