// our very first callback function
$(document).ready(onReady);

console.log('jQuery intro Lecture');

function onReady() {
    console.log('jQuery is ready');
    $('h1').addClass('funny');
    $('h1').css('color', 'red');

    //getters and setters
    console.log($('h2').text()); // get text value of h2
    $('h2').text('You have been set!!!');


    // inputs (also Getter and Setter)
    $('#nameInput').val('Bob'); //setter for input val
    console.log($('#nameInput').val());

    // events
    // event handler
    $('#clickableButton').on('click', function() {
        //console.log($('#nameInput').val());
        console.log($('nameInput').val());
    });
    
    $('#secondButton').on('click', function() {
            console.log('I was clicked');
        });
}
