
function receivesAFunction (cb){
    cb()
}
function returnsANamedFunction(){
    return function cb(){} 
}
function returnsAnAnonymousFunction(){
    return function (){}
};