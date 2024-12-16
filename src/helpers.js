export const delaySubmit=()=>new Promise(
  res=>setTimeout(res,Math.random()*2000)
)


// colors
const generateRandomColor=()=>{
  const existingBudgetsLength=fetchData("budgets")?.length ?? 0
  return `${existingBudgetsLength * 34} 65% 50%`
}


//LocalStorage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

//create a budget
export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: Math.random(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color:generateRandomColor()
  };
  const existingBudgets = fetchData("budgets") ?? [];
  return (
  
  localStorage.setItem("budgets", JSON.stringify([...existingBudgets, newItem]))
)
};

//to del Item
export const deleteItem = ({ key }) => {
  return localStorage.clear(key);
};
