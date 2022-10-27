function incomeAmount() {
    const incomeInput = document.getElementById('income-amount').value;
    const incomeTotal = parseInt(incomeInput);
    return incomeTotal;
}
// food itemz 
function foodAmount() {
    const foodInput = document.getElementById('food-amount').value;
    const foodTotal = parseInt(foodInput);
    return foodTotal;
}
// rent items 
function rentAmount() {
    const rentInput = document.getElementById('rent-amount').value;
    const rentTotal = parseInt(rentInput);
    return rentTotal;
}
// cloth items 
function clothAmount() {
    const clothInput = document.getElementById('cloth-amount').value;
    const clothTotal = parseInt(clothInput);
    return clothTotal;
}
const calculateBalance = document.getElementById('calculate-button').addEventListener('click', function() {
    const income = incomeAmount();
    // console.log(income);

    const foodTotalAmount = foodAmount();
    // console.log(foodTotalAmount);

    const rentTotalAmount = rentAmount();
    // console.log(rentTotalAmount);

    const clothTotalAmount = clothAmount();
    // console.log(clothTotalAmount);

    // sub total calculation 
    const subTotalAmount = foodTotalAmount + rentTotalAmount + clothTotalAmount;
    // console.log(subTotalAmount);
    if (income > subTotalAmount) {
        const totalBalance = income - subTotalAmount;
        const totalBalanceIs = document.getElementById('total-balance').innerText = totalBalance;
        document.getElementById("save-button").disabled = false;

    } else {
        const totalBalanceIs = document.getElementById('total-balance').innerText = 'Your balance is low';
        document.getElementById("save-button").disabled = true;
        alert('your balance low');
    }
    // console.log(totalBalance);
    const subValue = document.getElementById('total-expence').innerText = subTotalAmount;
});
const saveButton = document.getElementById('save-button').addEventListener('click', function() {
    const incomeTotal = incomeAmount();

    const savingInput = document.getElementById('saving-field').value;
    const savingPercent = parseInt(savingInput);

    const totalSavings = incomeTotal / savingPercent;

    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = totalSavings;

    // remaining balance is 
    const totalBalanceIs = document.getElementById('total-balance').innerText;
    const balanceTotal = parseInt(totalBalanceIs);

    // main balance is 
    const mainBalaceAmount = balanceTotal - totalSavings;
    const reamainingBalance = document.getElementById('remaining-balance').innerText = mainBalaceAmount;
});