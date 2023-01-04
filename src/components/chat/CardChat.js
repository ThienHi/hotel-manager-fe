import { React } from "react";
import { makeStyles } from "@material-ui/styles";
import { Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Meta } = Card;

const useStyles = makeStyles((theme) => ({
  CardChat: {
    margin: "15px",
    backgroundColor: "#FFFFFF",
  },
  avatarCardChat: {
    // padding: "15%"
    margin: "15px",
  },
  siderCardChat: {
    backgroundColor: "#FFFFFF"
  },
  layout: {
    backgroundColor: "red"
  }
}));

const CardChat = () => {
  const classes = useStyles();
  return (
    <>
      <Card
        className = {classes.CardChat}
      >
        <Meta
          avatar={<Avatar
            className={classes.avatarCardChat}
            icon={<UserOutlined />}
          />}
          title="Name chat"
          description="This is message"
        />
      </Card>
    </>
  );
};

export default CardChat;
