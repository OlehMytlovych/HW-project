
const money = prompt("What is your budget for this month?", "");
const time = prompt("Enter the date YYYY-MM-DD", "");
const necessaryExpensesType1 = 
prompt("what is the necessary expense in this month?", "");
const necessaryExpensesSum1 = prompt("How much is it going to be?", "");
const necessaryExpensesType2 = 
prompt("what is the necessary expense in this month?", "");
const necessaryExpensesSum2 = prompt("How much is it going to be?", "");

const appData = {
  budget: money,
  timeData: time,
  expenses: {
    necessaryExpensesType1: necessaryExpensesSum1,
    necessaryExpensesType2: necessaryExpensesSum2,
  },
  optionalExpenses: {

  },
  income: [],
  savings: false
};

alert(appData.budget/30);
