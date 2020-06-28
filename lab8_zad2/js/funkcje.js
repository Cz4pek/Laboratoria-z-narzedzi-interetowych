
$(document).ready(function () {
    $('article').css('background-color' , 'grey');
    $('article').css('font-weight' , 'bold');
    $('input').css('font-weight' , 'bold');
    $('#monthly').addClass('zielony');
    $('#intrest').addClass('zielony');
    $('.zielony').css('color', 'red');
    //$('.zielony').css('display' , 'none')
    $('#button1').click(function oblicz() { 

        $('.zielony').css('background-color' , 'rgb(122, 243, 168)')
       // $('.zielony').fadeIn('slow');
        var amount = parseInt($('#amount').val());
        var instalment = parseInt($('#instalment').val());
        var procent = parseFloat($('#procent').val() / 100);
        var temp1 = ((amount * procent/12) /(1 -(1/Math.pow((1+procent/12),instalment))));
        var temp2 = (temp1*instalment);
        if (isNaN(temp1) || !isFinite(temp1)) {
            $('#monthly').val("nieprawidłowa wartość");
        } 
        else {
            $('#monthly').val(temp1.toFixed(2));
        }
        if (isNaN(temp2) || !isFinite(temp2)) {
            $('#intrest').val("nieprawidłowa wartość");
        } 
        else {
            $('#intrest').val(temp2.toFixed(2));
        }
    });

});

