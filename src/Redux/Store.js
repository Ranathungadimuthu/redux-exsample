import { createStore } from "redux";

const studentDetails = [];
const printReducer = (state = studentDetails, action) => {
  switch (action.type) {
    case "initialize":
      //console.log("initialized:", action.payload);
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

const store = createStore(printReducer);

export default store;
