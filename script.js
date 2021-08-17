const bill = document.querySelector('#bill');
const billError = document.querySelector('.bill');
const people = document.querySelector('#people');
const peopleError = document.querySelector('.people');
const tabTips = document.querySelectorAll('input[name="percentTip"]');
const customTip = document.querySelector('#custom');
const twitter = document.querySelector('#twitter');
const tipPerPerson = document.querySelector('#tip-per-person')
const amountPerPerson = document.querySelector('#amount-per-person')
const reset = document.querySelector('.reset')

function isNotBlank(value){
    if(value==="")
        return false;
    return true
}
function isNotZero(value){
    if(value==="0")
        return false;
    return true
}
function valueForAll()
{
    let isTabTip = false;
    let tabTipValue = null
    let tip = null
    let tipAmountPerPersonCalc = null
    let amountPerPersonCalc = null
    tabTips.forEach(tabTip=>{
        if(tabTip.checked){
            
            isTabTip = true
            tabTipValue = tabTip.value
        }
    })
    
    if(isNotZero(bill.value)){

        billError.classList.remove("error");
        bill.classList.remove("form-error");
    }
    else{
        billError.classList.add("error");
        bill.classList.add("form-error");
    }
    if(isNotZero(people.value)){

        peopleError.classList.remove("error");
        people.classList.remove("form-error");
    }
    else{
        people.classList.add("form-error");
        peopleError.classList.add("error");
    }
    if(isTabTip){
        tip = tabTipValue
        if(isNotBlank(bill.value) && isNotBlank(people.value) ){
            tipAmountPerPersonCalc = ((bill.value * tip)/100)/(people.value);
            tipPerPerson.textContent = parseFloat(tipAmountPerPersonCalc).toFixed(2);
            
            amountPerPersonCalc = (bill.value/people.value) + tipAmountPerPersonCalc;
            
            amountPerPerson.textContent = parseFloat(amountPerPersonCalc).toFixed(2);
        }
    }
    else{
        tip = customTip.value
        if(isNotBlank(bill.value) && isNotBlank(people.value) && isNotBlank(customTip.value) ){
            tipAmountPerPersonCalc = ((bill.value * tip)/100)/(people.value);
            tipPerPerson.textContent = parseFloat(tipAmountPerPersonCalc).toFixed(2);
            
            amountPerPersonCalc = (bill.value/people.value) +tipAmountPerPersonCalc;
            
            amountPerPerson.textContent = parseFloat(amountPerPersonCalc).toFixed(2);
        }      
    }
}

bill.addEventListener('input',e=>{
    
    valueForAll();
})
people.addEventListener('input',e=>{
    
    valueForAll();
})
tabTips.forEach(tabTip=>{

tabTip.addEventListener('focus',e=>{
    
    customTip.value = null
 
})
})

tabTips.forEach(tabTip=>{

    tabTip.addEventListener('change',e=>{
        
        customTip.value = null
        valueForAll();
    })
    })

customTip.addEventListener('focus',e=>{
    
    tabTips.forEach(tabTip=>{
        tabTip.checked = false;
    })
    
})
customTip.addEventListener('input',e=>{
    
    valueForAll();
})
reset.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector('.tip-calculator__card').reset();
    tipPerPerson.textContent = "0.00"
    amountPerPerson.textContent = "0.00"
})

