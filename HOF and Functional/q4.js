// Sample array of expense objects
const expenses = [
    { id: 1, amount: 50, category: 'Groceries' },
    { id: 2, amount: 20, category: 'Transport' },
    { id: 3, amount: 100, category: 'Groceries' },
    { id: 4, amount: 150, category: 'Entertainment' },
    { id: 5, amount: 30, category: 'Groceries' }
  ];
  
  // Using the filter method to get only 'Groceries' expenses
  const groceriesExpenses = expenses.filter(expense => expense.category === 'Groceries');
  
  console.log(groceriesExpenses);
  