$(function(){
    var ua=navigator.userAgent.toLowerCase();
    if(ua.indexOf('trident')!==-1 || ua.indexOf('edge')!==-1){
        alert("このページはMicrosoft製ブラウザで正常に動作しません。\nChromium派生や、Firefoxなどのブラウザをご利用ください");
        return ;
    }
    $('body').append("<div id=\"allMother\"><div id=\"titleFrame\" class=\"fadeIn animated\"><div class=\"titleBG\"></div><div id=\"titleMargin\"></div><div class=\"month\">"+ month +"月</div><div class=\"title   fourWayReset\"><b>Doki Doki Kamakura Time!</b></div><div class=\"fourWayReset start\">Start!!</div><a href=\"license.html\" id=\"license\" target=\"_blank\">License</a></div></div>");
})

$('body').on('click','.start',function(){
    $('#titleFrame').removeClass("fadeIn");
    $('#titleFrame').addClass("fadeOut");
    playData.situation=1;
    setTimeout(function(id){$("#"+id).remove();},1000,"titleFrame");
    $('#allMother').append("<div class=\"inGame fadeIn animated\"><div class=\"commuBG_A animated\"></div><div class=\"commuBG_B animated\"></div><div id=\"commuMargin\"></div><div id=\"commuTextBox\" class=\"fourWayReset\"></div><div class=\"commuText\"></div></div>");
    bgChange("intro");
    displayChara();
})

function toggleCommuUI(toggle){
    if(toggle==="none"){
        $("#commuTextBox").remove();
        $(".commuText").remove();
    }else if(toggle==="display"){
        $("#commuTextBox").remove();
        $(".commuText").remove();
        $('.inGame').append("<div id=\"commuTextBox\" class=\"fourWayReset\"></div><div class=\"commuText\"></div>");
    }
}

function toggleSelectUI(toggle){
    if(toggle==="none"){
        $("#nextLocate").remove();
        $("#totalDistance").remove();
    }else if(toggle==="display"){
        $("#nextLocate").remove();
        $("#totalDistance").remove();
        $('.inGame').append("<div id=\"nextLocate\" class=\"fourWayReset\"></div>");
    }
}
