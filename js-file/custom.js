


function inputValue (inputId){
  const AmountText = document.getElementById (inputId).value
  const Amount = parseFloat(AmountText)
  return Amount
}

document.getElementById ('calc-btn').addEventListener('click' ,function (){
 const incomeamount =  inputValue('income')
 const foodamount  =  inputValue ('food')
 const rentamount =  inputValue('rent')
 const clothesamount =  inputValue('clothes')
//  document.getElementById ('total-expeses').innerText = foodamount + rentamount + clothesamount ;


  const expensesText = document.getElementById ('total-expeses');
  const expensesAmount = parseFloat (expensesText)
  const expensesTotal = foodamount + rentamount + clothesamount;
  expensesText.innerText = expensesTotal ;
  
//   document.getElementById ('balance').innerText = parseFloat(expensesTotal.innerText) - expensesAmount ;

//   expense.innerText = rentValue +foodValue + clothesValue
//   const totalExpenses = expanses
//   const Expanses = rentValue +foodValue + clothesValue ;

})
