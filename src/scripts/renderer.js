/*
const listElem = document.querySelector('.list');


const tasks = [
  { text: 'Buy milk', done: false, id: '1' },
  { text: 'Pick up Tom from airport', done: false, id: '2' },
  { text: 'Visit party', done: false, id: '3' },
  { text: 'Visit doctor', done: true, id: '4' },
  { text: 'Buy meat', done: true, id: '5' },
];

const renderTasks = (tasksList) => {
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .slice()
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li'
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};
renderTasks(tasks);*/
const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('data-id', id);
  checkbox.checked = done;
  checkbox.classList.add('list__item-checkbox');
  return checkboxElem;
};
const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  const checkboxElem = createCheckbox({ done, id });
  if (done) {
    listItemElem.classList.add('list__item_done');
  }
  listItemElem.append(checkbox, text);
  return listItemElem;
};
export const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];
  listElem.innerHTML = '';
  const tasksElems = tasksList.sort(compareTasks).map(createListItem);
  listElem.append(...tasksElems);
};
