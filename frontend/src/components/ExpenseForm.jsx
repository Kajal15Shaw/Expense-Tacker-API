import React, { useState } from 'react';

function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !category) return;
    onAdd({ title, amount, category });
    setTitle('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Add New Expense</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
