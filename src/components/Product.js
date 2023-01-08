import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Input, Col, Row, Button, Divider } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { getDataAPI } from "../call_api";
import { getCookie } from "../utils/getCookie";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Detail",
    key: "detail",
    dataIndex: "detail"
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const Product = () => {
  const token = getCookie("access_token");
  const [data, setData] = useState();
  const getProduct = async () => {
    const res = await getDataAPI("product/", token);
    setData(res.data.results);
    console.log(res, " ***************************************** ");
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
