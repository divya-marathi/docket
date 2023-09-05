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
  };

  return (
    <>
      <div className="container-fluid body ">
       
          <div className="body">
            <marquee className=" row p-3 #00bfa5 teal accent-4
            text-white mb-5 shadow ">
              <h6>Add Your Todays Task </h6>
            </marquee>
            <input
            className="bg-white border text-center "
              type="text"
              placeholder="enter here"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
            />
            <button onClick={() => handleAddTodo()}>Add Todo</button>
            <h6 className="text-success  p-2">Add your ToDo!!</h6>
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
                      textDecoration: todo.isCompleted
                        ? "line-through"
                        : "none",
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
                  <button onClick={() => handleDeleteTodo(todo.id)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <div className="pb-5 pt-5">...</div>
          </div>
     
      </div>
      <footer class=" page-footer font-small#004d40 teal text-white darken-4 d-flex   ">
        <div class="container">
          <div class="row">
            <div class="col-md-6 d-flex justify-content-start">
              <div class="footer-copyright text-center bg-transparent">
                © All Copyright Reserved:
                <a href="https://mdbootstrap.com/education/bootstrap/">
                  {" "}
                  vercel.com
                </a>
              </div>
            </div>
            <div class="col-md-6 d-flex justify-content-end">
              <ul class="list-unstyled d-flex mb-0">
              <a
            class=" btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i class="fab fa-facebook-f fa-fade"></i>
          </a>

          <a
            class="btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i class="fab fa-twitter fa-fade"></i>
          </a>

               

          <a
            class="btn-outline-light btn-floating m-1  "
            href="#!"
            role="button"
          >
            <i class="fab fa-linkedin-in fa-fade"></i>
          </a>

          
               
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default TodoApp;
