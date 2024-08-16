// Sample array of expense objects
const expenses = [
    { id: 1, amount: 50, category: 'Groceries' },
    { id: 2, amount: 20, category: 'Transport' },
    { id: 3, amount: 100, category: 'Groceries' },
    { id: 4, amount: 150, category: 'Entertainment' },
    { id: 5, amount: 30, category: 'Groceries' }
  ];
  
  // Function to categorize expense based on amount
  function categorizeExpense(amount) {
    return amount > 100 ? 'High Expense' : 'Low Expense';
  }
  
  // Using the map method to generate the categorizedExpenses array
  const categorizedExpenses = expenses.map(expense => categorizeExpense(expense.amount));
  
  console.log(categorizedExpenses);
  