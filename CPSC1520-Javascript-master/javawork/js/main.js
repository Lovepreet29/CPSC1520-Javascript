/*
    Data types 
    Strings
    Numbers
    Boolean
    Object
    Arrays
*/

const productName=document.querySelector('.product-name');
const productBid=document.querySelector('.product-bid');
const submitBidButton=document.querySelector('.submit-bid');

/*

    (Object reference) objref.addeventlistener (EventType, CustomEventHandler) 
 */

submitBidButton.addEventListener("click", function (eventObject){

    const addshipping = document.querySelector('.add-shipping');
    // console.log(addshipping.checked)
    
    const emaillist = document.querySelector('.email-list');
     console.log(emaillist.vlaue)

    /*if(!addshipping.checked){
        console.log("add shipping to the bid");
    }*/
});

/*
if statement
is a one way branch in login
(btween brackets conditions) =====>> true or false
syntax
if(checking the condition you want to ask){

}
*/
   



/*
function onSubmitBid(eventObject){
/* 
Properties can be read and write 
properties can be read only.    
Number Data Types
parseInt('value string')--------> String------>> whole number
parseFloat('value string')------> String------>> decimal number
tofixed(number) number represents -----> how many decimal places you require

Rounding 
math.floor
math.ceiling
*/
/*
    const bid=parseFloat(productBid.value)
    console.log(bid.toFixed(2))
}*/
