function changeNextTiming(){
    section=0;
    point=0;
    if(timing==="intro"){
        timing="morning";
    }else if(timing==="morning"){
        timing="day";
    }else if(timing==="day"){
        timing="sunset";
    }
    bgChange(textData.getText(playData.mode));
    section++;
    displayChara();
}

$('body').on('click',".locateCaption",function(){
    visitList.push(parseInt($(this).attr("data-locateId")));
    $(onClass).css("pointer-events","auto");
    nextCommand();
});

//それぞれ、if()の中にある状況の""あと""に行う処理です。
//0-タイトル,1-intro,2-時間イベント,3-選択画面,4-場所イベント,5-エンディング
//1-Timechange、2-入力or場所イベント,3-場所イベントorTimechange,4-入力orエンド
//なお0 -> 1の遷移はスタート！クリック時にdynamicGeneration.jsの方で処理されています

//mode=0は時間イベント、1は場所イベント
//situationはこれから行う値を入れておけばよいはず
function nextCommand(){
    section=0;
    point=0;
    checkBG();
    if(playData.situation===1){
        //イントロ後の処理
        playData.mode=0;
        playData.situation=2;
        //この先にdisplayChara()もあります
        changeNextTiming();
    }else if(playData.situation===2){
        //時間コミュ終了時の処理
        if(playData.flags.order===false){
            playData.situation=3;
            $(onClass).css("pointer-events","none");
            NextLocate();
        }else{
            toggleSelectUI("none");
            toggleCommuUI("display");
            if(visitList[visitList.length-1]===2 && month===1 && visitList.length<4){
                playData.mode=3;
            }else{
                playData.mode=1;
            }
            playData.situation=4;
            bgChange(textData.getText(playData.mode));
            section++;
            displayChara();
        }

    }else if(playData.situation===3){
        toggleSelectUI("none");
        toggleCommuUI("display");
        //選択を終えたときの処理(イベントに入る)
        //江ノ島到着のエンド・花火大会エンドもここ
        if(visitList[visitList.length-1]===8){
            playData.ending="happy";
            playData.mode=2;
            playData.situation=5;
            bgChange(textData.getText(playData.mode));
            section++;
            displayChara();
        }else if(visitList.length>2 && visitList[visitList.length-1]===7 && month===7){
            playData.ending="special";
            playData.mode=2;
            playData.situation=5;
            bgChange(textData.getText(playData.mode));
            section++;
            displayChara();
        }else{
            addDistance();
            if(playData.flags.order===false){
                playData.flags.order=true;
                if(visitList[visitList.length-1]===2 && month===1){
                    playData.mode=3;
                }else{
                    playData.mode=1;
                }
                playData.situation=4;
                bgChange(textData.getText(playData.mode));
                section++;
                displayChara();
            }else{
                playData.mode=0;
                playData.situation=2;
                //ここで時間を進めて時間コミュも表示しています
                changeNextTiming();
            }
        }
    }else if(playData.situation===4){
        //イベント終了時の処理(エンディングor続行)
        //上から順に、・距離超過のエンド・通常通りのエンド・次の時間に進むという処理です
        if(timing==="sunset"){
            playData.ending="normal";
            playData.mode=2;
            playData.situation=5;
            bgChange(textData.getText(playData.mode));
            section++;
            displayChara();
        }else if(distance.getDistance(visitList[visitList.length-2],visitList[visitList.length-1])>(2100+Math.round((Math.random()*400)) || playData.totalDistance>4200)){
            playData.ending="return";
            playData.mode=2;
            playData.situation=5;
            bgChange(textData.getText(playData.mode));
            section++;
            displayChara();
        }else{
            toggleSelectUI("display");
            toggleCommuUI("none");
            playData.situation=3;
            $(onClass).css("pointer-events","none");
            NextLocate();
        }
    }else if(playData.situation===5){
        alert("以上ここまでがいまのやつです。");
        //backTitle();
    }
}

function addDistance(){
    playData.totalDistance+=distance.getDistance(visitList[visitList.length-2],visitList[visitList.length-1]);
}
