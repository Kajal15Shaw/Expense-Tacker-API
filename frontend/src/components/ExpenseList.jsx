import React from 'react';

function ExpenseList({ expenses }) {
  return (
    <div className="space-y-4">
      {expenses.length === 0 ? (
        <p className="text-gray-500">No expenses added yet.</p>
      ) : (
        expenses.map(exp => (
          <div key={exp._id || exp.id} className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{exp.title}</h3>
            <p className="text-sm text-gray-600">Amount: ₹{exp.amount}</p>
            <p className="text-sm text-gray-600">Category: {exp.category}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ExpenseList;
