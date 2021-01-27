const phoneMinus = document.querySelector("#phoneMinus");
const phonePlus = document.querySelector("#phonePlus");
const phoneCaseMinus = document.querySelector("#phoneCaseMinus");
const phoneCasePlus = document.querySelector("#phoneCasePlus");
const phoneRemove = document.querySelector("#phoneRemove");
const phoneCaseRemove = document.querySelector("#phoneCaseRemove");



/*----------------------------------
 PHONE AMOUNT INCREMENT
----------------------------------*/
phonePlus.addEventListener("click",function(){
    let phoneAmount = document.querySelector("#phoneAmount").value;
    let phoneAmountNumber = parseInt(phoneAmount);
    phoneAmountNumber++;
    document.querySelector("#phoneAmount").value = phoneAmountNumber;

    let phonePrice = document.querySelector("#phonePrice");
    phonePrice.innerText = phoneAmountNumber * 1219;

    total();


})






/*----------------------------------
 PHONE AMOUNT DECREMENT
----------------------------------*/
phoneMinus.addEventListener("click",function(){
    let phoneAmount = document.querySelector("#phoneAmount").value;
    let phoneAmountNumber = parseInt(phoneAmount);
    phoneAmountNumber--;
    if(phoneAmountNumber<0){
        phoneAmountNumber = 0;
    }
    document.querySelector("#phoneAmount").value = phoneAmountNumber;

    let phonePrice = document.querySelector("#phonePrice");
    phonePrice.innerText = phoneAmountNumber * 1219;
    total();

})

/*----------------------------------
 PHONE REMOVE AREA
----------------------------------*/
phoneRemove.addEventListener("click",function(){
    document.querySelector("#phoneAmount").value = 0;
    document.querySelector("#phonePrice").innerText = 0;
    document.querySelector("#phone").style.display = "none";
    total();
})


/*----------------------------------
 PHONE CASE AMOUNT INCREMENT
----------------------------------*/
phoneCasePlus.addEventListener("click",function(){
    let phoneCaseAmount = document.querySelector("#phoneCaseAmount").value;
    let phoneCaseAmountNumber = parseInt(phoneCaseAmount);
    phoneCaseAmountNumber++;
    document.querySelector("#phoneCaseAmount").value = phoneCaseAmountNumber;

    let phoneCasePrice = document.querySelector("#phoneCasePrice");
    phoneCasePrice.innerText = phoneCaseAmountNumber * 59;
    total();


})
/*----------------------------------
 PHONE CASE AMOUNT DECREMENT
----------------------------------*/
phoneCaseMinus.addEventListener("click",function(){
    let phoneCaseAmount = document.querySelector("#phoneCaseAmount").value;
    let phoneCaseAmountNumber = parseInt(phoneCaseAmount);
    phoneCaseAmountNumber--;
    if(phoneCaseAmountNumber<0){
        phoneCaseAmountNumber = 0;
    }
    document.querySelector("#phoneCaseAmount").value = phoneCaseAmountNumber;

    let phonePrice = document.querySelector("#phoneCasePrice");
    phoneCasePrice.innerText = phoneCaseAmountNumber * 59;
    total();

})

/*----------------------------------
 PHONE CASE REMOVE AREA
----------------------------------*/
phoneCaseRemove.addEventListener("click",function(){
    document.querySelector("#phoneCaseAmount").value = 0;
    document.querySelector("#phoneCasePrice").innerText = 0;
    document.querySelector("#phoneCase").style.display = "none";
    total();
})

/*----------------------------------
TOTAL CALCULATION AREA 
----------------------------------*/

function total(){
    let phonePrice = document.querySelector("#phonePrice").innerText;
    let phonePriceNumber = parseFloat(phonePrice);

    let phoneCasePrice = document.querySelector("#phoneCasePrice").innerText;
    let phoneCasePriceNumber = parseFloat(phoneCasePrice);


    let subtotal = document.querySelector("#subtotal");
    subtotal.innerText = phonePriceNumber + phoneCasePriceNumber;

    let subtotalAmount = document.querySelector("#subtotal").innerText;
    let subtotalAmountNumber = parseFloat(subtotalAmount);
    let tax = document.querySelector("#tax");
    taxAmount = (subtotalAmountNumber *10)/100;
    tax.innerText = taxAmount;

    let total = document.querySelector("#total");
    total.innerText = subtotalAmountNumber + taxAmount;

}

