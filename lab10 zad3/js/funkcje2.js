$(document).ready(function () {

    $('#zapisz').click(function () {
        var item = {};
        item.nazwa = $('#nazwa').val();
        item.cena = $('#cena').val();
        item.kolor = $('#kolor').val();
        item.sztuki = $('#sztuki').val();
        var lista = JSON.parse(localStorage.getItem('lista'));
        if (lista === null) lista = [];
        lista.push(item);
        localStorage.setItem('lista', JSON.stringify(lista));
    });
    $('#pokaz').click(function () {
        var str = '<h2>Koszyk: </h2>';
        let lista = JSON.parse(localStorage.getItem('lista'));
        if (lista === null) str += '<p> Na liście nie ma zakupów  </p>';
        else {
            str = '<br><table style="border:  1px solid black;">' +
                '<tbody>' +
                '<tr> ' +
                '<th>Nazwa produktu </th> ' +
                '<th>Cena </th> ' +
                '<th>Kolor </th> ' +
                '<th>Liczba sztuk </th> ' +
                '</tr>';
            for (let i = 0; i < lista.length; i++) {
                str += '<tr>' +
                    '<td>' + lista[i].nazwa + '</td> ' +
                    '<td>' + lista[i].cena + '</td>' +
                    '<td>' + lista[i].kolor + '</td> ' +
                    '<td>' + lista[i].sztuki + '</td> ' +
                    '</tr>';
            }
            str += '</table></tbody>';
        }

        $('#dane').append(str);
    });
    $('#wyczysc').click(function () {
        localStorage.clear();
        $('#dane').html('');
    });

});
