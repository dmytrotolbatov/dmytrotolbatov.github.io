function maxOfArr(n) {
    return Math.max.apply(null, n);
}

function find(array, value) {

    for (var i = 0; i < array.length; i++) {
        if (array[i] == value) return i;
    }
}

function water(n) {
    var maxPick = maxOfArr(n);
    var newArr1 = [];
    var newArr2 = [];
    var el = find(n, maxPick);
    var sum = 0;
    var sumNew = 0;
    var copy = n.slice();


    for(var i = 0; i < el; i++){
        if (n[i] < n[i - 1] && n[i] < n[i + 1]){
            n[i] = n[i - 1];
            newArr1.push(n[i]);
        }else {
            newArr1.push(n[i]);
        }
    }
    for(var j = el; j < n.length; j++){
        if (n[j] < n[j - 1] && n[j] < n[j + 1]){
            n[j] = n[j + 1];
            newArr2.push(n[j]);
        }else{
            newArr2.push(n[j]);
        }
    }
    var arrWhole = newArr1.concat(newArr2);

    n.forEach(function (i) {
        sumNew = sumNew + parseInt(i);
    });
    copy.forEach(function (i) {
        sum = sum + parseInt(i);
    });
    console.log(arrWhole);
    return sumNew - sum;
}

