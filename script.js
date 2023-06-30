const expenseForm = document.getElementById('expenseForm');
const expenseName = document.getElementById('expenseName');
const expenseAmount = document.getElementById('expenseAmount');
const expenseList = document.getElementById('expenseList');



let expenses = [];

function addExpense(name, amount) {
    const expense = {name,amount};
    expenses.push(expense);
}

function renderExpenses() {
    expenseList.innerHTML = '';


    expenses.forEach((expense) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${expense.name} $${expense.amount}`;
        expenseList.appendChild(listItem);
    });  
}

expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const expenseNameInput = document.getElementById('expenseName');
    const expenseAmountInput = document.getElementById('expenseAmount');
    const expenseName = expenseNameInput.value;
    const expenseAmount = parseFloat(expenseAmountInput.value);
   


    if (expenseName.trim() === '' || isNaN(expenseAmount)) {
        alert('Please enter valid values.');
        return;
    }
    
    addExpense(expenseName, expenseAmount);
    renderExpenses();
    
  

    expenseNameInput.value = '';
    expenseAmountInput.value = '';

 });

 function renderExpenses() {
    expenseList.innerHTML = '';

    expenses.forEach((expense, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${expense.name}: N${expense.amount}`;

        const deletebutton = document.createElement('button');
        deletebutton.textContent = 'Delete';
        deletebutton.addEventListener('click', () => {
           deleteExpense(index);
            
        });

        listItem.appendChild(deletebutton);
        expenseList.appendChild(listItem);
    });

    calculateTotal();
 }

 function deleteExpense(index) {
    expenses.splice(index, 1);

    renderExpenses();
 }

function calculateTotal() {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    const totalElement = document.createElement('p');
    totalElement.textContent = `Total:  N${total}`;
    expenseList.appendChild(totalElement);
}


    
    
   
    


