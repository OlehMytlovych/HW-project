
const money = prompt("What is your budget for this month?", "");
const time = prompt("Enter the date YYYY-MM-DD", "");
const necessaryExpensesType = 
prompt("what is the necessary expense in this month?", "");
const necessaryExpensesSum = prompt("How much is it going to be?", "");

const appData = {
  budget: money,
  timeData: time,
  expenses: {
    necessaryExpensesType: necessaryExpensesSum
  },
  optionalExpenses: {

  },
  income: [],
  savings: false
};

alert(money/30);