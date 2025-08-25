import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/expenses', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });
      setExpenses(res.data);
    } catch (err) {
      console.error('Failed to fetch expenses:', err);
    }
  };

  const addExpense = async (expense) => {
    try {
      const res = await axios.post('http://localhost:5000/api/expenses', expense, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });
      setExpenses([res.data, ...expenses]);
    } catch (err) {
      alert('Failed to add expense');
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Expense Dashboard</h1>
      <ExpenseForm onAdd={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default Dashboard;
