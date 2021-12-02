/**
 * @param {string} s
 * @return {string[]}
 */
 var permutation = function(s) {
      const ans=[],visited=[],temp=[]
      const arr=s.split('').sort();

      const dfs=(arr,temp)=>{
        if(arr.length===temp.length){
          ans.push(temp.join(''));
          return;
        }
        for(let i=0;i<arr.length; i++){
          if(visited[i]||(!visited[i-1]&&arr[i]===arr[i-1])) continue;
          visited[i]=true;
          temp.push(arr[i]);
          dfs(arr,temp);
          temp.pop();
          visited[i]=false;
        }

      }

      dfs(arr,temp)
      console.log(ans)
      return ans
};
permutation("suvyls")