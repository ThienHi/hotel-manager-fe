import { React, useEffect, useState } from "react";
import { Avatar, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { makeStyles } from "@material-ui/styles";
import CardChat from "./CardChat";
import { getDataAPI, postDataAPI } from "../../call_api";
import { getCookie } from "../../utils/getCookie";


const useStyles = makeStyles((theme) => ({
  avatar: {
    display: "flex",
    margin: "20px 5px 20px 5px",
  },
  avatarImg: {
    width: "500px",
    height: "89px"
  },
  inputSearch: {
    display: "flex",
    margin: "0px 5px 40px 5px",
  },
  nameUser: {
    margin: "10px 0px 0px 10px",
  },
  cardChatRoom: {},
}));

const ListRoom = () => {
  const token = getCookie("access_token");
  const [room, setRoom] = useState();
  const getRoom = async () => {
    const res = await postDataAPI("rooms/list-room/", {}, token);
    setRoom(res.data.data);
  };
  useEffect(() => {
    getRoom();
  }, []);
  const classes = useStyles();
  return (
    <>
      <div className={classes.avatar}>
        {/* <Avatar icon={<UserOutlined />} /> */}
        <img className={classes.avatarImg} alt="Frame Chat" src="https://png.pngtree.com/png-clipart/20210123/ourlarge/pngtree-yellow-chat-box-cartoon-dialog-png-image_2754558.jpg" />
        {/* <span className={classes.nameUser}>Name</span> */}
      </div>
      {room?.map((value, _) => {
        return (
          <div className={classes.cardChatRoom}>
            <CardChat data={value} />
          </div>
        );
      })}
    </>
  );
};

export default ListRoom;
