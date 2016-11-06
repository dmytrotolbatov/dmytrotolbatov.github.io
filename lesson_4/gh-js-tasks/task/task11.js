'use strict';

/**
 * Кефа и первые шаги
 *
 * Кефа решил подзаработать денег, занимаясь различной деятельностью в интернете на протяжении ровно n дней.
 * Он знает, что в i-й день (1 ≤ i ≤ n) он заработает ai монет. Кефа любит прогресс,
 * поэтому он хочет узнать длину максимального неубывающего подотрезка в последовательности ai.
 * Напомним, что подотрезок последовательности — это её непрерывный фрагмент. Подотрезок чисел называется неубывающим,
 * если числа в нём следуют в порядке неубывания.
 *
 * Помогите Кефе справиться с этой задачей!
 *
 * Входные данные
 * Массив целых чисел a1,  a2,  ...,  an (1 ≤ ai ≤ 109).
 *
 * Выходные данныx
 * Верните единственное целое число — длину максимального неубывающего подотрезка последовательности a.
 */

var firstStepsTests = [
    {
        parameters: [[2, 2, 1, 3, 4, 1]],
        expectedResult: 3
    },
    {
        parameters: [[2, 2, 9]],
        expectedResult: 3
    }
];

function maxOfArr(n) {
    return Math.max.apply(null, n);
}

function firstSteps(arr) {
    var result = 1;
    var allResults = [];
    for (var i = 0; i < arr.length; i++){
        if(arr[i] >= arr[i - 1]){
            result++;
        }else{
            allResults.push(result);
            result = 1;
        }
    }
    allResults.push(result);
    return maxOfArr(allResults);

}


tasks.push({
    title: "Кефа и первые шаги",
    solution: firstSteps,
    tests: firstStepsTests
});