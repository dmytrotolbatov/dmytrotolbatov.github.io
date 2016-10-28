function factorial(n){
    if(n != 1){
        return n * factorial(n - 1);
    }
    else{
        return 1
    }
}

function pow(n, m){
    if(m != 1){
        return n * pow(n, m - 1);
    }
    else{
        return n;
    }
}

function sumOfNumbers(n){
    var remains = 1;
    if(n > 0){
        remains = remains * 10;
        return n % remains + sumOfNumbers((n - n % remains) / 10);
    }
    else{
        return 0;
    }
}

function sumTo(n){
    if(n != 1){
        return n + sumTo(n - 1);
    }
    else {
        return 1;
    }
}

function fib(n){
    if(n <= 1){
        return n;
    }
    else{
        return fib(n - 1) + fib(n - 2);
    }
}

//////////////////////////////////////////////////////// next without recursion

function factorial2(n){
    var result = 1;
    for (var i = 1; n != 0; i++){
        result = result * n--;
    }
    return result;
}

function pow2(n, m){
    var result = n;
    for (var i = 1; i < m; i++ ){
       result = result * n;
    }
    return result;
}

function sumOfNumbers2(n){
    var str = n.toString();
    var result = 0;
    for (var i = 0; i < str.length; i++){
        result = result + parseInt(str[i]);
    }
    return result;
}

function sumTo2(n){
    var result = 0;
    for (var i = 1; i <= n; i++){
        result = result + i;
    }
    return result;
}

function fib2(n){
    var result = 0;
    var i = 2;
    var fib1 = 1;
    var fib2 = 1;
    if(n == 1 || n == 2){
        result = 1;
    }else {
        while (i < n) {
            result = fib1 + fib2;
            fib2 = fib1;
            fib1 = result;
            i++;
        }
    }
    return result;
}

////////////////////////////////////////////////// TESTS

console.time('testFactorial');
for (var a = 0; a < 10000; a++){
    factorial(5)
}
console.timeEnd('testFactorial'); // 2ms

console.time('testFactorial2');
for (var b = 0; b < 10000; b++){
    factorial2(5)
}
console.timeEnd('testFactorial2'); //1ms



console.time('testPow');
for (var c = 0; c < 10000; c++){
    pow(2,3)
}
console.timeEnd('testPow'); //2ms

console.time('testPow2');
for (var d = 0; d < 10000; d++){
    pow2(2,3)
}
console.timeEnd('testPow2'); //1ms



console.time('testSumOfNumbers');
for (var e = 0; e < 10000; e++){
    sumOfNumbers(753)
}
console.timeEnd('testSumOfNumbers'); //4ms

console.time('testSumOfNumbers2');
for (var f = 0; f < 10000; f++){
    sumOfNumbers2(753)
}
console.timeEnd('testSumOfNumbers2'); //7ms



console.time('testSumTo');
for (var g = 0; g < 10000; g++){
    sumTo(10)
}
console.timeEnd('testSumTo'); //5ms

console.time('testSumTo2');
for (var h = 0; h < 10000; h++){
    sumTo2(10)
}
console.timeEnd('testSumTo2'); //2ms



console.time('testFib');
for (var i = 0; i < 10000; i++){
    fib(7)
}
console.timeEnd('testFib'); //7ms

console.time('testFib2');
for (var j = 0; j < 10000; j++){
    fib2(7)
}
console.timeEnd('testFib2'); //2ms
