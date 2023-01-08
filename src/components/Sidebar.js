import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link, Routes, Route } from "react-router-dom";
import Product from "./Product";
import Head from "./Header"
import Profile from "./Profile";
import Hotel from "./Hotel";
import User from "./User";
import UserApp from "./UserApp";
import Room from "./Room";
import ChatMessage from "./chat/index";
// import Analytics from "./charts/index"
import LineAreaChart from './charts/LineAreaChart';
import DataLabelChart from './charts/DataLabelChart';
import Facebook from "./Facebook";


const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<Link to="">Dashboard</Link>, "1", <PieChartOutlined />, [
    getItem(<Link to="report-month">Report by Month</Link>, "sub1-1"),
    getItem(<Link to="total-report">Total Report</Link>, "sub1-2"),
  ]  ),
  getItem(<Link to="hotel">Hotel</Link>, "2", <DesktopOutlined />),
  getItem(<Link to="room">Room</Link>, "sub1", <UserOutlined />),
  getItem(<Link to="user">User</Link>, "4", <FileOutlined />),
  getItem("Order", "sub2", <TeamOutlined />, [
    getItem(<Link to="order">Order</Link>, "6"),
    getItem(<Link to="order-details">Order Details</Link>, "8"),
  ]),
  getItem(<Link to="product">Product</Link>, "3", <FileOutlined />),
  getItem(<Link to="chat">Message</Link>, "9", <FileOutlined />),
  getItem(<Link to="facebook">Facebook</Link>, "10", <FileOutlined />),
  getItem(<Link to="social-profile">Social Profile</Link>, "11", <FileOutlined />),
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            // background: "rgba(255, 255, 255, 0.2)",
          }}
        > Thienhi </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Profile/>
        <Head/>
        <Content >
          <Routes>
            <Route exact path="/product" element={
                <Product />
            }>
            </Route>
            <Route exact path="/hotel" element={
                <Hotel />
            }>
            </Route>
            <Route exact path="/user" element={
                <User />
            }>
            </Route>
            <Route exact path="/social-profile" element={
                <UserApp />
            }>
            </Route>
            <Route exact path="/chat" element={
                <ChatMessage />
            }>
            </Route>
            <Route exact path="/room" element={
                <Room />
            }>
            </Route>
            <Route exact path="/report-month" element={
                <LineAreaChart />
            }>
            </Route>
            <Route exact path="/total-report" element={
                <DataLabelChart />
            }>
            </Route>
            <Route exact path="/facebook" element={
                <Facebook />
            }>
            </Route>
          </Routes>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Hotel Manage ©2022 Created by ThiệnHi
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Sidebar;
