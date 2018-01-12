function displayChara(){
    $('.commuText').append(textData.getChara(playData.mode,point));
    if (textData.getTextSize(playData.mode)>point){
        point++;
        if(textData.getChara(playData.mode,point-1) === "。") {
            displayID = setTimeout(displayChara, 200,playData.mode);
        } else if (textData.getChara(playData.mode,point-1) === "、") {
            displayID = setTimeout(displayChara, 150,playData.mode);
        } else {
            displayID = setTimeout(displayChara, 100,playData.mode);
        }
    }else{
        playData.flags.endSection=true;
    }
}

function NextLocate(){
    toggleCommuUI("none");
    toggleSelectUI("display");
    for (var i = 1; i < locate.length-1; i++) {
        var visitFlag=false;
        for (var j = 1; j < visitList.length; j++) {
            if(i===visitList[j]){
                visitFlag=true;
            }
        }
        if(visitFlag===false){
            $("#nextLocate").append("<div class=\"locateCaption\" data-locateId="+ i +">" + locate[i] + "</div>")
        }
    }
    //以下江ノ島行きの分岐
    if(visitList.length===3){
        if(visitList[1]===5 || (visitList[1]===6 && month===6)){
            if(visitList[2]===7){
                $("#nextLocate").append("<div class=\"locateCaption\" data-locateId=8>" + locate[8] + "</div>")
            }
        }
    }

    $(".inGame").append("<div id=\"totalDistance\">ここまでで歩いた距離"+ playData.totalDistance +"m</div>")
}

function displayNextSometing(){
    clearTimeout(displayID);
    if($("#commuTextBox").length){
        if(playData.flags.endSection){
            playData.flags.endSection=false;
            NextSection();
        }else{
            $('.commuText').html(textData.getText(playData.mode));
            playData.flags.endSection=true;
        }
    }
}

function NextSection(){
    point=0;
    $('.commuText').html("");
    section++;
    if(textData.getText(playData.mode)==="END"){
        $("#girlStand").removeClass("fadeIn");
        $("#girlStand").addClass("fadeOut");
        setTimeout(function(){$("#girlStand").remove();},1000);
        nextCommand();
    }else{
        if(textData.getText(playData.mode)==="CHARA"){
            section++;
            if(textData.getText(playData.mode)==="0"){
                $("#girlStand").removeClass("fadeIn");
                $("#girlStand").addClass("fadeOut");
                setTimeout(function(){$("#girlStand").remove();},1000);
            }else{
                $(".inGame").append("<img id=\"girlStand\" class=\"fourWayReset animated fadeIn\" src=\"img/nc127485.png\">");
            }
            NextSection();
        }else if (textData.getText(playData.mode)==="BG") {
            //"BG"と書かれた配列の要素を読んだのでひとつ先の要素へ
            section++;
            //Aが点灯していないならAをonに、AがついていればBをonに

            bgChange(textData.getText(playData.mode));

            hideID=setTimeout(function(){$(offClass).hide();},1000);
            NextSection();
        }else{
            displayChara();
        }
    }
}

function bgChange(index){
    checkBG();

    if(offClass===".commuBG_A"){
        onClass=".commuBG_A";
        offClass=".commuBG_B";
    }else{
        onClass=".commuBG_B";
        offClass=".commuBG_A";
    }
    $("#commuMargin").css("background-image","url(\'img/blu-stripes.png\')");
    if(index==="white"){
        $(onClass).css("background-color","rgba(250,250,250 ,1)").css("background-image","none");
    }else if(index==="black"){
        $(onClass).css("background-image","none").css("background-color","rgba(33,33,33 ,1)");
    }else if (index==="blue") {
        $(onClass).css("background-image","none").css("background","#1c92d2").css("background"," -webkit-linear-gradient(to bottom,#1c92d2,#f2fcfe)").css("background","linear-gradient(to bottom, #1c92d2, #f2fcfe)");
    }else if(index==="intro"){
        $(onClass).css("background-image","url(img/intro.jpg)").css("background-color","none").css("background-size","cover");
    }else if(index==="clock"){
        $(onClass).css("background","#1c92d2").css("background-image","url(img/tower_opa.png),linear-gradient(to bottom, #1c92d2, #f2fcfe)").css("background-size","auto 100vh").css("background-repeat","no-repeat").css("background-position","left");
        $("#commuMargin").css("background-image","url(\'img/blu-stripes.png\')").css("background-size","auto");
    }else if(index==="glay"){
        $(onClass).css("background-image","none").css("background","#757F9A").css("background","-webkit-linear-gradient(to bottom, #D7DDE8,#757F9A)").css("background","linear-gradient(to bottom, #D7DDE8, #757F9A)");
    }else if (index==="orange") {
        $(onClass).css("background-image","none").css("background","#fc4a1a").css("background","-webkit-linear-gradient(to bottom, #fc4a1a, #f7b733)").css("background","linear-gradient(to bottom, #fc4a1a, #f7b733)");
    }else if(index==="kamakura"){
        $(onClass).css("background-image","url(img/kamakura.jpg)").css("background-color","").css("background-size","cover");
    }else if(index==="train"){
        $(onClass).css("background-image","url(img/train_re.jpg)").css("background-color","").css("background-size","cover");
    }else if (index==="hachimangu"){
        $(onClass).css("background-image","url(img/hachimangu.jpg)").css("background-color","transparent").css("background-size","cover");
    }else if (index==="daibutu") {
        $(onClass).css("background-image","url(img/daibutu.jpg)").css("background-color","transparent").css("background-size","cover");
    }else if (index==="normalEnd") {
        $(onClass).css("background-image","none").css("background","#fc4a1a").css("background","-webkit-linear-gradient(to bottom, #fc4a1a, #f7b733)").css("background","linear-gradient(to bottom, #fc4a1a, #f7b733)");
        $("#commuMargin").css("display","block").css("background-image","url(img/always-grey.png)");
    }else if (index==="returnEnd") {
        $(onClass).css("background-image","none").css("background","linear-gradient(to bottom, #eef2f3, #8e9eab)");
        $("#commuMargin").css("display","block").css("background-image","url(img/always-grey.png)").css("background-size","auto");
    }else if (index==="hanabi") {
        $(onClass).css("background-image","url(img/hanabi.jpg)").css("background-color","transparent").css("background-size","cover");
    }else if (index==="komachi") {
        $(onClass).css("background-image","url(img/komachi.jpg)").css("background-color","transparent").css("background-size","cover");
    }else if (index==="egara") {
        $(onClass).css("background-image","url(img/egara.jpg)").css("background-color","transparent").css("background-size","cover");
    }else if (index==="hase") {
        $(onClass).css("background-image","url(img/hase.jpg)").css("background-color","transparent").css("background-size","cover");
    }else if (index==="enoden") {
        $(onClass).css("background-image","url(img/enoden.jpg)").css("background-color","transparent").css("background-size","cover");
    }else if (index==="zeni") {
        $(onClass).css("background-image","url(img/zeni.jpg)").css("background-color","transparent").css("background-size","cover");
    }else if (index==="zeni_on") {
        $(onClass).css("background-image","url(img/zeni_on.jpg)").css("background-color","transparent").css("background-size","cover");
    }else if (index==="enoshima") {
        $(onClass).css("background-image","url(img/enoshima.jpg)").css("background-color","transparent").css("background-size","cover");
    }else if (index==="enoshima_eshima") {
        $(onClass).css("background-image","url(img/enoshima_eshima.jpg)").css("background-color","transparent").css("background-size","cover");
    }else if (index==="enoshima_end") {
        $(onClass).css("background-image","url(img/enoshima_end.jpg)").css("background-color","transparent").css("background-size","cover");
    }else if (index==="yuigahama") {
        $(onClass).css("background-image","url(img/yuigahama.jpg)").css("background-color","transparent").css("background-size","cover");
    }else if (index==="yuigahama_yu") {
        $(onClass).css("background-image","url(img/yuigahama_yure.jpg)").css("background-color","transparent").css("background-size","cover");
    }
    $(onClass).removeClass("fadeOut");
    $(onClass).addClass("fadeIn");
    $(onClass).css("display","block");
    $(offClass).removeClass("fadeIn");
    $(offClass).addClass("fadeOut");
}

$("body").on("click","#commuTextBox",function(){
    displayNextSometing();
})

$(window).keydown(function(e){
    if(e.keyCode===13){
        displayNextSometing();
    }
})

function checkBG(){
    if($(onClass).css("display")==="none" || $(offClass).css("display")==="block"){
        clearTimeout(hideID);
        $(onClass).show();
        $(offClass).hide();
    }
}
