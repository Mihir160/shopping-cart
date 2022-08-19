function updateCasePhoneNumber(isIncrease, elementId){
    const caseNumberfield = document.getElementById(elementId);
    const caseNumberString = caseNumberfield.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if(isIncrease === true){
     newCaseNumber = previousCaseNumber + 1;
    }
    else{
     newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberfield.value = newCaseNumber;
    return newCaseNumber;
}

function updateCasePhoneTotalPrice(newCaseNumber,elementTotalId){
    if(elementTotalId ==='case-total'){
        const caseTotalPrice = newCaseNumber * 59;
        const caseTotalElement = document.getElementById(elementTotalId);
        caseTotalElement.innerText = caseTotalPrice;
    }
    else{
        const caseTotalPrice = newCaseNumber * 1219;
        const caseTotalElement = document.getElementById(elementTotalId);
        caseTotalElement.innerText = caseTotalPrice;  
    }
   
   
}



function gettextElementValueByid(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function calaculateSubTotal(){
     //calculate total
 const currentPhoneTotal = gettextElementValueByid('phone-total');
 const currentCaseTotal = gettextElementValueByid('case-total');
 const currentSubTotal = currentPhoneTotal + currentCaseTotal;
 const subtotalElement = document.getElementById('sub-total');
 subtotalElement.innerHTML = currentSubTotal;

//  calculate tax
const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
const taxAmount = parseFloat(taxAmountString);
setTaxElementValueByid('tax-amount',taxAmount);

const finalAmount = currentSubTotal + taxAmount;
setTaxElementValueByid('final-total', finalAmount);

}

function setTaxElementValueByid(elementId,value){
    const subtotalElement = document.getElementById(elementId);
    subtotalElement.innerText = value;
}