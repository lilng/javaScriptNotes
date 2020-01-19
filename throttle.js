// 节流有两种方式实现利用时间戳和定时器
// timestamps style
function throttle(func,wait){
    var ctx,args;
    var previous = 0;
    return function(){
        var now = +new Date();
        ctx = this;
        args = arguments;
        if(now -previous > wait){
            func.apply(ctx,args);
            previous = now;
        }
    }
}

// timeout style
function throttle(func,wait){
    var ctx,args;
    var timer;
    return function(){
        ctx = this;
        args = arguments;
        if(!timer){
            timer = setTimeout(function(){
                func.apply(ctx,args);
            },wait)
        }
    }
}
