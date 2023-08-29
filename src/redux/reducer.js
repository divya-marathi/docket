import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../redux/actions";

const initialState = [];

const todosAppReducer = (state = initialState, action) => {
  console.log("reducer----", action.payload);

  switch (action.type) {
    case ADD_TODO:
      const arrayString = JSON.stringify([...state, action.payload]);
      localStorage.setItem("ToDo", arrayString);
      const localVal = localStorage.getItem("ToDo");
      const todo = JSON.parse(localVal)
      return todo

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? {
              ...todo,
              isCompleted: todo.isCompleted === true ? false : true,
            }
          : todo
      );

    case DELETE_TODO:
        const save = localStorage.getItem("ToDo")
        const display = JSON.parse(save);

       const val = display.filter((todo) =>
        todo.id !== action.payload )  
           
       const arrayStrings = JSON.stringify(val)
       localStorage.setItem('ToDo',arrayStrings)
       return val

    default:
     
      const local = localStorage.getItem("ToDo");
      const todos = JSON.parse(local);
       if(todos==null){
        return state
       }
      return todos
  }
};

export default todosAppReducer;
