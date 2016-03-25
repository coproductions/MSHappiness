console.log('hello from index.js');

//click event example that triggers an ajax call
$(".helloButton").click(function () {
    console.log('clicked');
    
   //ajax example, very basic 
    $.ajax({
        url: "http://localhost:1337/test1",

    }).done(function (data){
        console.log('data', data);
        $('.hello').html(data[0].building);
    })
});
