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