
function typeMain(inputValue) {
    let type = typeof inputValue;
    return type;
}

let theNumber = typeMain(3);
console.log(theNumber);

let theObject = typeMain(null);
console.log(theObject);

let theBoolean = typeMain(3 > 0);
console.log(theBoolean);

let theString = typeMain("I am string");
console.log(theString);

let theUndefined = typeMain();
console.log(theUndefined);