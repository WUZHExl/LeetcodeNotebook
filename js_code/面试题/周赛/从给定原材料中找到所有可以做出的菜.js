/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
 var findAllRecipes = function(recipes, ingredients, supplies) {
  let ans=[]
  let mp=new Map()
  let mp1=new Map()
  for(let i of supplies){
    mp.set(i,1)
  }
  for(let i=0; i<recipes.length; i++){
    mp.set(recipes[i],ingredients[i])
  }
  while(recipes.length!==0){
      let others=[]
      for(let i=0;i<recipes.length;i++){
        let flag=1
        for(let k of mp1.get(recipes[i])){
          if(!mp.has(k)){
            flag=0
          }
        }
        if(flag===1) {
          ans.push(recipes[i])
          mp.set(recipes[i],1)
        }else{
          others.push(recipes[i])
        }
      }
      if(others.length===recipes.length) return []
      recipes=[...others]
  }
  return ans
};