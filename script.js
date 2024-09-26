// Simple user data for login (in real applications, use proper authentication)
const userData = {
    username: "user",
    password: "password123"
};

document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === userData.username && password === userData.password) {
        // Hide login page and show tracker page
        document.getElementById("login-page").style.display = "none";
        document.getElementById("tracker-page").style.display = "block";
        showSection('home-section');
    } else {
        document.getElementById("login-error").textContent = "Invalid username or password!";
    }
});

document.getElementById("logout").addEventListener("click", function() {
    // Show login page again
    document.getElementById("tracker-page").style.display = "none";
    document.getElementById("login-page").style.display = "block";
});

// Handle Menu Clicks
document.getElementById("home-menu").addEventListener("click", function() {
    showSection('home-section');
});

document.getElementById("add-expense-menu").addEventListener("click", function() {
    showSection('add-expense-form');
});

document.getElementById("view-expense-menu").addEventListener("click", function() {
    showSection('expense-list');
});

document.getElementById("settings-menu").addEventListener("click", function() {
    showSection('settings-section');
});

function showSection(sectionId) {
    document.getElementById('home-section').classList.add('hidden');
    document.getElementById('add-expense-form').classList.add('hidden');
    document.getElementById('expense-list').classList.add('hidden');
    document.getElementById('settings-section').classList.add('hidden');
    document.getElementById(sectionId).classList.remove('hidden');
}

// Expense functionality
let expenses = [];

document.getElementById("save-expense").addEventListener("click", function() {
    const name = document.getElementById("expense-name").value;
    const amount = document.getElementById("expense-amount").value;

    if (name && amount) {
        expenses.push({ name, amount: parseFloat(amount) });
        document.getElementById("expense-name").value = '';
        document.getElementById("expense-amount").value = '';
        displayExpenses();
    }
});

function displayExpenses() {
    const expenseList = document.getElementById("expenses");
    expenseList.innerHTML = '';
    let totalExpense = 0;
    
    expenses.forEach(expense => {
        const li = document.createElement("li");
        li.textContent = `${expense.name}: $${expense.amount.toFixed(2)}`;
        expenseList.appendChild(li);
        
        totalExpense += expense.amount;
    });

    document.getElementById("total-expense").textContent = totalExpense.toFixed(2);
}
