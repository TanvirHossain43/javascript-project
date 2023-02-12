document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field')
    const withdrawInputString = withdrawField.value
    const withdrawInput = parseFloat(withdrawInputString)
    withdrawField.value = '';
    if(isNaN(withdrawInput)){
        alert('enter valid number')
        return;

    }


    // step-2
    const withdrawPrevious = document.getElementById('withdraw')
    const withdrawString = withdrawPrevious.innerText
    const withdrawPreviousTotal = parseFloat(withdrawString)


    // step-4
    const afterWithDrawBalance = document.getElementById('balance')
    const balaceString = afterWithDrawBalance.innerText
    const previousBalance = parseFloat(balaceString)

   

    if (withdrawInput > previousBalance) {
        alert('You do not have sufficient money')
        return;
    }
    // step-3
    const totalWithDraw = withdrawInput + withdrawPreviousTotal
    withdrawPrevious.innerText = totalWithDraw



    // step:4
    const totalBalance = previousBalance - withdrawInput
    afterWithDrawBalance.innerText = totalBalance





   

})