/**
 * @param {number[]} ratings
 * @return {number}
 */
 var candy = function(ratings) {
    let sum=0,length=ratings.length;
    let ans = new Array(length).fill(1);//简便初始化方式
    // for(let i=0; i<ratings.length; i++)
    // {ans.push(1);}
    for(let i=1;i<length; i++)
    {
      if(ratings[i]>ratings[i-1])
      {
        ans[i]=ans[i-1]+1;
      }
    }
    for(let i=length-1;i>=1;i--)
    {
      if(ratings[i-1]>ratings[i])
      {
        ans[i-1]=Math.max(ans[i]+1,ans[i-1]);
      }
    }
    for(let i=0;i<ans.length; i++)
    {
      sum+=ans[i];
      console.log(ans[i])
    }
    console.log(sum);
    return sum;
};

candy([1,0,2])