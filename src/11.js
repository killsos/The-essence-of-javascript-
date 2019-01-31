var propertyNames = [0, '', [], false, undefined, null];

var obj = {
    '': undefined,
    '0': false,
    'undefined': null,
};

function _in(obj, prop) {
    if (obj[prop]) return true;
    return false;
}

//console.log(_in(obj, 'myProperty'));  // undefined

for (let i = 0; i < propertyNames.length; i++) {
    //console.log(typeof propertyNames[i]);
    console.log(_in(obj,propertyNames[i]));
}


