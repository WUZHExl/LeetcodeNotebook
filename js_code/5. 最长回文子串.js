// var longestPalindrome = function(s) {

//   const isPalindrome=(s)=>{
//       len=s.length
//       for(i=0;i<Math.floor(len/2);i++){
//           if(s[i]!==s[len-1-i]) return false
//       }
//       return true
//   }

//   let ans,Maxlen=-1,dp=[]
//   dp[0]=1
//   for(i=0;i<s.length;i++){

//       for(j=0;j<=i;j++){
//           temp=s.slice(j,i+1)
//           if(isPalindrome(temp)&&temp.length>Maxlen){
//               Maxlen=temp.length
//               ans=temp
//           }
//       }

//   }
//   return ans
// }

var longestPalindrome = function(s){
  let n=s.length;
  if(n<2) return s;
  let Maxlen=1,dp=[],begin=0
  for(i=0;i<n;i++) {
    dp[i]=new Array(n)
    dp[i][i]=true
  }

  //先枚举长度
  for(L=2;L<=n;L++)
  {
    //枚举左边界
    for(i=0;i<n;i++){
      //确定右边界
      let j=L+i-1;
      if(j>=n) break;
      if(s[i]!==s[j]) dp[i][j]=false
      else{
        if(j-i<3) dp[i][j]=true
        else dp[i][j]=dp[i+1][j-1]
      }

      if(dp[i][j]&&j-i+1>Maxlen){
        Maxlen=j-i+1
        begin=i;
      }

    }
  }

  return s.substr(begin,Maxlen)

}

