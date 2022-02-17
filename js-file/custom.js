


function inputValue (inputId){
  const AmountText = document.getElementById (inputId).value
  const Amount = parseFloat(AmountText)
  return Amount
}
// function ()

document.getElementById ('calc-btn').addEventListener('click' ,function (){
 const incomeAmount =  inputValue('income')
 const foodAmount  =  inputValue ('food')
 const rentAmount =  inputValue('rent')
 const clothesAmount =  inputValue('clothes')
//  document.getElementById ('total-expeses').innerText = foodamount + rentamount + clothesamount ;

//  function balance(){
  const expensesText = document.getElementById ('total-expeses');
  const expensesAmount = parseFloat (expensesText) 
  const expensesTotal = foodAmount + rentAmount + clothesAmount; 
  expensesText.innerText = expensesTotal ;
  const balance =  document.getElementById ('balance') ;
  const balanceText = balance.innerText ;
  const balanceTotal = incomeAmount - expensesTotal ;
  balance.innerText = balanceTotal ;
})
// saving part 
document.getElementById ('save-btn').addEventListener('click' , function (){
  const savingInput = inputValue('saveing-input') ;
  console.log (savingInput)
  const incomeAmount = inputValue('income') ;
  console.log (incomeAmount)
  const balanceText  =  document.getElementById ('balance').innerText
  const balanceAmount  = parseFloat(balanceText)
  const savingAmount = incomeAmount*savingInput/100 ;
  document.getElementById ('saving-amount').innerText = savingAmount ;
  const remainingBalance = balanceAmount - savingAmount
  document.getElementById ('Remaining-balance').innerText = remainingBalance
  
})


