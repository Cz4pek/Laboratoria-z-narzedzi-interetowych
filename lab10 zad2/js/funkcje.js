
$(document).ready(function () {

    $('#zapisz').click(function () {
        localStorage.setItem($('#kolor').val(), $('#rgb').val());
    });
    $('#pokaz').click(function () {
        for (let index = 0; index < localStorage.length; index++) {
            let key = localStorage.key(index);
            let value = localStorage.getItem(key);
            $('#dane').append('<p>'  + key + ': ' + value +'</p>');
            let i = index +1;
            $("p:nth-child("+ i +")").css("background-color", key);
        }
    });
    $('#wyczysc').click(function () {
        localStorage.clear();
        $('#dane').html('');
    });

});

