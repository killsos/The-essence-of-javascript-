function foo() {
    function bar() {
        console.log("bar");
    }
}

bar();  // ReferenceError: bar is not defined