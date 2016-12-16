var API_KEY = "cDBb06QnUQmshoqH6nwUSfFeFWqZp1do64yjsnWc7UXgNyqRt3";

var yodaUrl = "https://yoda.p.mashape.com/yoda";
var loveUrl = 'https://love-calculator.p.mashape.com/getPercentage';
var faceUrl = 'https://faceplusplus-faceplusplus.p.mashape.com/detection/detect';


function useYoda(text) {
    text = $('#joda').val();
    $.ajax({
        method: "GET",
        url: yodaUrl,
        cache: false,
        headers: {
            'X-Mashape-Key': API_KEY
        },
        data: {
            sentence: text
        },
        success: function (data) {
            $('#jodaAnswer').text(data);

        }
    });
}

function makeLove(male, female) {
    male = $('#male').val();
    female = $('#female').val();
    $.ajax({
        method: 'GET',
        url: loveUrl,
        cache: false,
        headers: {
            'X-Mashape-Key': API_KEY
        },
        data:{
            fname: male,
            sname: female
        }
    }).then(function (data) {
        $('#loveChecker').text(data.percentage + "%" + ' ' + data.result);
    });
}

function checkFace(attr, imgUrl) {
    attr = 'glass,gender,age,race,smiling';
    imgUrl = $('#face').val();
    $.ajax({
        method: 'GET',
        url: faceUrl,
        cache: false,
        headers: {
            'X-Mashape-Key': API_KEY
        },
        data:{
            attribute: attr,
            url: imgUrl
        }
    }).then(function (data) {
        var faceObject = data.face[0].attribute;
        $('#faceInfo').text('Age: ' + faceObject.age.value + '; ' + " Gender: " + faceObject.gender.value + '; ' + ' Glasses: ' + faceObject.glass.value + '; ' + ' Race: ' + faceObject.race.value + '; ' + ' Smile: ' + faceObject.smiling.value + '% ');
    });
}

$('#jodaSubmit').on('click', function () {
    useYoda();
});

$('#loveSubmit').on('click', function () {
    makeLove();
});

$('#faceSubmit').on('click', function () {
    checkFace();
});