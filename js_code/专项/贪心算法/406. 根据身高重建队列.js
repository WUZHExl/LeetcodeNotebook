/**
 * @param {number[][]} people
 * @return {number[][]}
 */
 var reconstructQueue = function(people) {

  let q=[]
  people.sort((a,b)=>{
      if(a[0]!==b[0]){
          return b[0]-a[0]//先按照身高从大到小排序
      }else{
          return a[1]-b[1]//再按照顺序从小到大排序
      }
  })

  //console.log(people)
  //k表示有k个元素在当前元素之前，所以可以直接插入k位置
  for(let i=0;i<people.length;i++){
      q.splice(people[i][1],0,people[i])
  }
  return q

};