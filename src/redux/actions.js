
  export const ADD_TODO = 'ADDTODO';

export const TOGGLE_TODO = 'TOGGLETODO'; 

export const DELETE_TODO = 'DELETETODO';

export const addTodo = (textboxInsertedVal) => {
 console.log('addTodo Action -', textboxInsertedVal);

    return {
      type: ADD_TODO,
      payload: {
        id: Math.random(), 
        todoName: textboxInsertedVal,
        isCompleted: false,
        time: `( ${new Date().toLocaleTimeString()} , ${new Date().toDateString()} )`
      }
    }
};
  

export const toggleTodo = (id) => {
  console.log('toggleTodo', id);
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}

export const deleteTodo = (id) => {
  console.log('deleteTodo---',id);
    return {
        type: DELETE_TODO,
        payload: id
    }
}