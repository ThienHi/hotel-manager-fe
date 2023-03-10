import { React, useEffect, useState } from "react";
import { Col, Divider, Row, Button, Table, Input, Space } from "antd";
import AddIcon from "@mui/icons-material/Add";
import { getDataAPI } from "../call_api";
import { getCookie } from "../utils/getCookie";
import { SearchOutlined } from "@material-ui/icons";


const columns = [
  {
    title: "First Name",
    dataIndex: "first_name",
    key: "first_name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
    key: "last_name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Address",
    key: "address",
    dataIndex: "address"
  },
  {
    title: "Gender",
    key: "gender",
    dataIndex: "gender"
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


const User = () => {
  const token = getCookie("access_token");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  // Call API
  const [data, setData] = useState();
  const getCard = async () => {
    const res = await getDataAPI("users/", token);
    setData(res.data.results);
    console.log(res.data.results, " *************888888****************************** ");
  };

  useEffect(() => {
    getCard();
  }, []);

  return (
    <div>
      <Divider>User</Divider>
      <Row style={{ margin: "10px 20px 20px 20px" }}>
        <Col span={6} offset={0}>
          <Input.Search size="large" placeholder="Search User" enterButton />
        </Col>
        <Col span={6} offset={12}>
          <Space direction="vertical">
            <Space wrap>
              <Button icon={<SearchOutlined />}>Add User</Button>
            </Space>
          </Space>
        </Col>
      </Row>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default User;
