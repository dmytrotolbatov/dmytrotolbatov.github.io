'use strict';

/**
 * cAPS lOCK
 *
 * зАЧЕМ НУЖНА КЛАВИША cAPS lOCK?
 * Caps Lock — клавиша компьютерной клавиатуры, предназначенная для автоматической (постоянной) смены регистра
 * букв со строчных на прописные. Будучи случайно нажатой, она приводит к последствиям вроде первого абзаца в
 * условии этой задачи.
 *
 * Будем считать, что слово набрано с ошибочно нажатой клавишей Caps Lock, если:
 * - либо оно полностью состоит из прописных букв;
 * - либо прописными являются все его буквы, кроме первой.
 *
 * В таком случае, нужно автоматически поменять регистр всех букв на противоположный. Например,
 * регистр букв слов «hELLO», «HTTP», «z» должен быть изменен.
 * Напишите программу, которая применяет описанное выше правило или оставляет слово без изменения, если оно не применимо.
 *
 * Входные данные
 * записано слово, состоящее из прописных или строчных букв латинского алфавита. Длина слова — от 1 до 100 символов включительно.
 *
 * Выходные данные
 * Выведите результат обработки данного слова.
 */

var capsLockTests = [
    {
        parameters: ["cAPS"],
        expectedResult: "Caps"
    },
    {
        parameters: ["Lock"],
        expectedResult: "Lock"
    },
    {
        parameters: ["wHY DO wE NEED cAPS lOCK?"],
        expectedResult: "Why do We need Caps Lock?"
    },
    {
        parameters: ["FuNkY iS nOt CaPs!"],
        expectedResult: "FuNkY Is nOt CaPs!"
    }
];

var swapCase = function(letters){
    var newLetters = "";
    for(var i = 0; i < letters.length; i++){
        if(letters[i] === letters[i].toLowerCase()){
            newLetters += letters[i].toUpperCase();
        }else {
            newLetters += letters[i].toLowerCase();
        }
    }
    return newLetters;
}

function splitString(stringToSplit, separator) {
    var arr = stringToSplit.split(separator);
    return arr;
}

function capsLock(str) {
    var upStr = str;
    var arrOfWords = splitString(str, " ");
    var result = [];
    for(var i = 0; i < arrOfWords.length; i++){
        if(arrOfWords[i] == arrOfWords[i].toUpperCase() || (arrOfWords[i][0] == arrOfWords[i][0].toLowerCase() && arrOfWords[i].slice(1) == arrOfWords[i].slice(1).toUpperCase())){
            result.push(swapCase(arrOfWords[i]));
        }else {
            result.push(arrOfWords[i]);
        }
    }
    return result.join(' ');
}


tasks.push({
    title: "cAPS lOCK",
    solution: capsLock,
    tests: capsLockTests
});
