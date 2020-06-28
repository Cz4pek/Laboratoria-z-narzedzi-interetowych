$(document).ready(function(){
    $("#b1").click(function(){
        $.ajax({url: "http://localhost/testajax/dane/info.html", success: function(result){
                $("#s1").html(result);
            }});

    });
    $("#b2").click(function(){
        $.ajax({url: "http://localhost/testajax/dane/act.html", success: function(result){
                $("#s1").html(result);
            }});
    });
    $("#b3").click(function(){
        $.ajax({url: "http://localhost/testajax/dane/gal.html", success: function(result){
                $("#s1").html(result);
            }});
    });
    $("#b4").click(function(){
        $.ajax({url: "http://localhost/testajax/dane/form.html", success: function(result){
                $("#s1").html(result);
            }});
    });
});



function pokazDane() {
    var dane = "Następujące dane zostaną wysłane:\n";
    dane += "Email: " + document.getElementById('email').value + "\n" + "Nazwisko i imię: " + document.getElementById('imie').value +
        "\n" + "Telefon: " + document.getElementById('numer').value + "\n" + "zainteresowania: ";
    document.getElementsByName("zainteresowania").forEach(element => {
        dane += (element.checked) ? element.value + ", " : "";
    });
    dane = dane.substring(0, dane.length - 2);
    dane += "\n" + "wiek: ";
    document.getElementsByName("wiek").forEach(element => {
        dane += (element.checked) ? element.value : "";
    });
    dane += "\nwiadomosc: " + document.getElementById('wiadomosc').value + "\n";


    if (window.confirm(dane)) return true;
    else return false;
}


// const xhr = new XMLHttpRequest();
//
// function pobierzDane(nazwaPliku) {
//     if (xhr) {
//         var url = "http://localhost/testajax/dane/" + nazwaPliku + ".html";
//         xhr.open("GET", url);
//         xhr.addEventListener("readystatechange", function () {
//             if (xhr.readyState === 4) {
//                 document.getElementById("s1").innerHTML = xhr.responseText;
//             }
//         });
//         xhr.send(null);
//     }
// }