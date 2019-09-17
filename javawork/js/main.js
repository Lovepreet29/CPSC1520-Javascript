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

    (Object reference) objref.addeventlistener datatype Custom Event Handler 
 */

submitBidButton.addEventListener('click', onSubmitBid );

function onSubmitBid(eventObject){

    const bidRecieved=parseInt(productBid.value);
    console.log(bidRecieved)

}
