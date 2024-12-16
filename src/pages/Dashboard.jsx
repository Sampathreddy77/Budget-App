import React from "react";
import { createBudget, delaySubmit, fetchData } from "../helpers";
import { useLoaderData } from "react-router-dom";

//Components
import AddBudgetForm from "../components/AddbudgetForm";
import Intro from "../components/Intro";

//library

import { toast } from "react-toastify";
import AddExpenseForm from "../components/AddExpenseForm";

//loader

export function dashboardLoader(key) {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
}

//action

export async function dashboardAction({ request }) {
  await delaySubmit();
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
  console.log(_action);

  // new User submission
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome ,${values.userName}`);
    } catch (error) {
      throw new Error(
        toast.error("There is an issue While Creating Your Account!")
      );
    }
  }
  if (_action === "CreateBudget") {
    try {
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.success("Budget created!");
    } catch (e) {
      throw new Error("Oops!,There's was problem while creating your budget. ");
    }
  }
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();
  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back,<span className="accent"> {userName}</span>
          </h1>
          <div className="grid-sm">
            {budgets && budgets.length > 0 ? (
              <div className="grid-lg">
                <div className="flex-lg">
                <AddBudgetForm />
                  <AddExpenseForm  budgets={budgets}/>
                </div>
              </div>
            ) : (
              <div className="grid-sm">
                <p>Personal budgeting is the secret to financial freedom.</p>
                <p>Create a budget to get started!</p>
                <AddBudgetForm />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Dashboard;
