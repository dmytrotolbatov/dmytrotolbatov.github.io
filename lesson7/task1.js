$('#newItem').on('keypress', function(event){
        if (event.keyCode == 13){
            var item = $('#newItem');
            var value = item.val();

            if(value){
                $('#tasks').append('<li class="activeItem"></li>');
                $('li').last().append('<input class="check" type="checkbox">').append('<label>').append('<button class="remove"><i class="material-icons">delete_forever</i></button>');
                $('label').last().text(value);
                item.val('');
            }else{
                alert('Write something')
            }
        }
        checkItem();
        removeItem();


        var mainList = $('#main');
        var toDoList = mainList.html();
        localStorage.setItem('toDoList', toDoList);
    }
);



$('#completed').hide();

function checkItem() {
    $('.check').change(function () {
        var that = $(this);
        if(that.prop('checked')){
            that.closest('li').removeClass('activeItem');
            that.closest('li').addClass('checkedItem');
            that.closest('li').clone().appendTo('#completedTasks');

        }else {
            that.closest('li').removeClass('checkedItem');
            that.closest('li').addClass('activeItem');
        }
        removeItem();
        removeFromCompleted();

        var completedList = $('#completed').html();
        localStorage.setItem('completedList', completedList);
    });
}

function removeItem() {
    $('.remove').on('click',function () {
        $(this).parent().remove();

    });
}

$( function() {
    $( "#tasks" ).sortable({
        revert: true
    });
    $( "ul, li" ).disableSelection();
});

$( function() {
    $( "#completedTasks" ).sortable({
        revert: true
    });
    $( "ul, li" ).disableSelection();
});

function removeFromCompleted() {
   $('#completedTasks').find('.check').change(function () {
       $(this).parent().remove();
   })
}



$('#completedButton').click(function () {
   $('#completed').toggle();
});

///////////////////////////////////////local storage///////////////


function getFromMainStorage() {
    if (localStorage.getItem('toDoList')) {
        var storageList = localStorage.getItem('toDoList');
        $('#main').html(storageList);
    }
    removeItem();
    checkItem();
}
getFromMainStorage();

function getFromCompletedStorage() {
    if (localStorage.getItem('completedList')) {
        var storageList = localStorage.getItem('completedList');
        $('#completed').html(storageList);
    }
    removeItem();
    checkItem();
}
getFromCompletedStorage();

$('#clearStorage').on('click', function () {
   localStorage.clear();
    $('#tasks').children().remove();
    $('#completedTasks').children().remove();
});
