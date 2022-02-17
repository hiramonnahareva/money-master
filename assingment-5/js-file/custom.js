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
// cheak 
// function style (styleId){
//   document.getElementById (styleId).style.display
// }
// calculator part 
document.getElementById ('calc-btn').addEventListener('click' ,function (){
  const incomeAmount =  inputValue('income')
  const foodAmount  =  inputValue ('food')
  const rentAmount =  inputValue('rent')
  const clothesAmount =  inputValue('clothes')
  // total expanses part
  const expensesText = document.getElementById ('total-expeses');
  const expensesTotal = foodAmount + rentAmount + clothesAmount; 
  if (expensesTotal>0){
  expensesText.innerText = expensesTotal ;
  document.getElementById ('expenses-text').style.display = 'block' ;
  document.getElementById ('expanses-error').style.display = 'none' ;
  }
  else {
    document.getElementById ('expenses-text').style.display = 'none' ;
    document.getElementById ('expanses-error').style.display = 'block' ;
   
  }
  const balance =  document.getElementById ('balance') ;
  // total balance part 
  if (incomeAmount > expensesTotal) {
  const balanceTotal = incomeAmount - expensesTotal ;
  balance.innerText = balanceTotal ;
  document.getElementById ('balance-text').style.display = 'block' ;
  document.getElementById ('balance-error').style.display = 'none' ;
  }
  else {
    document.getElementById ('expenses-text').style.display = 'none' ;
    document.getElementById ('balance-text').style.display = 'none' ;
    document.getElementById ('balance-error').style.display = 'block' ;
  }
})
// saving part 
document.getElementById ('save-btn').addEventListener('click' , function (){
  const savingInput = inputValue('saveing-input') ;
  const incomeAmount = inputValue('income') ;
  const balanceText  =  document.getElementById ('balance').innerText
  const balanceAmount  = parseFloat(balanceText)
  const savingAmountTotal = incomeAmount*savingInput/100 ;
  document.getElementById ('saving-amount').innerText = savingAmountTotal ;
  // const savingAmount = savingAmountTotal ;
  if (savingAmountTotal < balanceAmount){
    const remainingBalance = balanceAmount - savingAmountTotal ;
    document.getElementById ('Remaining-balance').innerText = remainingBalance ;
    document.getElementById ('remaining-error').style.display = 'none' ;
    document.getElementById ('remaining-text').style.display = 'block' ;
    document.getElementById ('saving-text').style.display = 'block' ;
  }
  // const remainingBalance = balanceAmount - savingAmount ;
  // if (remainingBalance > 0){
  // document.getElementById ('Remaining-balance').innerText = remainingBalance ;
  // }
  else{
    document.getElementById ('remaining-error').style.display = 'block' ;
    document.getElementById ('remaining-text').style.display = 'none' ;
    document.getElementById ('saving-text').style.display = 'none' ;
    // console
  }
  
})


