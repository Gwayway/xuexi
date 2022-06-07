var btn = document.getElementById('btn');
btn.onclick = debounce(() => { console.log('点击'); }, 1000);

function throttle(fn, delay) {
    let lastTime = 0;
    return function () {
        let nowTime = Date.now();
        if (nowTime - lastTime > delay) {
            fn();
            lastTime = nowTime;
        }
    }
}

function debounce(fn,delay){
    let timer=null;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(fn,delay);
    }
}