
//在一段时间内，时间多次触发，只有一次生效
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


//事件触发后n秒执行回调，在n秒内又被调用，重新计时
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