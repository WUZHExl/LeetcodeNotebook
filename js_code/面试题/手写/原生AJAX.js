let url=''
let xhr=new XMLHttpRequest();
xhr.open('GET', url, true);

xhr.onreadystatechange=function() {
  if(this.readyState!==4) return;
  if(this.status===200){
    //xxxx
    handle(this.response)
  }else{
    console.log(new Error("xxx"))
  }
}

xhr.send()


function Ajax(url){
  return new Promise(function(resolve, reject){
    let xhr=new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onreadystatechange=function() {
      if(this.readyState!==4) return;
      if(this.status===200){
        resolve(this.response)
      }else{
        reject(new Error("xxx"))
      }
    }


    xhr.send()

  })
}