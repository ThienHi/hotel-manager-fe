import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { postDataAPI } from "../../call_api";
import { getCookie } from "../../utils/getCookie";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const AddHotel = ({handleCancel}) => {
  const token = getCookie("access_token")
  const [data, setData] = useState();

  const [form] = Form.useForm();
  

  const onFinish = async (values) => {
    const formAddHotel = {
      name: values.user.name,
      description: values.user.description,
      offer: values.user.offer,
      country: values.user.country,
      rate_hotel: values.user.rate,
    };
    const res = await postDataAPI("hotel/", formAddHotel, token);
    setData(res.data);
  };

  const onReset = () => {
    handleCancel()
    form.resetFields();
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "name"]}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "description"]}
        label="Description"
        rules={[
          {
            required: true,
            message: "Please input your description!",
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name={["user", "offer"]}
        label="Offer"
        rules={[
          {
            required: true,
            type: "number",
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={["user", "country"]}
        label="Country"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "rate"]}
        label="Rate Hotel"
        rules={[
          {
            required: true,
            type: "number",
            min: 0,
            max: 5,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>

      {/* <Form.Item label="Upload Image" valuePropName="image">
        <Upload action="/upload.do" listType="picture-card">
          <div>
            <PlusOutlined />
            <div
              style={{
                marginTop: 8,
              }}
            >
              Upload
            </div>
          </div>
        </Upload>
      </Form.Item> */}
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AddHotel;
