// input function part 
function inputValue (inputId){
  const AmountText = document.getElementById (inputId).value
  const Amount = parseFloat(AmountText)
  if (Amount > 0){
  return Amount ;
  }
  else {
    alert(inputId + ' :' +' please give positive value')
  }
}
// calculator part 
document.getElementById ('calc-btn').addEventListener('click' ,function (){
  const incomeAmount =  inputValue('income')
  const foodAmount  =  inputValue ('food')
  const rentAmount =  inputValue('rent')
  const clothesAmount =  inputValue('clothes')
  // total expanses part
  const expensesText = document.getElementById ('total-expenses');
  const expensesTotal = foodAmount + rentAmount + clothesAmount; 
  if (expensesTotal>0){
  expensesText.innerText = expensesTotal ;
  document.getElementById ('expenses-text').style.display = 'block' ;
  document.getElementById ('error').style.display = 'none' ;
  }
  else {
    document.getElementById ('expenses-text').style.display = 'none' ;
    document.getElementById ('error').style.display = 'block' ;
   
  }
  const balance =  document.getElementById ('balance') ;
  // total balance part 
  if ( incomeAmount > expensesTotal) {
  const balanceTotal = incomeAmount - expensesTotal ;
  balance.innerText = balanceTotal ;
  document.getElementById ('balance-text').style.display = 'block' ;
  document.getElementById ('error').style.display = 'none' ;
  }
  else {
    document.getElementById ('expenses-text').style.display = 'none' ;
    document.getElementById ('balance-text').style.display = 'none' ;
    document.getElementById ('error').style.display = 'block' ;
  }
})
// saving part 
document.getElementById ('save-btn').addEventListener('click' , function (){
  const savingInput = inputValue('saveing-input') ;
  const incomeAmount = inputValue('income') ;
  const balanceText  =  document.getElementById ('balance').innerText
  const expansesText  =  document.getElementById ('total-expenses').innerText
  const balanceAmount  = parseFloat(balanceText)
  const savingAmountTotal = incomeAmount*savingInput/100 ;
  document.getElementById ('saving-amount').innerText = savingAmountTotal ;
  if (savingAmountTotal < balanceAmount && expansesText<incomeAmount){
    const remainingBalance = balanceAmount - savingAmountTotal ;
    document.getElementById ('Remaining-balance').innerText = remainingBalance ;
    document.getElementById ('remaining-error').style.display = 'none' ;
    document.getElementById ('remaining-text').style.display = 'block' ;
    document.getElementById ('saving-text').style.display = 'block' ;
  }
  else{
    document.getElementById ('remaining-error').style.display = 'block' ;
    document.getElementById ('remaining-text').style.display = 'none' ;
    document.getElementById ('saving-text').style.display = 'none' ;
  }
  
})


