
const money = prompt("What is your budget for this month?", "");
const time = prompt("Enter the date YYYY-MM-DD", "");

const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

for ( let i = 0 ; i < 2; i++ ){
  let a = prompt("what is the necessary expense in this month?", "");
  let b = +prompt("How much is it going to be?", "");

  if ( isNaN((parseInt(a))) && (typeof(a) != null) && a != '' 
    && a.length < 50 && (typeof(b) != null) && b != '' && !isNaN(b)) {
    appData.expenses[a] = b;
  } else {
    i--;
  }
}

appData.moneyPerDay = appData.budget/30;
alert(`Everyday budget: ${appData.moneyPerDay}`);

if (appData.moneyPerDay < 100) {
  console.log('Low income');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log('Average income');
} else if (appData.moneyPerDay > 2000) {
  console.log('High income');
} else {
  console.log('An error has occured');
}

