import React from "react";
import { Form, Input, Button, DatePicker } from "antd";

const AddStudentForm = () => {
  const form = Form.useForm();

  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select date!",
      },
    ],
  };
  return (
    <Form
      name="addStudent"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={() => {}}
      onFinishFailed={() => {}}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="date-picker" label="DOB" {...config}>
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="Stream"
        name="stream"
        rules={[
          {
            required: true,
            message: "Please input relavent stream!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Subject 1: "
        name="Subject_line_1"
        rules={[
          {
            required: true,
            message: "Please input marks!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Subject 2: "
        name="Subject_line_2"
        rules={[
          {
            required: true,
            message: "Please input marks!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Subject 3: "
        name="Subject_line_3"
        rules={[
          {
            required: true,
            message: "Please input marks!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Button>Submit</Button>
    </Form>
  );
};

export default AddStudentForm;
