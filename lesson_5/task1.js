$(document).ready(function () {
    $('#archive').hide();

    var input = $('#item');

    $('#add').on('click', function () {
        var value = input.val();
        $('#tasks').append('<li>');
        $('li').last().text(value).append('<button class="edit">Edit</button>').append('<button class="remove">Remove</button>');
        removeItem();
        editItem();
        done();

        input.val('');
    });

    function removeItem() {
        $('.remove').on('click',function () {
            $(this).parent().remove();
        });
    }

    function editItem() {
        $('.edit').on('click', function () {
            var change = prompt('Edit this item');
            if(change == null){
                return;
            }else{
                $(this).closest('li').text(change).append('<button class="edit">Edit</button>').append('<button class="remove">Remove</button>');
            }

            removeItem();
            editItem();
        });
    }

    function done() {
        $('li').click(function () {
            $(this).toggleClass('check');
        });
    }

    $( function() {
        $( "#tasks" ).sortable({
            revert: true
        });
        $( "ol, li" ).disableSelection();
    } );

    $('#titleButton').on('click', function () {
        var heading = $('#title').val();
        $('#heading').text(heading);
    });
    
    $('#save').on('click', function () {
        $('#list').clone().appendTo('#archive');
        $('#tasks').text('');
        $('#heading').text('');
        removeItem();
        editItem();

    });

    $('#showArchive').on('click', function () {
        $('#archive').show();
    });

    $('#hideArchive').on('click', function () {
        $('#archive').hide();
    });


});
















/*
var mode = 'Add';
var el = null;
var buttonAdd = document.getElementById('add');
var archive = [];
function toDo() {
    var input = document.getElementsByName('title')[0];
    if(input.value){
        if(mode == 'Add'){
            var li = document.createElement('li');
            li.classList.add('drag');
            li.innerText = input.value;
            li.onclick = click;
            var ul = document.getElementById('list');
            ul.appendChild(li);
            input.value = '';
        }else{
            el.innerText = input.value;
            input.value = '';
            mode = 'Add';
        }
    }else{
        alert('Nothing to add');
    }
    buttonAdd.innerHTML = 'Add';
    li.ondblclick = done;
}

function remove() {
    var ul = document.getElementById('list');
    ul.removeChild(ul.lastChild);
    ul.removeChild(ul.lastChild);
}



function click(event) {
    el = event.toElement;
    var input = document.getElementById('item');
    input.value = el.innerText;
    mode = 'Edit';
    buttonAdd.innerHTML = 'Edit';
}

function archiveAdd() {
    var list = document.getElementById('list');
    var elems = list.getElementsByTagName('*');
    var length = elems.length;
    for(var i = 0; i < length; i++){
        archive.push(elems[i]);
    }
    for(var j = 0; j < length; j++){
        var ul = document.getElementById('list');
        ul.removeChild(ul.lastChild);
    }
}

function show() {
    for(var i = 0; i < archive.length; i++){
        var ul = document.getElementById('list');
        ul.appendChild(archive[i]);
    }
}


$( function() {
    $( "#list" ).sortable({
        revert: true
    });

    $( "ul, li" ).disableSelection();
} );

function done() {
    el = event.toElement;
    el.classList.toggle('dragDone');

}
*/







