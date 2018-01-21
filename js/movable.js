window.onload = function(){
    var WORDS_NUM = 3;
    var displayWordNum=Math.floor(Math.random()*WORDS_NUM);

    switch (displayWordNum) {
        case 0:
            document.getElementById("word01").style.display = "block";
            break;
        case 1:
            document.getElementById("word02").style.display = "block";
            break;
        case 2:
            document.getElementById("word03").style.display = "block";
            break;
        default:
    }
}
