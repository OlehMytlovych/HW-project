let money, time, appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};

function start (){
  money = prompt("What is your budget for this month?", "");
  time = prompt("Enter the date YYYY-MM-DD", "");

  while (isNaN(money) || money == '' || money == null) { //check if money = null or on other words if user clicks "cancel" 
    money = prompt("What is your budget for this month?", "");
  }
}
start();

function chooseExpenses() {
  for ( let i = 0 ; i < 2; i++ ){
    let a = prompt("what is the necessary expense in this month?", ""),
       b = +prompt("How much is it going to be?", "");

    if ( isNaN((parseInt(a))) && (typeof(a) != null) && a != '' 
      && a.length < 50 && (typeof(b) != null) && b != '' && !isNaN(b)) {
      appData.expenses[a] = b;
    } else {
     i--;
    }
  }
}
chooseExpenses();

function chooseOptionalExpenes(){
  for (let i = 1; i < 4; i++){
    let newOptionalExp = prompt("Any optional expenses?", "");
    if (newOptionalExp != '' && newOptionalExp != null){
      appData.optionalExpenses[i] = newOptionalExp;
    }
  }
  

}
chooseOptionalExpenes();

function detectDayBudget(){
  appData.moneyPerDay = (appData.budget/30).toFixed();//.toFixed() - to round number to integer, .toFixed(1) - one charachter after coma. STRING
  alert(`Everyday budget: ${appData.moneyPerDay}`);
}
detectDayBudget()

function detectLevel(){
  if (appData.moneyPerDay < 100) {
    console.log('Low income');
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Average income');
  } else if (appData.moneyPerDay > 2000) {
    console.log('High income');
  } else {
    console.log('An error has occured');
  }
}
detectLevel();

function checkSavings(){
  if (appData.savings == true){
    let save = prompt("What is the sum of your savings", ''),
        interest = prompt("What is the interest", "")

    appData.monthIncome = save/100/12*interest;
    alert(`Month income from your deposit is ${appData.monthIncome}`)
  }
}
checkSavings();

