function receivesAFunction(receivedFunction){
    return receivedFunction()
}
function returnsANamedFunction(){
     return function add (num1,num2){
            num1+num2
          }
}
function returnsAnAnonymousFunction(){
    return function (){
        console.log("hello")
    }
}