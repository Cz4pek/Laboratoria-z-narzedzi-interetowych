
$(document).ready(function () {

    $('#zapisz').click(function () {
        var item = {};
        item.nazwa = $('#nazwa').val();
        item.cena = $('#cena').val();
        item.kolor = $('#kolor').val();
        item.sztuki = $('#sztuki').val();
        localStorage.setItem(item.nazwa, JSON.stringify(item));
    });
    $('#pokaz').click(function () {
        $('#dane').append('<h2>Koszyk: </h2>');
        for (let index = 0; index < localStorage.length; index++) {
            let key = localStorage.key(index);
            let value = JSON.parse(localStorage.getItem(key));
            $('#dane').append('<p>'  + 'Nazwa produktu: ' + value.nazwa + '<br>'  + 'Cena: ' + value.cena + '<br>' + 'Kolor: ' + value.kolor + '<br>' + 'Ilość sztuk: ' + value.sztuki +'</p>');
        }
    });
    $('#wyczysc').click(function () {
        localStorage.clear();
        $('#dane').html('');
    });

});

