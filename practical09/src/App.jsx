import React, { useState } from 'react'
import './App.css'

function App() {
  const [expense, setExpense] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categoty, setCategory] = useState("");

  function addExpense(e) {
    e.preventDefault();

    if (!name || !price || !categoty || Number(price) < 0) {
      alert("fill all the fields")
      return;
    }

    const NewExpense = {
      id: Date.now(),
      name: name,
      price: Number(price),
      category: categoty,
    }

    setExpense([...expense, NewExpense]);
    setName("");
    setPrice("");
    setCategory("");

  }

  function deleteExpense(id) {
    setExpense(expense.filter(s => s.id !== id));
  }

  const total = expense.reduce((sum, e) => sum + e.price, 0);

  return (
    <div className='App'>
      <h1>Total Expenses: ${total}</h1>


      <h1>Expense Tracker</h1>

      <h2>Add Expense</h2>
      <form onSubmit={addExpense}>

        <input type="text" placeholder='Expense Name' value={name} onChange={(e) => setName(e.target.value)}
        />
        <input type="number" placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)}
        />
        <select value={categoty} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Bills">Bills</option>
          <option value="Shopping">Shopping</option>
          <option value="Other">Other</option>
        </select>
        <button type="Submit">Submit</button>
      </form>

      <h2>Expense List</h2>
      <div className="expense-container">
        {expense.map((e) => (
          <div className="expense-list" key={e.id}>
            <p>Name: {e.name}</p>
            <p>Price: ${e.price}</p>
            <p>Category: {e.category}</p>
            <button onClick={() => deleteExpense(e.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;