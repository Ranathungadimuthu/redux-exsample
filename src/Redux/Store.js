import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

const initialState = { studentDetails: [] };

const printReducer = (state = initialState, action) => {
  switch (action.type) {
    case "initialize":
      return { ...state, studentDetails: action.payload };

    case "add":
      return {
        ...state,
        studentDetails: [...state.studentDetails, action.payload],
      };

    default:
      return state;
  }
};

const store = createStore(printReducer, devToolsEnhancer());

export default store;
