function foo() {
    var that = this;

    return function () {
        return that;
    }
}


let fn = new foo();

console.log(fn);


console.log(fn());

