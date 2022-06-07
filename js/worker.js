
function fn(v){
    let n=parseInt(v);
    if(n===0||n===1) return v;
    return fn(n-1)+fn(n-2)
}

var onmessage=function(e){
console.log('接受主线程的数据',e);
let res=fn(e.data);
postMessage(res);
}