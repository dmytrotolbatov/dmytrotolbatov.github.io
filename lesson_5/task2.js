var input1 = [1,1,1,1,1,1,1,1],                             // 0
    input2 = [9,9,1,9,9,1,9,9],                             // 16
    input3 = [0,0,0,0,0,0,0,0],                             // 0
    input4 = [1,2,3,4,5,6,7,8,9],                           // 0
    input5 = [9,5,3,2,1,0],                                 // 0
    input6 = [5,5,3,8,10,15,2,3,5,7,18,19,1,5,4,10,5],      // 65
    input7 = [2,1,5,0,3,4,7,2,3,1,0],                       // 10
    input8 = [1,2,3,4,5,4,3,2,1];                           // 0




Array.prototype.firstOrDefault = function () {
    if (this.length > 0)
        return this[0];
    return null;
};

Array.prototype.lastOrDefault = function () {
    if (this.length > 0)
        return this[this.length - 1];
    return null;
};

Array.prototype.sum = function () {
    var res = 0;
    this.forEach(function (x) {
        res += x;
    });
    return res;
};



function KeyValue(key, value) {
    this.key = key;
    this.value = value;
}

KeyValue.prototype.equals = function (item) {
    return this.value === item.value && this.key === item.key;
};
KeyValue.prototype.isZero = function () {
    return this.value === 0 && this.key === 0;
};





function check1(arr, i, point) {
    return arr[i] > point.value && arr[i] >= arr[i + 1] && point.isZero();
}

function check2(arr, i, point1, point2) {
    return check1(arr, i, point2) && point1.key != i;
}

function solve(arr) {
    var container = [];
    var point1 = new KeyValue(0,0);
    var point2 = new KeyValue(0,0);

    for (var i = 0; i < arr.length; i++) {
        if (check1(arr, i, point1))
            point1 = new KeyValue(i, arr[i]);

        if (check2(arr, i, point1, point2))
            point2 = new KeyValue(i, arr[i]);

        if (!point1.isZero() && !point2.isZero()) {
            var sl =  arr.slice(point1.key, point2.key + 1);
            if (sl.length > 2)
                container.push(arr.slice(point1.key, point2.key + 1));
            point1 = point2;
            i = point1.key;
            point2 = new KeyValue(0, 0);
        }
    }

    var i = 0;
    while (i < container.length - 1 && container.length > 0) {
        if (container[i].lastOrDefault() == container[i + 1].firstOrDefault()
            && container[i].firstOrDefault() > container[i].lastOrDefault()
            && container[i + 1].firstOrDefault() < container[i + 1].lastOrDefault()) {
            var con = container[i]
                .slice()
                .concat(container[i + 1].slice(1));
            container.splice(i, 2, con);
            i = 0;
        } else {
            i++;
        }
    }
    
    var sum = 0;
    container.forEach(function (item) {
        var min = Math.min(item.firstOrDefault(), item.lastOrDefault());
        sum += item.map(function (x) {
            var res = min - x;
            return res > 0 ? res : 0;
        }).sum();
    });

    return sum;
}


/*  TESTS  */

console.log("1", solve(input1));
console.log("2", solve(input2));
console.log("3", solve(input3));
console.log("4", solve(input4));
console.log("5", solve(input5));
console.log("6", solve(input6));
console.log("7", solve(input7));
console.log("8", solve(input8));
