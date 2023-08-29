import {createStore} from 'redux';
import todosAppReducer from '../src/redux/reducer';

const reduxStore = createStore(todosAppReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default reduxStore;

