console.log('hello from index.js');
$(".helloButton").click(function () {
    console.log('clicked');
    
    
    $.ajax({
        url: "http://localhost:1337/test1",

    }).done(function (data){
        console.log('data', data);
        $('.hello').html(data[0].building);
    })
});
