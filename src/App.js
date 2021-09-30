import "./App.css";
import StudentRegister from "./Components/Comps/Forms/StudentRegister";
import "./Css/Theme.css";
import StudentsTable from "./Components/Comps/Tables/StudentsTable";
import { Link, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import moment from "moment";
import { studentDetaislGet } from "./API/api";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const studentGrade = (marks) => {
    if (marks < 35) {
      return "F";
    } else if (marks >= 35 && marks < 55) {
      return "S";
    } else if (marks >= 55 && marks < 65) {
      return "C";
    } else if (marks >= 65 && marks < 75) {
      return "B";
    } else if (marks >= 75) {
      return "A";
    } else {
      return "N/A";
    }
  };

  useEffect(() => {
    const studentDetailsArray = [];

    studentDetaislGet()
      .then((response) => {
        const tempArr = response.data;
        const now = moment();
        for (let i = 0; i < tempArr.length; i++) {
          const dob = moment(tempArr[i].dob, "dd-mm-yyyy");
          const studentAge = now.diff(dob, "years");
          const subOne = studentGrade(tempArr[i].subject_line_1);
          const subTwo = studentGrade(tempArr[i].subject_line_2);
          const subThree = studentGrade(tempArr[i].subject_line_3);
          studentDetailsArray.push({
            ...tempArr[i],
            age: studentAge,
            subject_1_grade: subOne,
            subject_2_grade: subTwo,
            subject_3_grade: subThree,
          });
        }

        dispatch({ type: "initialize", payload: studentDetailsArray });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <ul className="nav">
        <li className="links">
          <Link to="/">Home</Link>
        </li>
        <li className="links">
          <Link to="/add_student">Add New Student</Link>
        </li>
        <li className="links">
          <Link to="/display">Display Students</Link>{" "}
        </li>
      </ul>

      <div className="page">
        <Switch>
          <Route path="/add_student" component={StudentRegister} />
          <Route path="/display" component={StudentsTable} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
