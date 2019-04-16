let beginCalcButton = document.querySelector('#start'),
    
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    incomeValue = document.querySelector('.income-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),

    expensesInputs = document.querySelectorAll('.expenses-item'),
    submitExpenses = document.querySelector('.expenses-item-btn'),

    optionalExpensesInputs = document.querySelectorAll('.optionalexpenses-item'),
    submitOptionalExpenses = document.querySelector('.optionalexpenses-btn'),

    countDayButton = document.querySelector('.count-budget-btn'),

    chooseIncomeInput = document.querySelector('#income'),
    savingsCheckbox = document.querySelector('#savings'),
    savingsSum = document.querySelector('#sum'),
    savingsInterest = document.querySelector('#percent'),

    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    submitExpenses.setAttribute('disabled', 'disabled');
    submitOptionalExpenses.setAttribute('disabled', 'disabled');
    countDayButton.setAttribute('disabled', 'disabled');//all the buttons are disabled unless "Start calculation" is pressed;

    let money, time;
    let appData = {
      budget: money,
      timeData: time,
      expenses: {},
      optionalExpenses: {},
      income: [],
      savings: false,
      
    };
        
  
    beginCalcButton.addEventListener('click', function(){
        time = prompt("Enter the date YYYY-MM-DD", "");
        money = +prompt("What is your budget for this month?", "");
      
    
      while (isNaN(money) || money == '' || money == null) { //check if money = null or on other words if user clicks "cancel" 
        money = +prompt("What is your budget for this month?", "");
      }
      appData.budget = money;
      appData.timeData = time;
      budgetValue.textContent = money.toFixed();
      yearValue.value = new Date(Date.parse(time)).getFullYear();
      monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
      dayValue.value = new Date (Date.parse(time)).getDate();

      submitExpenses.removeAttribute('disabled');
      submitOptionalExpenses.removeAttribute('disabled');
      countDayButton.removeAttribute('disabled');
    });

    submitExpenses.addEventListener('click', function(){
        let sum = 0;
        for ( let i = 0 ; i < expensesInputs.length; i++ ){
          let a = expensesInputs[i].value,
              b = expensesInputs[++i].value;
    
          if ( isNaN((parseInt(a))) && (typeof(a) != null) && a != '' 
           && a.length < 50 && (typeof(b) != null) && b != '' && !isNaN(b)) {
           appData.expenses[a] = b;
           sum += +b;
          } else {
          i--;
          }
          expensesValue.textContent = sum;
        }
    });

    submitOptionalExpenses.addEventListener('click', function () {
        for (let i = 0; i < optionalExpensesInputs.length; i++){
            let newOptionalExp = optionalExpensesInputs[i].value;
            appData.optionalExpenses[i] = newOptionalExp;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' '; 
          }
    });

    countDayButton.addEventListener('click', function() {

        if(appData.budget != undefined){
            appData.moneyPerDay = (appData.budget/30).toFixed();//.toFixed() - to round number to integer, .toFixed(1) - one charachter after coma. STRING
            dayBudgetValue.textContent = appData.moneyPerDay;

            if (appData.moneyPerDay < 100) {
             levelValue.textContent = 'Low income';
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Average income';
            } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'High income';
            } else {
            levelValue.textContent = 'An error has occured';
            }
        } else {
            budgetValue.textContent = "An error has occured";
        }

    });

    chooseIncomeInput.addEventListener('input', function () {
        let items = chooseIncomeInput.value;
        appData.income = items.split(",");
        incomeValue.textContent = appData.income;
    });

    savingsCheckbox.addEventListener('click', function (){
        if (appData.savings == true){
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    });

    savingsSum.addEventListener('input', function () {
        if (appData.savings == true){
            let sum = +savingsSum.value,
                interest = +savingsInterest.value;

            appData.monthIncome = sum/100/12*interest;
            appData.yearIncome = sum/100*interest;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });

    savingsInterest.addEventListener('input', function () {
        if (appData.savings == true){
            let sum = +savingsSum.value,
                interest = +savingsInterest.value;

            appData.monthIncome = sum/100/12*interest;
            appData.yearIncome = sum/100*interest;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });
  /*  console.log("Our app has this data:");
    for (let item in appData){
      console.log(item +": " + appData[item]);
    }*/