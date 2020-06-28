function pokaz(id) {
    var tresc = "";
    switch (id) {
        case 2: tresc += pokazGalerie(); break;
        case 3: tresc += pokazPost(); break;
        case 4: tresc += pokazKontakt(); break;
        default: tresc += pokazOmnie();
    }
    document.getElementById('blok').innerHTML = tresc;
}
function pokazOmnie() {
    var tresc = '<h2><br />O mnie</h2> ';
    //operator += uzupełnia łańcuch kolejną porcją znaków:
    tresc += '<p>Lorem ipsum dolor pariatur,...</p>' +
        '<p class="srodek"><img src="images/baner.jpg" alt="Zdjęcie" /></p>' +
        '<article><h2>Moje hobby</h2><p>' +
        'Lorem ipsum dolor sit amet,...' +
        'mollit anim id est laborum.</p></article>';
    //przekaż wynik – gotową zawartość – do miejsca wywołania funkcji:
    return tresc;
}

function pokazGalerie() {
    var tresc = '<h2><br />Moja galeria</h2>';
    tresc += ' <div class="galeria">';

    for (let i = 1; i <= 10; i++) {
        tresc += '<div class="slajd"> <img src="images/obraz' + i + '.jpg" alt="Zdjęcie" /> </div>';
    }
    return tresc + '</div>';
}

function pokazKontakt() {
    var tresc = '<h2><br />Kontakt</h2>';
    tresc += '<article class="srodek" ><p>Nr kontaktowy: +48 132465798 <br />' +
        'Adres: Niecała 45 20-080 Lublin<br />' +
        'Adres email: aaaaaa@aaa.aaa<br />';
    return tresc;
}
function pokazPost() {
    var tresc = '<h2><br />Dodaj post</h2>';
    tresc += '<article class="srodek" ><form action="mailto:b.panczyk@pollub.pl" method="post" onsubmit="return pokazDane();">' +
        'Twój email:<br /> <input type="email" name="email" id="email" required /><br />' +
        'Nazwisko i Imię: <br /> <input type="text" title="Prosze podać imię i nazwisko" name="imie" id="imie" required pattern="^[A-ZŁĄŹŻĆĄŚ][a-zążśźćł]{1,25} [A-ZŁĄŹŻĆĄŚ][a-zążśźćł]{1,25}$"/><br />' +
        'Telefon: <br /> <input type="text" title="nr telefonu składa się z 9 cyfr np. 123456789" name="numer" id="numer" required pattern="[0-9]{9}" /><br />' +
        '<br />Zainteresowania: <br /> <input type="checkbox" name="zainteresowania" id="sport"  value="Sport"> Sport' +
        '<input type="checkbox" name="zainteresowania" id="muzyka" value="Muzyka"> Muzyka' +
        '<input type="checkbox" name="zainteresowania" id="film" value="Film"> Film' +
        '<input type="checkbox" name="zainteresowania" id="inne" value="Inne"> Inne <br />' +
        '<br />Wiek: <br /> <input type="radio" name="wiek" id="Mniej niż 10" value="Mniej niż 10"> Mniej niż 10' +
        '<input type="radio" name="wiek" id="10-20" value="10-20"> 10-20' +
        '<input type="radio" name="wiek" id="21-30" value="21-30"> 21-30' +
        '<input type="radio" name="wiek" id="31-40" value="31-40"> 31-40' +
        '<input type="radio" name="wiek" id="41-50" value="41-50"> 41-50' +
        '<input type="radio" name="wiek" id="Więcej niż 50" value="Więcej niż 50"> Więcej niż 50 <br /><br />' +
        'Komentarz: <br /><textarea rows="3" cols="20" id="wiadomosc" name="wiadomosc" required></textarea><br />' +
        '<br /> <input type="submit" name="wyslij" value="Wyślij" />' +
        '</form></article>';
    return tresc;
}
function pokazDane() {
    var dane = "Następujące dane zostaną wysłane:\n";
    dane += "Email: " + document.getElementById('email').value + "\n" + "Nazwisko i imię: " + document.getElementById('imie').value +
        "\n" + "Telefon: " + document.getElementById('numer').value + "\n" + "zainteresowania: ";
    document.getElementsByName("zainteresowania").forEach(element => {
        dane += (element.checked)? element.value + ", ": "";
    });
    dane = dane.substring(0, dane.length - 2);
    dane += "\n" + "wiek: ";
    document.getElementsByName("wiek").forEach(element => {
        dane += (element.checked)? element.value : "";
    });
    dane += "\nwiadomosc: " + document.getElementById('wiadomosc').value + "\n";


    if (window.confirm(dane)) return true;
    else return false;
}