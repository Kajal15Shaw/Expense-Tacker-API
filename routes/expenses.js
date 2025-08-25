const express = require('express');
const router = express.Router();
const {
  getExpenses,
  addExpense,
  deleteExpense
} = require('../controllers/expenseController');

const protect = require('../middleware/authMiddleware');

router.route('/')
  .get(getExpenses)
  .post(addExpense);

//router.get('/', getExpenses); // No auth middleware


router.delete('/:id', deleteExpense);

module.exports = router;
