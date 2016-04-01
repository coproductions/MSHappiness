console.log('hello from index.js');

//click event example that triggers an ajax call
$(".helloButton").click(function () {
    console.log('clicked');
    
    //ajax example, very basic 
    $.ajax({
        method: "GET",
        url: "http://localhost:1337/test1",

    }).done(function (data) {
       // console.log('data', data);
        $('.hello').html(data[0].building);
    })
});


//example of a post request after a button click
$(".postTest").click(function () {
    var postObj = { "text": $(".testInput").val() };
    console.log('postobj' , postObj);
    $.ajax({
        method: "POST",
        //dataType : "html",
        url: "http://localhost:1337/test2",
        data: postObj
    }).done(function (msg) {
       // console.log("data saved: ", msg);
        $(".testInput").val("")
    });
});


$(".postBuildingNumber").click(function () {
    var postObj = { "building": $(".building").val() };
    console.log('postobj' , postObj);
    $.ajax({
        method: "POST",
        //dataType : "html",
        url: "http://localhost:1337/building",
        data: postObj
    }).done(function (msg) {
         console.log("client data saved: ", msg);
        $(".building").val("")
    });
});

$(".postQuestionInfo").click(function () {
    var postObj = { "status": $(".status").val(), "comments": $(".comments").val() };
    console.log('postobj' , postObj);
    var questionId = 1;
    $.ajax({
        method: "POST",
        //dataType : "html",
        url: "http://localhost:1337/question"+questionId,
        data: postObj
    }).done(function (msg) {
        console.log("client data saved: ", msg);
        //$(".building").val("")
    });
});


//click event example that triggers an ajax call to get a random reddit video
$(".showVideo").click(function () {
    
    //ajax example, very basic 
    $.ajax({
        method: "GET",
        dataType : "json",

        url: "https://www.reddit.com/r/funnyvideos.json",

    }).done(function (data) {
       
        $('.video').html(getIframe(data));
    })
});

//$("#inputForm").submit(function () {
$(".postData").click(function() {
    var data = {
        userName: $('.username').val(),
        bldgNum: $('.building').val(),
        status: $('.status').val(),
        comments: $('.comments').val()
    };
//    alert("called");
    $(".hello").html(data.userName+data.bldgNum+data.status+data.comments);
    //var userName = $(".username").val();
    var postObj = data;
    console.log('postobj' , postObj);
    $.ajax({
        method: "POST",
        //dataType : "html",
        url: "http://localhost:1337/test2",
        data: postObj
    }).done(function (msg) {
        // console.log("data saved: ", msg);
        $(".hello").html(data[0].building);
    });
});

var getIframe = function (data) {
    var rnd = Math.floor(Math.random() * 25);
    var h = data.data.children[rnd].data.media.oembed.height;
    var w = data.data.children[rnd].data.media.oembed.width;
    var url = data.data.children[rnd].data.media.oembed.url;
    if (url.indexOf('watch?v=') > 0) {
        var splitArr = url.split('watch?v=');
        url = splitArr[0] + 'embed/' + splitArr[1];
    }
    return '<iframe width="' + w + '" height="' + h + '"src="' + url + '"></iframe>';;
};


//var getPercentageData = function () {
function getPercentageData()
 {    /*
    if (status == "happy")
        var urlStr = "http interface to query happy. expecting an array of ints as return value" ;
    else if (status == "sad")
        var urlStr = "";
    else 
        var urlStr = "";

    // uncomment when the API is implemented in server
    $.ajax({
        method: "GET",
        url: urlStr

    }).done(function (data) {
        //computeAverage(data);
       });
     */
    alert("called");
    var data = new [
        {
            userName: "user1", 
            bldgNum: "25", 
            status: "happy", 
            comments: ""
        },
        {
            userName: "user2", 
            bldgNum: "25", 
            status: "happy", 
            comments: ""
        },
        {
            userName: "user3", 
            bldgNum: "25", 
            status: "happy", 
            comments: ""
        },
        {
            userName: "user4", 
            bldgNum: "25", 
            status: "sad", 
            comments: ""
        },
        {
            userName: "user5", 
            bldgNum: "25", 
            status: "sad", 
            comments: ""
        },
        {
            userName: "user6", 
            bldgNum: "25", 
            status: "neutral", 
            comments: ""
        }];
    
    alert("called 2");
    var happyCount, sadCount, neutralCount, otherCount = 0;
    var len = data.Length;
    for (var i = 0; i < len; i++) {
        var status = data[i].status;
        if (status == "happy") {
            happyCount = happyCount + 1;
        } else if (status == "sad") {
            sadCount++;
        } else if (status == "neutral") {
            neutralCount++;
        } else {
            otherCount++;
        }
    }

    if (len > 0) {
        happyCount = (happyCount / len) * 100;
        sadCount = (sadCount / len) * 100;
        neutralCount = (neutralCount / len) * 100;
        otherCount = (otherCount / len) * 100;
    }
    var percentageData = new {
        happCount: happCount,
        sadCount: sadCount,
        neutralCount: neutralCount,
        otherCount: otherCount
    };
    
    alert(percentageData.happyCount);
    var d = new [200, 60, 15, 10];
    return d;

    return [200, 60, 15, 10];
    //alert(200);
    //return percentageData;
}

var computePercentage = function (v) {
    
    if (len > 0) {
        sum = sum / len;
    }
    return sum;
}


// <form id="inputForm">
// <input type="submit" value="submit"><br><br />
//</form>
/*
 *
 <div>hello from index</div>
    <button class="helloButton">click me</button>
    <div class="hello"></div>
    <input class="testInput" />
    <button class="postTest">post this</button>
    <button class="showVideo">show me a video</button>
    <div class="video">
        <!--<iframe class="videoFrame" width="420" height="315"
        src="">-->
   <!-- </iframe>-->

    </div>
    <video></video>

    <button class="PieChart">PieChart</button>

 * */