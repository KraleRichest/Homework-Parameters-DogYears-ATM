
function atmWithdraw(withdrawAmount) {
    if (!isNaN(withdrawAmount) && withdrawAmount > 0 && withdrawAmount <= 50000) {
        let leftOverAmount = 50000 - withdrawAmount;
        return leftOverAmount;
    }
}

let withdrawAmount = parseInt(prompt("You have $50000 on youre account, how much you will like to withdraw?"));

function atmWithdrawLimit(withdrawAmount) {
    if (!isNaN(withdrawAmount) && withdrawAmount > 20000){
        alert("You cannot withdraw more than $20000");
    }
}

function printMessage(withdrawAmount) {
    if (!isNaN(withdrawAmount) && withdrawAmount > 20000){
        alert("You cannot withdraw more than $20000");
    }else if (!isNaN(withdrawAmount) && withdrawAmount > 0 && withdrawAmount <= 20000){
        alert(` Money left over on youre account: ${atmWithdraw(withdrawAmount)}`);
    } else {
        alert("Enter valid sum");
    }

}

printMessage(withdrawAmount);




