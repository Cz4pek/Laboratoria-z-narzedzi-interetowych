function oblicz() { 
    var amount = parseInt(document.getElementById('amount').value);
    var instalment = parseInt(document.getElementById('instalment').value);
    var procent = parseFloat(document.getElementById('procent').value)/100;
    var intrest = document.getElementById('intrest');
    var monthly = document.getElementById('monthly');
    var temp1 = ((amount * procent/12) /(1 -(1/Math.pow((1+procent/12),instalment))));
    var temp2 = (temp1*instalment);
    if (isNaN(temp1) || !isFinite(temp1)) {
        monthly.value = "nieprawidłowa wartość";
    } 
    else {
        monthly.value =  temp1.toFixed(2);
    }
    if (isNaN(temp2) || !isFinite(temp2)) {
        intrest.value = "nieprawidłowa wartość";
    } 
    else {
        intrest.value = temp2.toFixed(2);
    }
   
}
