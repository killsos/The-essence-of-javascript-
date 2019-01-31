function foo() {}

foo.prototype.value =100;


var a = 10;

//console.log(delete window.a);  // false

let obj = new foo;

console.log(delete obj.value);  // true


console.log(delete Object.prototype); // false



