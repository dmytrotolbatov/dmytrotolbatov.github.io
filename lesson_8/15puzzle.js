function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
arr = shuffle(arr);
console.log(arr);

function createCell() {
    var cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
}

function createRow() {
    var row = document.createElement('div');
    row.classList.add('row');
    return row;
}

function initialize(size) {
    for (var i = 0; i < size.height; i++) {
        land.push([]);
        for (var j = 0; j < size.width; j++) {
            land[i].push(createCell());
        }
    }
}

function buildLand() {
    var landEl = document.getElementById('land');
    for (var i = 0; i < land.length; i++) {
        var row = createRow();
        landEl.appendChild(row);
        for (var j = 0; j < land[i].length; j++) {
            row.appendChild(land[i][j]);
        }
    }
}

var size = { width: 4, height: 4 };
var land = [];

initialize(size);
buildLand();


function emptyCell() {
    var randomNumber;
    for(var i = 0; i < 100; i++){
        randomNumber = Math.ceil(Math.random()*100);
        if (randomNumber <= 15){
            break;
        }
    }
    return randomNumber;
}


function shuffleNumbers() {
    var allElements = document.getElementsByClassName('cell');
    $(allElements[emptyCell()]).attr('id', 'empty');

    var index = 0;
    for(var i = 0; i < land.length; i++){
        for(var j = 0; j < land.length; j++){
            if(!land[i][j].hasAttribute('id')){
                $(land[i][j]).text(arr[index]);
                index++;
            }

        }
    }
}

shuffleNumbers();



$('body').on('click', '.cell', function () {
    var position = $(this).index();
    var up = $(this).parent().prev().children().eq(position);
    var right = $(this).next();
    var down = $(this).parent().next().children().eq(position);
    var left = $(this).prev();


    if($(up).attr('id')) {
        var thisUp = $(this).clone();
        var thatUp = $(up).clone();
        $(this).replaceWith(thatUp);
        $(up).replaceWith(thisUp);
    }else if($(right).attr('id')){
        var thisRight = $(this).clone();
        var thatRight = $(right).clone();
        $(this).replaceWith(thatRight);
        $(right).replaceWith(thisRight);
    }else if($(down).attr('id')){
        var thisDown = $(this).clone();
        var thatDown = $(down).clone();
        $(this).replaceWith(thatDown);
        $(down).replaceWith(thisDown);
    } else if ($(left).attr('id')) {
        var thisLeft = $(this).clone();
        var thatLeft = $(left).clone();
        $(this).replaceWith(thatLeft);
        $(left).replaceWith(thisLeft);
    }
    winCondition();
});

function winCondition() {
    var field = $('#land');
    var one = field.children().eq(0).children().eq(0);
    var two = field.children().eq(0).children().eq(1);
    var three = field.children().eq(0).children().eq(2);
    var four = field.children().eq(0).children().eq(3);
    var five = field.children().eq(1).children().eq(0);
    var six = field.children().eq(1).children().eq(1);
    var seven = field.children().eq(1).children().eq(2);
    var eight = field.children().eq(1).children().eq(3);
    var nine = field.children().eq(2).children().eq(0);
    var ten = field.children().eq(2).children().eq(1);
    var eleven = field.children().eq(2).children().eq(2);
    var twelve = field.children().eq(2).children().eq(3);
    var thirteen = field.children().eq(3).children().eq(0);
    var fourteen = field.children().eq(3).children().eq(1);
    var fifteen = field.children().eq(3).children().eq(2);

    if($(one).text() == '1' && $(two).text() == '2' && $(three).text() == '3' && $(four).text() == '4' && $(five).text() == '5' && $(six).text() == '6' && $(seven).text() == '7' && $(eight).text() == '8' && $(nine).text() == '9' && $(ten).text() == '10' && $(eleven).text() == '11' && $(twelve).text() == '12' && $(thirteen).text() == '13' && $(fourteen).text() == '14' && $(fifteen).text() == '15') {
        alert('You Won!')
    }else if($(one).text() == '1' && $(two).text() == '2' && $(three).text() == '3' && $(four).text() == '4' && $(five).text() == '5' && $(six).text() == '6' && $(seven).text() == '7' && $(eight).text() == '8' && $(nine).text() == '9' && $(ten).text() == '10' && $(eleven).text() == '11' && $(twelve).text() == '12' && $(thirteen).text() == '13' && $(fourteen).text() == '15' && $(fifteen).text() == '14'){
        alert('Actually you won! It is our mistake that we shuffled cells in wrong order. Sorry for that!' )
    }
}
winCondition();
