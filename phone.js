// function updatePhoneNumber(isIncrease){
//     const caseNumberfield = document.getElementById('phone-number-field');
//     const caseNumberString = caseNumberfield.value;
//     const previousCaseNumber = parseInt(caseNumberString);
//     let newCaseNumber;
//     if(isIncrease === true){
//      newCaseNumber = previousCaseNumber + 1;
//     }
//     else{
//      newCaseNumber = previousCaseNumber - 1;
//     }
//     caseNumberfield.value = newCaseNumber;
//     return newCaseNumber;
// }
// function updatePhoneTotalPrice(newCaseNumber){
//  const caseTotalPrice = newCaseNumber * 1219;
//  const caseTotalElement = document.getElementById('phone-total');
//  caseTotalElement.innerText = caseTotalPrice;
// }



document.getElementById('btn-phone-plus').addEventListener('click', function(){
 const newPhoneNumber = updateCasePhoneNumber(true,'phone-number-field');
 updateCasePhoneTotalPrice(newPhoneNumber, 'phone-total');
 calaculateSubTotal();

})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
const newPhoneNumber =  updateCasePhoneNumber(false,'phone-number-field');
updateCasePhoneTotalPrice(newPhoneNumber,'phone-total');
calaculateSubTotal();
})