import React from "react";
import { Form, Input, Button, Select, DatePicker, InputNumber } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import "./StudentRegister.css";

const StudentRegister = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  let studentsCount = useSelector((state) => state.studentDetails.length);

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

  const onReset = () => {
    console.log("onReset");
    form.resetFields();
  };

  const onFinish = (values) => {
    const now = moment();
    const dob = values.dob;
    const studentAge = now.diff(dob, "years");
    const subOne = studentGrade(values.subject_1);
    const subTwo = studentGrade(values.subject_2);
    const subThree = studentGrade(values.subject_3);
    const newStudent = {
      key: studentsCount,
      name: values.name,
      dob: values.dob.format("DD-MM-YYYY"),
      age: studentAge,
      stream: values.stream,
      subject_line_1: values.subject_1,
      subject_line_2: values.subject_1,
      subject_line_3: values.subject_1,
      subject_1_grade: subOne,
      subject_2_grade: subTwo,
      subject_3_grade: subThree,
    };

    dispatch({ type: "add", payload: newStudent });
  };

  return (
    <div className="container">
      <h2 className="title"> Registration Form</h2>
      <Form form={form} name="register" onFinish={onFinish} scrollToFirstError>
        <div className="row mb-2">
          <div className="col-6">
            <Form.Item name="name" label="Name" required={true}>
              <Input required={true} />
            </Form.Item>
          </div>
          <div className="col-6">
            <Form.Item name="dob" label="Date of Birth" required={true}>
              <DatePicker />
            </Form.Item>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-6">
            <Form.Item name="stream" label="Stream" required={true}>
              <Select>
                <Select.Option value="Math">Math</Select.Option>
                <Select.Option value="Bio">Bio</Select.Option>
                <Select.Option value="Business">Business</Select.Option>
                <Select.Option value="Arts">Arts</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div className="col-6">
            <Form.Item
              name="subject_1"
              label="Subject line 1 score"
              required={true}
            >
              <InputNumber required={true} max={100} min={0} />
            </Form.Item>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-6">
            <Form.Item
              name="subject_2"
              label="Subject line 2 score"
              required={true}
            >
              <InputNumber required={true} max={100} min={0} />
            </Form.Item>
          </div>
          <div className="col-6">
            <Form.Item
              name="subject_3"
              label="Subject line 3 score"
              required={true}
            >
              <InputNumber required={true} max={100} min={0} />
            </Form.Item>
          </div>
        </div>
        <div className="buttons row mb-2">
          <div className="button">
            <Form.Item>
              <Button type="submit" htmlType="primary">
                Save
              </Button>
            </Form.Item>
          </div>
          <div className="button">
            <Form.Item>
              <Button onClick={onReset}>Reset</Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default StudentRegister;
