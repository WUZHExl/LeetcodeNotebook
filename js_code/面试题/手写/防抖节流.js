function throttle(fn,delay){

  let last =Date.now;
  return function(){
    let now =Date.now;
    //let args=
    if(now-last>delay){
      last= Date().now;
      return  fn.apply(this)
    }
  }
}

function task() {
  console.log('run task')
}
const throttleTask =throttle(task, 1000)
// window.addEventListener('scroll', throttleTask)
throttleTask()


function debounce(fn,delay){
  let timer=null;

  return function(){
    if(timer){
      clearTimeout(timer)
      timer=null
    }

    timer = setTimeout(()=>fn.apply(this),delay)
  }
}