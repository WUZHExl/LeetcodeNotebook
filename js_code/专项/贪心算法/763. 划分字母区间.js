/**
 * @param {string} s
 * @return {number[]}
 */
`
字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，
同一字母最多出现在一个片段中。返回一个表示每个字符串片段的长度的列表。
`
`
用对象记录字符串每个字符最后出现的位置，
当该字符当前位置等于记录最大位置时，说明该位置为分割点

这里记录最大位置表示为在该位置之前，记录的最大的最后出现位置
`
 var partitionLabels = function(s) {

  let hash={}
  for(let i=0;i<s.length;i++) hash[s[i]]=i
  //用的是对象，键值不能重复，所以之前的位置会被后面的位置覆盖，最后只留下最后出现的位置
  //console.log(hash)
  let res=[],right=0,left=0
  for(let i=0;i<s.length;i++){
      right=Math.max(right,hash[s[i]])

      if(right===i){
          res.push(right-left+1)
          left=i+1
      }
  }
  return res
};