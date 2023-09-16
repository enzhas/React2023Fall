/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let done = false;
    return function(...args){
        let k = fn(...args);
        if(!done){
            done = true;
            return k;
        }
        else return undefined;
     }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
