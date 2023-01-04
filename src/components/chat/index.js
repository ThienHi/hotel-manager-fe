import React from "react";
import { Layout } from "antd";
import ListRoom from "./ListRoom";
import MessageRoom from "./MessageRoom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  layout: {
    margin: "50px",
    width: "95%",
  },
  listRoom: {
    backgroundColor: "#FFFFCC !important",
    margin: "50px",
    width: "400px !important",
    flex: "200px !important",
    maxWidth: "400px !important",
  },
  content: {
    // backgroundColor: "#E0FFFF",
    margin: "50px",
  },
}));

const { Sider, Content } = Layout;
const ChatMessage = () => {
  const classes = useStyles();
  return (
    <Layout className={classes.layout}>
      <Sider className={classes.listRoom}>
        <ListRoom />
      </Sider>
      <Layout className={classes.content}>
        <Content>
          <MessageRoom />
          {/* <Message /> */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default ChatMessage;
