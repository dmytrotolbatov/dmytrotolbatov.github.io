
function newPush(item){
    var addElement = [];
    addElement[0] = item;
    return this.concat(addElement);
}

function newPop(){
    var result = [];
    for (var i = 0; i < this.length - 1; i++){
        result.push(this[i]);
    }
    return result;
}

function newSlice(start){
    var result = [];
    for (var i = 0; i < this.length; i++){
        if (i < start) continue;
        result.push(this[i]);
    }
    return result;
}

function newJoin(separator){
    separator = !separator && separator != "" ? "," : separator;
    var str = "";
    for (var i = 0; i < this.length; i++){
        if(i < this.length - 1)
            str += this[i].toString() + separator;
        else
            str += this[i].toString();
    }
    return str;
}

function newReverse(){
    var result = [];
    for (var i = this.length-1; i >= 0; i--){
        result.push(this[i]);
    }
    return result;
}

var testArray = ['a', 'b', 'c', 4, 5, 6];


console.log(newPop.call(testArray)); // "a", "b", "c", 4, 5
Array.prototype.pop = newPop;
console.log(testArray.pop());

console.log(newSlice.call(testArray, 1)); // "b", "c", 4, 5, 6
Array.prototype.slice = newSlice;
console.log(testArray.slice(1));

console.log(newReverse.call(testArray)); // 6, 5, 4, "c", "b", "a"
Array.prototype.reverse = newReverse;
console.log(testArray.reverse());

console.log(newJoin.call(testArray, ';')); // a;b;c;4;5;6
Array.prototype.join = newJoin;
console.log(testArray.join(';'));

console.log(newPush.call(testArray, 'apple')); // "a", "b", "c", 4, 5, 6, "apple"
Array.prototype.push = newPush;
console.log(testArray.push('apple'));

Number.prototype.sum = function(n){
    var result;
    result = this + n;
    return result
};
var testNumber = 3;
console.log(testNumber.sum(7)); // 10
