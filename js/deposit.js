document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField =document.getElementById('deposit-field')
    const newDepositAmountString =depositField.value
    const newDepositAmount =parseFloat(newDepositAmountString)
    depositField.value='';

    if(isNaN(newDepositAmount)){
        alert('enter valid number')
        return;
    }

    
    const depositTotalElement = document.getElementById('deposit-total')

    const previousDepositTotalString =depositTotalElement.innerText
    const previousDepositTotal =parseFloat(previousDepositTotalString)
    const currrentDeposit =previousDepositTotal + newDepositAmount 

    depositTotalElement.innerText= currrentDeposit;

    const balance =document.getElementById('balance')
    const balaceString =balance.innerText
    const balanceAmount =parseFloat(balaceString)

    const totalBalance = balanceAmount + newDepositAmount
    balance.innerText =totalBalance




    

})