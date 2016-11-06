'use strict';

/**
 * Числа Фиббоначи
 * 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765
 * https://en.wikipedia.org/wiki/Fibonacci_number
 *
 * Знайти суму перших n чисел фібоначі.
 */

var fibonacciTests = [
    {
        parameters: [1],
        expectedResult: 1
    },
    {
        parameters: [3],
        expectedResult: 4
    },
    {
        parameters: [5],
        expectedResult: 12
    },
    {
        parameters: [20],
        expectedResult: 17710
    },
    {
        parameters: [0],
        expectedResult: 0
    }
];


function fibonacci(n) {
    var sum = 1;
    if(n == 1){
        return 1;
    }
    else if(n == 2){
        return 2;
    }
    else if(n == 0){
        return 0;
    }
    else{
        sum = sum + fibonacci(n - 1) + fibonacci(n - 2) ;
        return sum;
    }
}


tasks.push({
    title: "Числа Фиббоначи",
    solution: fibonacci,
    tests: fibonacciTests
});