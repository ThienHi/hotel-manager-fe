import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Layout, Card, Input, Space, Button, Form } from "antd";
import { useForm } from "antd/es/form/Form";
import { getDataAPI, postDataAPI } from "../../call_api";
import { getCookie } from "../../utils/getCookie";
import { useAtom } from "jotai";
import { DataAtom, RecipientIdAtom, RoomIdAtom } from "./store";

const { Content, Footer, Header } = Layout;

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
    width: "900px",
  },
  sendMsg: {
    display: "flex",
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
            {values.text}
          </Card>
        </Content>
      </div>
    </>
  );
};

const MessageRoom = () => {
  const token = getCookie("access_token");
  const classes = useStyles();
  const [form] = useForm();
  const [roomIdAtom] = useAtom(RoomIdAtom)
  const [recipientIdAtom] = useAtom(RecipientIdAtom)
  const [dataAtom] = useAtom(DataAtom)
  const message = dataAtom?.message
  console.log(roomIdAtom, recipientIdAtom, " ******************************************8 ");
  const onFinish = async () => {
    const msgText = form.getFieldValue("mess");
    const data = {
      'recipient_id': recipientIdAtom,
      'message_text': msgText,
      'room_id': roomIdAtom,
      'is_text': 'true'
    }
    const res = await postDataAPI("send-msg/send/", data, token);
    form.resetFields();
  };

  return (
    <>
      <Layout>
        <Header className={classes.header}>Nhắn Tin</Header>
      </Layout>
      <div className={classes.tagMsg}>
        <Content>
          {message?.map((value, _) => {
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
          <div className={classes.sendMsg}>
            <Form form={form} onFinish={onFinish}>
              <Form.Item
                name="mess"
                rules={[
                  {
                    required: true,
                    message: "Please input your messenger!",
                  },
                ]}
              >
                <Input className={classes.inputSendMsg} />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Send Message
              </Button>
            </Form>
          </div>
        </Space>
      </Footer>
    </>
  );
};
export default MessageRoom;
