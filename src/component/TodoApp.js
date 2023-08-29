import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// Action Creators
import { addTodo, toggleTodo, deleteTodo } from "../redux/actions";
import "./todo.css";

const TodoApp = () => {
  const todos = useSelector((state) => state);

  const dispatch = useDispatch();

  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      dispatch(addTodo(newTodoText));
      setNewTodoText("");
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  }

  return (
    <>
    <div className="container-fluid body">
    <div className=" ">
      <div className="body" >
        <marquee className=" row p-3 bg-dark text-white mb-5 shadow">
          <h6 >Add Your Todays Task </h6>
        </marquee>
        <input
          type="text"
         
          placeholder="enter here"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button onClick={() => handleAddTodo()}>Add Todo</button>
        <h6 className="text-success">Add your ToDo!!</h6>
        <ul className="">
          {todos.map((todo) => (
            <li
              className="shadow m-3"
              key={todo.id}
              onClick={() => handleToggleTodo(todo.id)}
            >
              <input type="checkbox" checked={todo.isCompleted} />
              <span
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                  minWidth: "45%",
                }}
              >
                {todo.todoName}
              </span>
              <b style={{ padding: "10px" }}>Added on - {todo.time}</b>
              {
                // todo.isCompleted == true ? (<span style={{ float: 'right', color: '#1c8604' }}>Marked as Completed ! </span>) : <></>
                todo.isCompleted && (
                  <span style={{ float: "right", color: "#1c8604" }}>
                    Marked as Completed !{" "}
                  </span>
                  
                )
              }
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <div>...</div>
      </div>
    </div>
    </div>
    </>
  )
};

export default TodoApp;
