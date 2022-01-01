var btn = document.getElementById("btn");
var clr = document.getElementById("clr");
var result = document.getElementById("result");
var loader = document.getElementById("loader");


btn.addEventListener("click",function clac(){
var amount = document.getElementById("amount").value;
var bat = document.getElementById("bat").value;
var saving = document.getElementById("savings").value;
var payTime = document.getElementById("payTime").value;


loader.style.display="block"

var tip = amount * (bat/100)

var totalBat = document.getElementById("totalBat");
var totalAmount = document.getElementById("totalAmount");
var monthlypay = document.getElementById("monthlyPay");


totalBat.value = tip;
totalAmount.value = Number(amount) +tip ;
monthlypay.value = (Number(amount) +tip)/Number(payTime*12) + Number(saving)

setTimeout(function(){


result.style.display="block"
loader.style.display="none"

},1000)

})


