import { createStore } from "redux";
import rootReducer from "./reducer";

const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
export default store;
