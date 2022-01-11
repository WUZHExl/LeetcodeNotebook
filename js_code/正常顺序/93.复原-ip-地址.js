/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {

    let ans=[],track=[]

    const helper=(s,index,level,track)=>{
      //index：位置；level:递归的层数
      if(index===s.length-1||level===4)
      {
        if(index===s.length-1&&level===4){
          ans.push(track.join('.'));
        }
        return;
      }
      for(let i=1;i<4;i++){
        let x=s.substr(index+1,i);

        if(parseInt(x)<256&&(x==='0'||!x.startsWith('0'))){
          track.push(x)
          helper(s,index+i,level+1,track)
          track.pop()
        }
      }

    }
    helper(s,-1,0,track)
    return ans;
};
// @lc code=end

