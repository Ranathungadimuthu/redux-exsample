import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { studentDetaislGet } from "../../API/api";

const ReduxTest = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state);
  const [update, setUpdate] = useState(false);

  console.log(dispatch);
  console.log(students);

  useEffect(() => {
    studentDetaislGet()
      .then((respons) => {
        alert("Password Changed!");
        console.log(respons.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const nameChanger = () => {
    dispatch({ type: "set_name", payload: " Sri" });
    setUpdate(!update);
  };

  const ageChanger = () => {
    dispatch({ type: "set_age", payload: 28 });
    setUpdate(!update);
  };

  return (
    <div>
      <p>Name:{students.studentName}</p>
      <p>Age: {students.age}</p>
      <button onClick={nameChanger}>Change Name</button>
      <br />
      <button onClick={ageChanger}>Change Name</button>
    </div>
  );
};

export default ReduxTest;
