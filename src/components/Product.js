import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Input, Col, Row, Button, Divider } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { getDataAPI } from "../call_api";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const Product = () => {
  const [data, setData] = useState();
  const getProduct = async () => {
    const res = await getDataAPI("product/", "asdasdasdsad");
    setData(res.results);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <Divider>Product</Divider>
      <Row style={{ margin: "10px 20px 20px 20px" }}>
        <Col span={6} offset={0}>
          <Input.Search size="large" placeholder="Search Product" enterButton />
        </Col>
        <Col span={6} offset={12}>
          <Space direction="vertical">
            <Space wrap>
              <Button icon={<SearchOutlined />}>Add Product</Button>
            </Space>
          </Space>
        </Col>
      </Row>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
export default Product;
