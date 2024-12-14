//LocalStorage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

//
export const deleteItem=({key})=>{
  console.log(key)
return localStorage.clear(key)
}