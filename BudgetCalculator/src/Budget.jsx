import "./budget.css";
import React from "react";
import BudgetTotal from "./Components/BudgetShow";
import Remaining from "./Components/RemainingBudget";
import ExpenseTotal from "./Components/ExpenseTotal";
import ExpenseList from "./Components/ExpenseList";
import AddExpenseForm from "./Components/AddExpenseForm";
import { BudgetProvider } from "./Components/contexts/budgetContext";

function Budget() {
  return (
    <BudgetProvider>
      <div className="container budgetArea m-4">
        <h1 className="mt-3 budget-heading">My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <BudgetTotal />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="mt-3 budget-sub-head">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3 budget-sub-head">Add Expense</h3>
        <div className="mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </BudgetProvider>
  );
}

export default Budget;
