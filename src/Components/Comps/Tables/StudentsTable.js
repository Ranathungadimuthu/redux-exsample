import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { studentDetaislGet } from "../../../API/api";
import { Table } from "antd";
import moment from "moment";

const StudentsTable = () => {
  const students = useSelector((state) => state);
  const dispatch = useDispatch();
  const colums = [
    { title: "ID", dataIndex: "key", key: "key" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Date of Birth", dataIndex: "dob", key: "dob" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Stream", dataIndex: "stream", key: "stream" },
    {
      title: "Subject line 1",
      dataIndex: "subject_line_1",
      key: "subject_line_1",
    },
    {
      title: "Subject line 2",
      dataIndex: "subject_line_2",
      key: "subject_line_2",
    },
    {
      title: "Subject line 3",
      dataIndex: "subject_line_3",
      key: "subject_line_3",
    },
  ];

  useEffect(() => {
    const studentDetailsArray = [];

    studentDetaislGet()
      .then((response) => {
        const tempArr = response.data;
        const now = moment();
        for (let i = 0; i < tempArr.length; i++) {
          const dob = moment(tempArr[i].dob, "dd-mm-yyyy");
          const studentAge = now.diff(dob, "years");
          studentDetailsArray.push({ ...tempArr[i], age: studentAge });
        }

        dispatch({ type: "initialize", payload: { studentDetailsArray } });
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div>
      <Table columns={colums} dataSource={students.studentDetailsArray} />
    </div>
  );
};

export default StudentsTable;
