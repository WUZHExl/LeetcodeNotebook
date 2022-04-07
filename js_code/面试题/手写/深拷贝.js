function shallowCopy(obj){

  if(!obj||typeof obj!=='object') return 

  let newObj =Array.isArray(obj)?[]:{}

  for(let o in obj){
    if(obj.hasOwnProperty(o)){
      newObj[o] = obj[o]
    }
  }

  return  newObj

}

function deepCopy(obj){
  if(!obj||typeof obj!=='object') return 

  let newObj =Array.isArray(obj)?[]:{}

  for(let o in obj){
    if(obj.hasOwnProperty(o)){
      newObj[o] = typeof obj[o]==='object' ?
      deepCopy(obj[o]) :
      obj[o]
    }
  }
  return  newObj
}


function deepCopy(obj,map=new Map()){
  if(!obj||typeof obj!=='object') return 

  let newObj =Array.isArray(obj)?[]:{}

  if(map.get(obj)) return map.get(obj)

  map.set(obj,newObj)

  for(let o in obj){
    if(obj.hasOwnProperty(o)){
      newObj[o]=typeof obj[o]==='object'?
      deepCopy(obj,map):
      obj[o]
    }
  }

  return newObj

}