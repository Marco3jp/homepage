window.onload=function(){
    var firstdataset=[];
    var lastdataset=[];
    var firstTmpObj=[];
    var lastTmpObj=[];
    var baseObj={
        label:"",
        data:0,
        backgroundColor:""
    }

    var firstColors=[];
    var firstScheme = palette.listSchemes("rainbow")[0];
    var firstArgs = [first.labels.length,0.5];
    firstColors = firstScheme.apply(firstScheme, firstArgs);

    for (var i = 0; i < first.labels.length; i++) {
        firstTmpObj.push(Object.assign({},baseObj));
        firstTmpObj[i].no=i;
        firstTmpObj[i].label=first.labels[i];
        firstTmpObj[i].data=[first.datas[i]];
        firstTmpObj[i].backgroundColor="#"+firstColors[i];
        firstdataset.push(firstTmpObj[i]);
    }

    var firstObj={
        datasets:firstdataset,
    }

    var lastColors=[];
    var lastScheme = palette.listSchemes("rainbow")[0];
    var lastArgs = [first.labels.length,0.5];
    lastColors = lastScheme.apply(lastScheme, lastArgs);

    for (var i = 0; i < last.labels.length; i++) {
        lastTmpObj.push(Object.assign({},baseObj));
        lastTmpObj[i].no=i;
        lastTmpObj[i].label=last.labels[i];
        lastTmpObj[i].data=[last.datas[i]];
        lastTmpObj[i].backgroundColor="#"+lastColors[i];
        lastdataset.push(lastTmpObj[i]);
    }

    var lastObj={
        datasets:lastdataset,
    }

    for (var i = 0; i < first.datas.length; i++) {
        first.totalTime+=first.datas[i];
    }

    for (var i = 0; i < last.datas.length; i++) {
        last.totalTime+=last.datas[i];
    }

    makeChart(0,firstObj);
    makeChart(1,lastObj);
}


var makeChart=function(which,dataObj){
    var ctxBar;
    var time;
    if(which){
        ctxBar= document.getElementById("lastHalfBar").getContext('2d');
        time=last.totalTime;
    }else{
        ctxBar= document.getElementById("firstHalfBar").getContext('2d');
        time=first.totalTime;
    }

    var statusChart = new Chart(ctxBar, {
        type: 'horizontalBar',
        data: dataObj,
        options: {
            maintainAspectRatio:false,
            scales: {
                yAxes: [{
                    stacked: true,
                    gridLines: {
                        /*
                        display: false,
                        drawBorder: false
                        */
                    },
                }],
                xAxes: [{
                    display: true,
                    stacked: true,
                    ticks:{
                        max:time,
                        fontSize:15
                    },
                    gridLines: {
                        /*
                        display: false,
                        drawBorder: false,
                        */
                    },
                }],
            },
            legend:{
                /*display:false,*/
            },
            ticks:{
                /*display:false,*/
            },
            tooltips: {
                mode: 'nearest'
            },
        }
    });
}
