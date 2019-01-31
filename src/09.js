function foo() {
    if(this instanceof foo) {
        return new String('new');
    } else  {
        return 'call';
    }
}


console.log(foo())


console.log(new foo)


