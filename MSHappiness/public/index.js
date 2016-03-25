console.log('hello from index.js');

//click event example that triggers an ajax call
$(".helloButton").click(function () {
    console.log('clicked');
    
   //ajax example, very basic 
    $.ajax({
        method: "GET",
        url: "http://localhost:1337/test1",

    }).done(function (data){
        console.log('data', data);
        $('.hello').html(data[0].building);
    })
});


//example of a post reques
$(".postTest").click(function (){
    var postObj = { "text": $(".testInput").val() };
    console.log('postobj' , postObj);
    $.ajax({
        method: "POST",
        //dataType : "html",
        url: "http://localhost:1337/test2",
        data: postObj
    }).done(function (msg) {
        console.log("data saved: ", msg);
    });
})