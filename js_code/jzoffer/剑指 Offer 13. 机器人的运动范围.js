/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var movingCount = function(m, n, k) {

  let visited=[]
  for(i=0;i<m;i++){
      visited[i]=new Array(n).fill(false)
  }
  const sum=num=>{
      let sum=0;
      while(num){
          a=num%10
          num=Math.floor(num/10)
          sum+=a
      }
      return sum
  }

  const dfs=(i,j)=>{
      if(i<0||j<0||i>=m||j>=n||sum(i)+sum(j)>k||visited[i][j]) return 0;
      visited[i][j]=true
      return 1+dfs(i+1,j)+dfs(i-1,j)+dfs(i,j+1)+dfs(i,j-1)
  }

  return dfs(0,0)

};