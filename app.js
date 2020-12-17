function addition(e1, e2, result) {
    var res;
    if (typeof e1 === 'number' && e2 === 'number') {
        res = e1 + e2;
    }
    else {
        result = e1.toString() + e2.toString();
    }
    return res;
}
var intAdd = addition(1, 2);
var strAdd = addition("A", "V");
console.log(intAdd);
console.log(strAdd);
console.log(typeof +"2");
