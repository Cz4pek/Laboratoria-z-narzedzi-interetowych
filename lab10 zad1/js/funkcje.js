
$(document).ready(function () {

    $('#zapisz').click(function () {
        sessionStorage.setItem($('#kolor').val(), $('#rgb').val());
    });
    $('#pokaz').click(function () {
        for (let index = 0; index < sessionStorage.length; index++) {
            let key = sessionStorage.key(index);
            let value = sessionStorage.getItem(key);
            $('#dane').append('<p>'  + key + ': ' + value +'</p>');
            let i = index +1;
            $("p:nth-child("+ i +")").css("background-color", key);
        }
    });
    $('#wyczysc').click(function () {
        sessionStorage.clear();
        $('#dane').html('');
    });

});

