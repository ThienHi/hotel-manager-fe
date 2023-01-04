import React from "react";
// import "antd/dist/antd.css";
// import "./style.css";
import { Layout, Button } from "antd";
// import { message as Message } from "antd";
// import { logoutUser } from "../actions/logout.action";
import { PoweroffOutlined } from "@ant-design/icons";

// import { getCookie } from "utils/getCookie";

const logoutOnClick = async () => {
  //   const refresh = getCookie("refresh");
  //   const { success, message } = await logoutUser(refresh);
  //   if (success) {
  //     document.cookie =
  //       "token=; expires=" + new Date().toUTCString() + ";path=/;";
  //     setTimeout(() => {
  //       window.location.replace(`/`);
  //     }, 500);
  //     Message.success(message);
  //   } else {
  //     Message.error(message);
  //   }
};

const { Header } = Layout;

const Head = () => {
  return (
    <Header
      className="site-layout-sub-header-background"
      style={{ padding: 0 }}
    >
      <Button
        style={{ float: "right", margin: "10px" }}
        type="primary"
        icon={<PoweroffOutlined />}
        onClick={logoutOnClick}
      >
        Logout
      </Button>
    </Header>
  );
};

export default Head;
