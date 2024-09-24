// input value
function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

// balance value 
function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

// main balance
function getTextFieldValueById2(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

// card 1 
document.getElementById('donate-btn-noakhali')
    .addEventListener('click', function () {
        const moneyFormNoakhali = getInputFieldValueById('add-money');
        if (!isNaN(moneyFormNoakhali) && moneyFormNoakhali > 0) {
            const balance = getTextFieldValueById('main-balance');
            const newBalance = balance + moneyFormNoakhali;
            document.getElementById('main-balance').innerText = newBalance.toFixed(0);
            const decreaseMoney = getTextFieldValueById2('balance');
            const decreaseInMoney = decreaseMoney - moneyFormNoakhali
            document.getElementById('balance').innerText = decreaseInMoney.toFixed(0);
            // history part
            const historyItem = document.createElement("div");
            historyItem.innerHTML = `
                <p class="text-xl lg:text-3xl font-bold mb-1 "> ${moneyFormNoakhali} Taka is donated for Flood at Noakhali, Bangladesh </p>
                <p class= " text-gray-600 border-b-2 border-gray-200"> ${new Date()} </p>
            `
            const historyContainer = document.getElementById('history-content');
            historyContainer.insertBefore(historyItem, historyContainer.firstChild);
        }
        else {
            alert('Failed to Donate money');
            document.getElementById('my_modal_5').close();
        }
    })

// card 2
document.getElementById('donate-btn-feni')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const moneyFromFeni = getInputFieldValueById('from-feni');

        if (!isNaN(moneyFromFeni) && moneyFromFeni > 0) {
            const balance = getTextFieldValueById('feni-balance');
            const newBalance = balance + moneyFromFeni;
            document.getElementById('feni-balance').innerText = newBalance.toFixed(0);
            const decreaseMoney = getTextFieldValueById2('balance');
            const decreaseInMoney = decreaseMoney - moneyFromFeni
            document.getElementById('balance').innerText = decreaseInMoney.toFixed(0);
            // history part
            const historyItem = document.createElement("div");
            historyItem.innerHTML = `
                <p class="text-xl lg:text-3xl font-bold mb-1"> ${moneyFromFeni} Taka is donated Flood Relief in Feni,Bangladesh</p>
                <p class= " text-gray-600
                border-b-2 border-gray-200"> ${new Date()} </p>
            `
            const historyContainer = document.getElementById('history-content');
            historyContainer.insertBefore(historyItem, historyContainer.firstChild);
        }
        else {
            alert('Failed to Donate money');
            document.getElementById('my_modal_1').close();

        }
    })

// card 3

document.getElementById('injured-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const injuredMoney = getInputFieldValueById('injured-balance');

        if (!isNaN(injuredMoney) && injuredMoney > 0 ) {
            const balance = getTextFieldValueById('injured-add-money');
            const newBalance = balance + injuredMoney;
            document.getElementById('injured-add-money').innerText = newBalance.toFixed(0);
            const decreaseMoney = getTextFieldValueById2('balance');
            const decreaseInMoney = decreaseMoney - injuredMoney
            document.getElementById('balance').innerText = decreaseInMoney.toFixed(0);
            // history part
            const historyItem = document.createElement("div");
            historyItem.innerHTML = `
                <p class="text-xl lg:text-3xl font-bold"> ${injuredMoney} Taka is donated for Injured in the Quota Movement </p>
                <p class= " text-gray-600 border-b-2 border-gray-200"> ${new Date()} </p>
            `
            const historyContainer = document.getElementById('history-content');
            historyContainer.insertBefore(historyItem, historyContainer.firstChild);
        }
        else {
            alert('Failed to Donate money');
            document.getElementById('my_modal_3').close();
        }

    })




