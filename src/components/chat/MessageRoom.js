import React from "react";
import { makeStyles } from "@material-ui/core";
import { Layout, Card, Input, Space } from "antd";

const { Content, Footer, Header } = Layout;
const { Search } = Input;

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "yellow !important",
  },
  chatMessage: {
    margin: "50px",
    width: "95%",
  },
  msgRight: {
    float: "right",
    width: "400px",
  },
  msgLeft: {
    float: "left",
    width: "400px",
  },
  tagMsg: {
    overflow: "scroll",
    height: "600px",
  },
  inputSendMsg: {
    width: "1000px",
  },
}));

const sendMessage = async (e) => {
  e.preventDefault();
};

const ChatMessage = (props) => {
  const classes = useStyles();
  const values = props.data;
  return (
    <>
      <div>
        <Content>
          <Card
            className={values.is_sender ? classes.msgRight : classes.msgLeft}
          >
            {values.message}
          </Card>
        </Content>
      </div>
    </>
  );
};

const data = [
  {
    id: 1,
    is_sender: true,
    message: "Hi guy!!!",
  },
  {
    id: 2,
    is_sender: true,
    message: "Hello You",
  },
  {
    id: 3,
    is_sender: false,
    message: "My name ThienHi 'i' short!!",
  },
  {
    id: 4,
    is_sender: true,
    message: "Oke ThienHi",
  },
  {
    id: 5,
    is_sender: false,
    message: "Oke ThienHi",
  },
  {
    id: 6,
    is_sender: true,
    message: "Oke ThienHi",
  },
  {
    id: 4,
    is_sender: true,
    message: "Oke ThienHi",
  },
  {
    id: 5,
    is_sender: false,
    message: "Oke ThienHi",
  },
  {
    id: 6,
    is_sender: true,
    message: "Oke ThienHi",
  },
];

const MessageRoom = () => {
  const classes = useStyles();
  return (
    <>
      <Layout>
        <Header className={classes.header}>Header</Header>
      </Layout>
      <div className={classes.tagMsg}>
        <Content>
          {data?.map((value, _) => {
            return (
              <Card style={{ display: "block" }}>
                <ChatMessage className={classes.chatMessage} data={value} />
              </Card>
            );
          })}
        </Content>
      </div>
      <Footer>
        <Space direction="vertical">
          <p>Send message</p>
          <Input className={classes.inputSendMsg} />
        </Space>
      </Footer>
    </>
  );
};
export default MessageRoom;
