// input value
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

// balance value 
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

// main balance
function getTextFieldValueById2(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

// card 1 
document.getElementById('donate-btn-noakhali')
.addEventListener('click', function(){
    const money = getInputFieldValueById('add-money');
    if(!isNaN(money)){
       const balance = getTextFieldValueById('main-balance');
       const newBalance = balance + money;
       document.getElementById('main-balance').innerText = newBalance;
       const decreaseMoney = getTextFieldValueById2('balance');
       const decreaseInMoney = decreaseMoney - money
       document.getElementById('balance').innerText = decreaseInMoney;
    }
    else{
        alert('Failed to Donate money');
    }
})

// card 2
document.getElementById('donate-btn-feni')
.addEventListener('click', function(){
    const moneyFromFeni = getInputFieldValueById('from-feni');
   
    if (!isNaN(moneyFromFeni)){
        const balance = getTextFieldValueById ('feni-balance');
        const newBalance = balance + moneyFromFeni;
        document.getElementById('feni-balance').innerText = newBalance;
        const decreaseMoney = getTextFieldValueById2('balance');
        const decreaseInMoney = decreaseMoney - moneyFromFeni
        document.getElementById('balance').innerText = decreaseInMoney;
    }
    else{
        alert('Failed to Donate money');
    }
})