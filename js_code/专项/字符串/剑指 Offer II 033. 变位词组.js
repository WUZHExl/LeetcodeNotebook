/**
 * @param {string[]} strs
 * @return {string[][]}
 */

//  给定一个字符串数组 strs ，将 变位词 组合在一起。 可以按任意顺序返回结果列表。
//  注意：若两个字符串中每个字符出现的次数都相同，则称它们互为变位词。


 var groupAnagrams = function(strs) {
  // 对字符串数组中的每个字符串进行排序，排序后相等的在一组
  let mp=new Map()
  for(let s of strs){
      let sortStr=s.split('').sort().join('')
      if(mp.has(sortStr)){
          mp.get(sortStr).push(s)
      }else{
          mp.set(sortStr,[s])
      }
  }
  let result=[]
  for(let a of mp.values()){
      result.push(a)
  }
  return result
};