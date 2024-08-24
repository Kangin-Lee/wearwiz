import { createStore } from "redux";
import reducer from "./reducer/reudcer";

let store = createStore(reducer);

export default store;
