var newsUrl = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.pravda.com.ua%2Frss%2F';

var words = /[a-zа-яіїєґ'-]+/gi;
$.getJSON(newsUrl, function (data) {
    var arrTexts = [];
    for(var i = 0; i < data.items.length; i++){
        arrTexts.push(data.items[i].content);
    }
    var completeText = arrTexts.join(' ').toLowerCase();
    var sortedWords = completeText.match(words).sort();
    var wordsObj = {};

    for(var i = 0; i < sortedWords.length; i++){
        wordsObj[sortedWords[i]] = (wordsObj[sortedWords[i]] || 0) + 1;  //object: what word and how many times
    }

    var wordsSorted = Object.keys(wordsObj).sort(function (a, b) {      //sort from big to small
        return wordsObj[b] - wordsObj[a]
    });

    var mostCommonWords = [];

    for (var k = 0; k < wordsSorted.length; k++){
        if (wordsSorted[k] != 'на' && wordsSorted[k] != 'в' && wordsSorted[k] != 'з' && wordsSorted[k] != 'у' && wordsSorted[k] != 'що' && wordsSorted[k] != 'та' && wordsSorted[k] != 'про' && wordsSorted[k] != 'були' && wordsSorted[k] != 'за' && wordsSorted[k] != 'і' && wordsSorted[k] != 'не'){
            mostCommonWords.push(wordsSorted[k]);
            if (mostCommonWords.length == 5) break;
        }
    }

    var fiveLongestWords = [];
    var allLongestWords = longestWords(completeText);

    for (var k = 0; k < allLongestWords.length; k++){
        if (!isInArray(allLongestWords[k], fiveLongestWords)){
            fiveLongestWords.push(allLongestWords[k]);
            if (fiveLongestWords.length == 5) break;
        }
    }

    var fiveShortestWords = [];
    var allShortestWords = shortestWords(completeText);

    for (var k = 0; k < allShortestWords.length; k++){
        if(!isInArray(allShortestWords[k], fiveShortestWords) && Number(allShortestWords[k]) != Number && allShortestWords[k] != '–'){
            fiveShortestWords.push(allShortestWords[k]);
            if (fiveShortestWords.length == 5) break;
        }
    }

    console.log('Most common words in headlines: ' + mostCommonWords.toString());
    console.log('The shortest words in headlines: ' + fiveShortestWords);
    console.log('The longest words in headlines: ' + fiveLongestWords.toString());
});

function longestWords(str) {
    var longestWords = str.split(' ').sort(function (a, b) {
        return b.length - a.length;
    });
    return longestWords;
}

function shortestWords(str) {
    var shortestWords = str.split(' ').sort(function (a, b) {
        return a.length - b.length;
    });
    return shortestWords;
}

function isInArray(value, array) {
    return array.indexOf(value) > -1;
}