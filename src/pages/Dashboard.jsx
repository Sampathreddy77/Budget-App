import React from "react";
import { fetchData } from "../helpers";
import { useLoaderData } from "react-router-dom";

//Components
import AddBudgetForm from "../components/AddbudgetForm";
import Intro from "../components/Intro";

//library

import { toast } from "react-toastify";

//loader

export function dashboardLoader(key) {
  const userName = fetchData("userName");
  const budgets =fetchData("budgets")
  return { userName,budgets };
}

//action

export async function dashboardAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`Welcome ,${formData.userName}`);
  } catch (error) {
    throw new Error(
      toast.error("There is an issue While Creating Your Account!")
    );
  }
}

const Dashboard = () => {
  const { userName ,budgets } = useLoaderData();
  return <>
  {userName ? 
  (
    <div className="dashboard">
      <h1>Welcome back,<span className="accent"> {userName}</span></h1>
      <div className="grid-sm">
        {/* {budgets ? ():()} */}
        <div className="flex-lg">
          <AddBudgetForm/>
        </div>
           
      </div>
    </div>
  
  ) : <Intro />}</>;
};

export default Dashboard;
