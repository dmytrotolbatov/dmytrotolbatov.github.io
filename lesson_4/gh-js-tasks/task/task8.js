'use strict';

/**
 * Система регистрации
 *
 * В скором времени в Берляндии откроется новая почтовая служба "Берляндеск".
 * Администрация сайта хочет запустить свой проект как можно быстрее, поэтому они попросили Вас о помощи.
 * Вам предлагается реализовать прототип системы регистрации сайта.
 *
 * Система должна работать по следующему принципу. Каждый раз, когда новый пользователь хочет зарегистрироваться,
 * он посылает системе запрос name со своим именем. Если данное имя не содержится в базе данных системы,
 * то оно заносится туда и пользователю возвращается ответ OK, подтверждающий успешную регистрацию.
 * Если же на сайте уже присутствует пользователь с именем name, то система формирует новое имя
 * и выдает его пользователю в качестве подсказки, при этом подсказка также добавляется в базу данных.
 * Новое имя формируется по следующему правилу. К name последовательно приписываются числа,
 * начиная с единицы (name1, name2, ...), и среди них находят такое наименьшее i,
 * что namei не содержится в базе данных сайта.
 *
 * Входные данные
 * Масив запросов. Каждый запрос представляет собой непустую строку
 * длиной не более 32 символов, состоящую только из строчных букв латинского алфавита.
 *
 * Выходные данные
 * В выходных данных должно содержаться n строк в масиве — ответы системы на запросы: ОК в случае успешной регистрации,
 * или подсказку с новым именем, если запрашиваемое уже занято.
 */

var registrationTests = [
    {
        parameters: [
            [
                "abacaba",
                "acaba",
                "abacaba",
                "acab"
            ]
        ],
        expectedResult: [
            "OK",
            "OK",
            "abacaba1",
            "OK"
        ]
    },
    {
        parameters: [
            [
                "first",
                "first",
                "second",
                "second",
                "third",
                "third",
                "third"
            ]
        ],
        expectedResult: [
            "OK",
            "first1",
            "OK",
            "second1",
            "OK",
            "third1",
            "third2"
        ]
    }
];


function User(name) {
    this.count = 0;
    this.oldName = name;
    this.newName = "";
}

function where(array, callback) {
    if (!array)
        return null;

    var newArr = [];
    if (array.length > 0) {
        if (callback) {
            for (var key in array) {
                if (callback(array[key]))
                    newArr.push(array[key]);
            }
            return newArr;
        }
        return array;
    }
    return newArr;
}

function intNames(array) {
    if (array.length > 1) {
        var counter = 1;
        for (var i = 1; i < array.length; i++) {
            array[i].count = counter;
            array[i].newName = array[i].oldName + counter;
            counter++;
        }
    }
}

function registration(names) {
    var users = names.map(function (x) {
        return new User(x);
    });

    for (var i = 0; i < users.length; i++) {
        var filtered = where(users, function (x) {
            return users[i].oldName == x.oldName && x.count == 0;
        });
        intNames(filtered);
    }

    names = users.map(function (x) {
        return x.count == 0 ? "OK" : x.newName;
    });

    return names;
}


tasks.push({
    title: "Система регистрации",
    solution: registration,
    tests: registrationTests
});
