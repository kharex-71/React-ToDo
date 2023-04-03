import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm.jsx";
import UpdateForm from "./components/UpdateForm.jsx";
import ToDo from "./components/ToDo.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  // ამოცანების მდგომარეობა
  const [toDo, setToDo] = useState([]);
  // დროებითი დავალება
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");
  // დაამატე დავალება
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  // წაშალე დავალება
  const deleteTask = (id) => {
    let newTask = toDo.filter((task) => task.id !== id);
    setToDo(newTask);
  };

  //მონიშნეთ დავალება შესრულებულად ან დასრულებულად
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  // გააუქმების განახლება
  const cancelUpdate = () => {
    setUpdateData("");
  };

  // შეცვალეთ დავალება განახლებისთვის
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  // დავალების განახლება
  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updateObject = [...filterRecords, updateData];
    setToDo(updateObject);
    setUpdateData("");
  };

  return (
    <div className="Conteiner App">
      <br />
      <br />
      <h2>To Do List</h2>
      <br />
      <br />
      {/*Update Task*/}
      {updateData && updateData ? (
        <>
          <UpdateForm
            updateData={updateData}
            changeTask={changeTask}
            updateTask={updateTask}
            cancelUpdate={cancelUpdate}
          />
        </>
      ) : (
        <>
          <AddTaskForm
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
          />
        </>
      )}

      {/*Display ToDos*/}

      {toDo && toDo.length ? "" : "No Tasks..."}

      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
