import axios from 'axios';

const baseUrl = "https://colorful-pink-trout.cyclic.app";

const getAllToDo = (setToDo) => {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      console.log('data ---> ', data);
      setToDo(data);
    })
    .catch((err) => console.log(err));
};

const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then(({ data }) => {
      console.log(data);
      setText("");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateToDo = (toDoId, text, setToDo) => {
  axios
    .post(`${baseUrl}/update`, { id: toDoId, text })
    .then(() => {
      console.log("Update Successfully");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (toDoId, setToDo) => {
  axios
    .post(`${baseUrl}/delete`, { id: toDoId })
    .then(() => {
      console.log("Deleted Successfully");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
