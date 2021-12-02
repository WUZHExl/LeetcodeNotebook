/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */


/*
某种外星语也使用英文小写字母，但可能顺序 order 不同。字母表的顺序（order）是一些小写字母的排列。
给定一组用外星语书写的单词 words，以及其字母表的顺序 order，
只有当给定的单词在这种外星语中按字典序排列时，返回 true；否则，返回 false。
*/
/*
先用哈希表来存储字母表order中各字母的顺序
依次判断各单词是否按照字母表order中的顺序来排序的
*/

 var isAlienSorted = function(words, order) {
  let obj={}
  for(let i=0;i<order.length;i++){
      obj[order[i]]=i
  }
  // 检验words数组中的成员是否按照order中的顺序从小到大排列
  for(let i=0;i<words.length-1;i++){
      let word1=words[i]
      let word2=words[i+1]
      let index=0
      while(index<word1.length&&index<word2.length){
          if(obj[word2[index]]<obj[word1[index]]) return false
          else if(obj[word2[index]]>obj[word1[index]]) break
          else index++
      }
      if(index===word2.length&&index!==word1.length) return false
  }
  return true

};