import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Table, Input } from "antd";
import "./StudentsTable.css";

export default function StudentsTable() {
  const students = useSelector((state) => state.studentDetails);

  const [display, setDsiplay] = useState([]);

  const drawTable = () => {
    return (
      <Table
        columns={colums}
        dataSource={display.length > 0 ? display : students}
      />
    );
  };

  const onSearch = (e) => {
    const value = e.target.value;
    if (value.length >= 0) {
      const searchedStudent = students.filter(
        (student) =>
          student.name.toLowerCase().slice(0, value.length) ===
          value.toLowerCase()
      );
      //console.log(...searchedStudent);
      setDsiplay((display) => [...searchedStudent]);

      //console.log(display);
    } else {
    }
  };
  console.log();
  return (
    <div className="table_page">
      <div className="search_box">
        <Input
          placeholder="Enter Student Name to start searching !"
          key="search"
          type="text"
          onChange={onSearch}
        />
      </div>
      <div>{drawTable()}</div>
    </div>
  );
}

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
    title: "Subject 1 grade",
    dataIndex: "subject_1_grade",
    key: "subject_1_grade",
  },
  {
    title: "Subject line 2",
    dataIndex: "subject_line_2",
    key: "subject_line_2",
  },
  {
    title: "Subject 2 grade",
    dataIndex: "subject_2_grade",
    key: "subject_2_grade",
  },
  {
    title: "Subject line 3",
    dataIndex: "subject_line_3",
    key: "subject_line_3",
  },
  {
    title: "Subject 3 grade",
    dataIndex: "subject_3_grade",
    key: "subject_3_grade",
  },
];
