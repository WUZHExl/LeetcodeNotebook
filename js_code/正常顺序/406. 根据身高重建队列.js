/**
 * @param {number[][]} people
 * @return {number[][]}
 */

//  按身高h来排序呢，身高一定是从大到小排（身高相同的话则k小的站前面），让高个子在前面
// 按照身高排序之后，优先按身高高的people的k来插入，后序插入节点也不会影响前面已经插入的节点，最终按照k的规则完成了队列
 var reconstructQueue = function(people) {

  let q=[]
  people.sort((a,b)=>{
      if(a[0]!==b[0]){
          return b[0]-a[0]
      }else{
          return a[1]-b[1]
      }
  })

  for(let i=0;i<people.length;i++){
      q.splice(people[i][1],0,people[i])
  }
  return q

};