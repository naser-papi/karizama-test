import { configureStore, combineReducers } from "@reduxjs/toolkit";
import generalReducer, { toggleMode, toggleSelected, setProducts, setUsers } from "./generalSlice";

const reducers = combineReducers({ general: generalReducer });

const store = configureStore({
  reducer: reducers
});

export default store;

export { toggleMode, toggleSelected, setUsers, setProducts };
