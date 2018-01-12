window.onload = function(){
    var htmlText="";
    var words=[["作りたいものを","作れる人に"],["なんとかなるよ","絶対だいじょうぶだよ"],["律子だけを","追いかけ続ける"]];
    var words_ref=["0","http://ccsakura-official.com","http://idolmaster.jp/event/765as_newyearlive.php"]
    var words_position=["28.6vh","14.6vh","21.6vh"];
    var displayWordNum=Math.floor(Math.random()*words.length);

    if(words_ref[displayWordNum]==="0"){
        htmlText = "<h1> <span>" + words[displayWordNum][0] + "</span> <br /> <span> " + words[displayWordNum][1] + " </span> </a> </h1>";
    }else{
        htmlText = "<h1> <a href=\"" + words_ref[displayWordNum] + "\"> <span>" + words[displayWordNum][0] + "</span> <br /> <span> " + words[displayWordNum][1] + " </span> </a> </h1>";
    }

    document.getElementsByClassName("word")[0].innerHTML = htmlText;
    if(document.documentElement.clientHeight<document.documentElement.clientWidth){
        document.getElementsByClassName("word")[0].style.marginLeft= words_position[displayWordNum];
    }
}
