// Block scope
// var function scope
if (true) {
    var x = "var";
}
console.log(`var: ${x}`);

// let or const block scope
if (true) {
    let y = "let";
    const z = "const";
    console.log(`let: ${y}`);
    console.log(`const: ${z}`);
}
// console.log(`let: ${y}`);
// console.log(`const: ${z}`);

function colorFuntion() {
    if (true) {
        var color = "blue";
        console.log(color);
    }
    console.log(color);
}

colorFuntion();
// console.log(color); 에러발생