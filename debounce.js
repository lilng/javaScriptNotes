/* version 1 */
function debounce(func,wait){
    var timer,result;
    return function(){
        var ctx = this;
        var args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function(){
            result = func.apply(ctx,args); 
        },wait);
        return result
    }
}
/* version 2 */
function debounce(func,wait,imediate){
    var timer,result;
    var debounced = function(){
        var ctx  = this;
        var args = arguments;
        if(timer) clearTimeout(timer);
        if(imediate){
            var callNow = !timer;
            timer = setTimeout(function(){
                timer = null;
            },wait);
            if(callNow) result = func.apply(ctx,args);
        }else{
            timer = setTimeout(function(){
                result = func.apply(ctx,args);
            },wait);
        }
    }
}
/* version 2 */
function debounce(func,wait,imediate){
    var timer,result;
    var debounced = function(){
        var ctx  = this;
        var args = arguments;
        if(timer) clearTimeout(timer)
        if(imediate){
            var callNow = !timer;
            timer = setTimeout(function(){
                timer = null;
            },wait);
            if(callNow) result = func.apply(ctx,args);
        }else{
            timer = setTimeout(function(){
                result = func.apply(ctx,args);
            },wait)
        }
        return result;
    }
    debounced.cancel = function(){
        clearTimeout(timer);
        timer = null;
    }
    return debounced;
}
