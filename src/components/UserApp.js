import { React, useEffect, useState } from "react";
import { Col, Divider, Row, Button, Table, Input, Space } from "antd";
import AddIcon from "@mui/icons-material/Add";
import { getDataAPI } from "../call_api";
import { getCookie } from "../utils/getCookie";
import { SearchOutlined } from "@material-ui/icons";


const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Avatar",
    key: "avatar",
    dataIndex: "avatar",
    render: (text) => <img style={{width: "50px", height: "50px"}} alt={text} src={text} />,
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


const UserApp = () => {
  const token = getCookie("access_token");

  // Call API
  const [data, setData] = useState();
  const getCard = async () => {
    const res = await getDataAPI("users-app/", token);
    setData(res.data.results);
    console.log(res.data.results);
  };

  useEffect(() => {
    getCard();
  }, []);

  return (
    <div>
      <Divider>Social Profile</Divider>
      <Row style={{ margin: "10px 20px 20px 20px" }}>
        <Col span={6} offset={0}>
          <Input.Search size="large" placeholder="Social Profile" enterButton />
        </Col>
        <Col span={6} offset={12}>
          <Space direction="vertical">
          </Space>
        </Col>
      </Row>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default UserApp;
