import { createStore } from 'redux';
import cartReducer from './reducer';

const store = createStore(cartReducer);

export default store;