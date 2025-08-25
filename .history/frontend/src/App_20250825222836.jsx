import { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [dark, setDark] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({ title: '', amount: '', category: '' });

  const API_URL = process.env.API_URL;
  useEffect(() => {
    fetch('')
      .then(res => res.json())
      .then(data => {
        console.log("Fetched data from backend:", data);
        setExpenses(Array.isArray(data) ? data : []);
    })
    .catch(err => console.error('Fetch error:', err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.amount || !form.category) return;

    const res = await fetch('http://localhost:5000/api/expenses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const newExpense = await res.json();
    setExpenses([newExpense, ...expenses]);
    setForm({ title: '', amount: '', category: '' });
  };

  return (
    <div className={dark ? 'app dark' : 'app'}>
      <div className="container">
        <button onClick={() => setDark(!dark)} className="toggle-btn">
          {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>

        <h1>Expense Tracker</h1>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="title"
            className="styled-input"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="amount"
            className="styled-input"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="category"
            className="styled-input"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-btn">Add Expense</button>
        </form>

        <div className="grid-container">
          {expenses.map((exp) => (
            <div className="card" key={exp._id}>
              <h3>{exp.title || "Untitled"}</h3>
              <p>₹{exp.amount || 0}</p>
              <p>{exp.category || "Uncategorized"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
