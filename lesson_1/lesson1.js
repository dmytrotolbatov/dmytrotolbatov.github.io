var Hello = ["h", "e", "l", "l", "o"];
var fullWord = Hello.join('');
alert(fullWord); // hello

var fruits = ['apple', 'orange', 'peach'];
delete fruits[2];
alert(fruits); //apple, orange

var fruits2 = ['apple', 'orange', 'peach'];
fruits2.splice(2,1);
alert(fruits2); //apple, orange

var numbers = [3, 4, 2, 8, 1];
numbers.sort();
alert(numbers); //1,2,3,4,8

var numbers2 = [3,4,5,6];
var newNumbers = numbers2.concat(7,8,9);
alert(newNumbers); //3,4,5,6,7,8,9

var countries = ['USA', 'Ukraine', 'Mexico', 'Canada'];
var addCountry = countries.push('Italy');
alert(countries); // USA, Ukraine, Mexico, Canada, italy
var removeCountry = countries.pop();
alert(countries); // USA, Ukraine, Mexico, Canada
