var items = [];
var completedItems = [];
var body = $('body');

$( document ).ready(function() {
    $('#mainList').show();
    $('#completedList').hide();

    $('#allButton').on('click', function () {
        $('#mainList').show();
        $('#completedList').hide();
    })

    $('#completedButton').on('click', function () {
        if($('#completedUl').children().length > 0){
            $('#mainList').hide();
            $('#completedList').show();
        }
    })
});


function addItem(item) {
    items.push(item);
    $('#listUl').append('<li class="normal"></li>');
    var lastLi = $('#listUl').children().last();
    lastLi.text(items[items.length - 1]);
    lastLi.append('<button class="remove"><i class="material-icons">delete_forever</i></button>');
}


$('#itemField').on('keypress', function(event){
        if (event.keyCode == 13){
            var item = $('#itemField');
            var value = item.val();

            if(value){
                addItem(value);
                item.val('');
            }else{
                alert('Write something')
            }
        }
        storing();
    }
);


body.on('click', '.remove', function () {
    var thisString = $(this).parent().text();
    thisString = thisString.replace('delete_forever', '');
    var thisIndex = items.indexOf(thisString);
    if(thisIndex > -1){
        items.splice(thisIndex, 1);
    }

    var thisIndexNew = newItems.indexOf(thisString); //////REMOVE FROM LOCALSTORAGE ARRAY
    if(thisIndexNew > -1){
        newItems.splice(thisIndexNew, 1);
    }

    var thisIndexNewCompleted = newCompletedItems.indexOf(thisString); //////REMOVE FROM LOCALSTORAGE ARRAY COMPLETED
    if(thisIndexNewCompleted > -1){
        newCompletedItems.splice(thisIndexNewCompleted, 1);
    }

    var indexCompleted = completedItems.indexOf(thisString);
    if(indexCompleted > -1){
        completedItems.splice(indexCompleted, 1);
    }

    $("li:contains('" + thisString + "')").remove();

    storing();
    storingCompleted();
})


$('#mainList').on('dblclick', 'li', function () {
    clearSelection();
    var thisString = $(this).text();
    thisString = thisString.replace('delete_forever', '');
    $("#completedUl li:contains('" + thisString + "')").remove();
})


$('#completedList').on('dblclick', 'li', function () {
    clearSelection();
    var thisString = $(this).text();
    thisString = thisString.replace('delete_forever', '');
    $("#completedUl li:contains('" + thisString + "')").remove();
    $("#listUl li:contains('" + thisString + "')").toggleClass('checkedItem normal');
})


body.on('dblclick', 'li', function () {
    clearSelection();
    var that = $(this)
    that.toggleClass('checkedItem normal');

    if(that.hasClass('checkedItem')){
        /*copy item from items-array and push it to completedItems-array*/
        var thisString = $(this).text();
        thisString = thisString.replace('delete_forever', '');
        var thisIndex = items.indexOf(thisString);
        completedItems.push(items[thisIndex])

        /*show the item from completedItems-array in completedUl*/
        $('#completedUl').append('<li class="checkedItem"></li>');
        var lastLi = $('#completedUl').children().last();
        lastLi.text(completedItems[completedItems.length - 1]);
        lastLi.append('<button class="remove"><i class="material-icons">delete_forever</i></button>');
    }else if(that.hasClass('normal')){
        var thisString = $(this).parent().text();
        thisString = thisString.replace('delete_forever', '');
        var indexCompleted = completedItems.indexOf(thisString);
        if(indexCompleted > -1){
            completedItems.splice(indexCompleted, 1);
        }
    }
    storingCompleted();
})


function clearSelection() {
    if(document.selection && document.selection.empty) {
        document.selection.empty();
    } else if(window.getSelection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
    }
}


$( function() {
    $( "#listUl" ).sortable({
        revert: true
    });
    $( "ul, li" ).disableSelection();
});

$( function() {
    $( "#completedUl" ).sortable({
        revert: true
    });
    $( "ul, li" ).disableSelection();
});


/////////////local storage////////////////////

function storing() {
    localStorage.setItem('mainList', JSON.stringify(items));
}

function storingCompleted() {
    localStorage.setItem('completedList', JSON.stringify(completedItems));
}


var retrievedData = localStorage.getItem('mainList');
var newItems = JSON.parse(retrievedData);
if(newItems){
    for(var i = 0; i < newItems.length; i++){
        items.push(newItems[i])
    }
}

var retrievedDataCompleted = localStorage.getItem('completedList');
var newCompletedItems = JSON.parse(retrievedDataCompleted);
if(newCompletedItems){
    for(var i = 0; i < newCompletedItems.length; i++){
        completedItems.push(newCompletedItems[i])
    }
}

for(var i = 0; i < items.length; i++){
    $('#listUl').append('<li class="normal"></li>');
    var lastLi = $('#listUl').children().last();
    lastLi.text(items[i]);
    lastLi.append('<button class="remove"><i class="material-icons">delete_forever</i></button>');
}

for(var i = 0; i < completedItems.length; i++){
    $('#completedUl').append('<li class="checkedItem"></li>');
    var lastLi = $('#completedUl').children().last();
    lastLi.text(completedItems[i]);
    lastLi.append('<button class="remove"><i class="material-icons">delete_forever</i></button>');
}