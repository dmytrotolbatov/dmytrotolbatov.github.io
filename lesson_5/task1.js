var mode = 'Add';
var el = null;
var buttonAdd = document.getElementById('add');
var archive = [];
function toDo() {
    var input = document.getElementsByName('title')[0];
    if(input.value){
        if(mode == 'Add'){
            var li = document.createElement('li');
            var check = document.createElement('input');
            check.setAttribute("type", "checkbox");
            li.innerText = input.value;
            li.onclick = click;
            var ul = document.getElementById('list');
            ul.appendChild(li);
            ul.appendChild(check);
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
