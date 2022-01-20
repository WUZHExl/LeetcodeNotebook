`
给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。
如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
`

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {


  let need={};
  let window={};
  //统计需要的字符
  for(let i of t){
    need[i]=(need[i]||0)+1
  }
  let l=0,r=0,valid=0;
  // 最小覆盖子串的起始索引及长度
  let start = 0,
  len = Number.MAX_VALUE;
  while(r<s.length){
    let c=s[r]
    r++
  //   if(need[c]){// 当前字符在需要的字符中，则更新当前窗口统计
      window[c]=(window[c]||0)+1
      // 当前窗口和需要的字符匹配时，验证数量增加1
      if(window[c]===need[c]) valid++
  //   }

    while(valid===Object.keys(need).length){
      if(r-l<len){
        //
        start=l;
        len=r-l;
      }
      //即将移出窗口的字符
      let d=s[l]
      l++;
      // if(need[d]){
          if(window[d]===need[d]) valid--
          window[d]--
      // }
    }

  }

  return len==Number.MAX_VALUE?"":s.substr(start,len)

};