$('#myHeader h1').html('some staff');
$('ul').append('<li>coffe</li>');
$('#addOne').click(function() {
    var value = $('#impName').val();
    $('ul').append('<li>'+value+'</li>');
});