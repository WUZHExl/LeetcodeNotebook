/**
 * @param {string} s
 * @return {string[]}
 */
`
有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。
你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。
`
`
这是切割问题，切割问题就可以使用回溯搜索法把所有可能性搜出来，和刚做过的131.分割回文串 (opens new window)就十分类似了。
不同的是，对符合要求的字符串的判别条件
`

 var restoreIpAddresses = function(s) {

  let result=[],path=[]
  const dfs=(index)=>{
      if(path.join("").length===s.length&&path.length===4){
          result.push(path.join("."))
          return;
      }

      for(let i=index;i<s.length;i++){
          let temp=s.slice(index,i+1)
          // if(temp===0&&path.length===0) continue;
          // if(temp.startwith('0')) continue;
          //前导0指的是整型数字前面的0,对数字的值来说没有意义
          if(Number(temp)<=255&&(!temp.startsWith('0')||temp==='0')) path.push(temp) 
          else continue

          dfs(i+1)
          path.pop()
      }
  }
  dfs(0)
  return result

};