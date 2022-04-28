//const storage = {};
export const setItem = (key, tasksList) => {
  localStorage.setItem(key, JSON.stringify(tasksList));
  //Object.assign(storage, { [key]: value });
};
export const getItem = (key) => JSON.parse(localStorage.getItem(key));
