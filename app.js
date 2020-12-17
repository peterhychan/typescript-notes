function addition(e1, e2) {
    var result;
    if (typeof e1 === 'number' && e2 === 'number') {
        result = e1 + e2;
    }
    else {
        result = e1.toString() + e2.toString();
    }
    return result;
}
var intAdd = addition(1, 2);
var strAdd = addition("A", "V");
console.log(intAdd);
console.log(strAdd);
