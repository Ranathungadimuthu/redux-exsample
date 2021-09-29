import React from "react";
import { Form, Input, Button, Select, DatePicker, InputNumber } from "antd";

const StudentRegister = () => {
  return (
    <div className="container">
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <div className="row mb-2">
          <div className="col-6">
            <Form.Item label="Name">
              <Input />
            </Form.Item>
          </div>
          <div className="col-6">
            <Form.Item label="Date of Birth">
              <DatePicker />
            </Form.Item>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-6">
            <Form.Item label="Stream">
              <Select>
                <Select.Option value="Math">Math</Select.Option>
                <Select.Option value="Bio">Bio</Select.Option>
                <Select.Option value="Business">Business</Select.Option>
                <Select.Option value="Arts">Arts</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div className="col-6">
            <Form.Item label="Subject line 1 score">
              <InputNumber max={100} min={0} />
            </Form.Item>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-6">
            <Form.Item label="Subject line 2 score">
              <InputNumber max={100} min={0} />
            </Form.Item>
          </div>
          <div className="col-6">
            <Form.Item label="Subject line 3 score">
              <InputNumber max={100} min={0} />
            </Form.Item>
          </div>
        </div>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default StudentRegister;
