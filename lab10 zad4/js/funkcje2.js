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
        pokaz();
    });
});

function edit(i) {

    let lista = JSON.parse(localStorage.getItem('lista'));
    lista[i].nazwa = $('#nazwa').val();
    lista[i].cena = $('#cena').val();
    lista[i].kolor = $('#kolor').val();
    lista[i].sztuki = $('#sztuki').val();
    localStorage.setItem('lista', JSON.stringify(lista));
    pokaz();
}

function pokaz() {
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
                '<td> <button type="button" onclick="edit('+i+')"> edytuj</button> </td> ' +
                '<td> <button type="button" onclick="usun('+i+')"> usun</button> </td> ' +
                '</tr>';
        }
        str += '</table></tbody>';
    }

    $('#dane').html(str);
}

function usun(i) {
    var lista = JSON.parse(localStorage.getItem('lista'));
    lista.splice(i, 1);
    localStorage.setItem('lista', JSON.stringify(lista));
    pokaz();
}