function add(n1, n2) {
    if (typeof n1 === "number" && typeof n2 === "number") {
        return n1 + n2;
    }
    throw new Error("Invalid data type");
}
var n1 = "2";
var n2 = 3;
var result = add(n1, n2);
console.log(result);
