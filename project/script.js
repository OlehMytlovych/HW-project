let money, time;
let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function(){
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
  },
  chooseOptionalExpenes: function(){
    for (let i = 1; i < 4; i++){
        let newOptionalExp = prompt("Any optional expenses?", "");
        if (newOptionalExp != '' && newOptionalExp != null){
          appData.optionalExpenses[i] = newOptionalExp;
        }
      }
  },
  detectDayBudget: function(){
    appData.moneyPerDay = (appData.budget/30).toFixed();//.toFixed() - to round number to integer, .toFixed(1) - one charachter after coma. STRING
    alert(`Everyday budget: ${appData.moneyPerDay}`);
  },
  detectLevel: function(){
    if (appData.moneyPerDay < 100) {
      console.log('Low income');
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log('Average income');
      } else if (appData.moneyPerDay > 2000) {
      console.log('High income');
      } else {
      console.log('An error has occured');
      }
  },
  checkSavings: function(){
    if (appData.savings == true){
      let save = prompt("What is the sum of your savings", ''),
          interest = prompt("What is the interest", "")

      appData.monthIncome = save/100/12*interest;
      alert(`Month income from your deposit is ${appData.monthIncome}`)
    }
  },
  chooseIncome: function(){
    let items = prompt("What is your additional income(use a coma after each)", "");

    for (let i = 0; i < 1; i++) { 
      if (!isNaN(+items) || items =="" || items == null ){
        items = prompt("What is your additional income(use a coma after each)", "");
        --i;
      } else{
        appData.income = items.split(", ");
        appData.income.push(prompt("Any other income?", ""));
        appData.income.sort();
      }
    }
    appData.income.forEach (function (item, i) {
      alert("Способы доп. заработка: " + (i+1) + " - " + item);
    });
  }

};

function start (){
  money = +prompt("What is your budget for this month?", "");
  time = prompt("Enter the date YYYY-MM-DD", "");

  while (isNaN(money) || money == '' || money == null) { //check if money = null or on other words if user clicks "cancel" 
    money = +prompt("What is your budget for this month?", "");
  }
  appData.budget = money;
}
start();


console.log("Our app has this data:");
for (let item in appData){
  console.log(item +": " + appData[item]);
}