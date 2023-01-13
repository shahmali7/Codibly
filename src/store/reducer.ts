import { combineReducers } from "redux";

export interface ActionA {
  type: "a";
  payload: string;
}

const INITIAL_STATE = {
  searchItem: null,
};

const reducer = (state = INITIAL_STATE, action: ActionA) => {
  return { ...state, searchItem: action.payload };
};

const rootReducer = combineReducers({
  items: reducer,
});

export default rootReducer;
