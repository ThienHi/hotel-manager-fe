import { React, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Card, Avatar } from "antd";
import { useAtom } from "jotai";
import { DataAtom, RoomIdAtom, RecipientIdAtom } from "./store";
import { getCookie } from "../../utils/getCookie";
import { getDataAPI } from "../../call_api";

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
    backgroundColor: "#FFFFFF",
  },
  layout: {
    backgroundColor: "red",
  },
}));

const CardChat = (props) => {
  const token = getCookie("access_token");
  const [message, setMessage] = useState();
  const classes = useStyles();
  const data = props.data;
  const [,setDataAtom] = useAtom(DataAtom)
  const [,setRoomIdAtom] = useAtom(RoomIdAtom)
  const [,setRecipientIdAtom] = useAtom(RecipientIdAtom)
  const getMessage = async (room_id) => {
    const res = await getDataAPI(`rooms/${room_id}/`, token);
    setMessage(res.data.data);
    setDataAtom(res.data.data)
    setRoomIdAtom(props.data.room_id)
    setRecipientIdAtom(props.data.external_id)
  };

  useEffect(() => {
    getMessage(message);
  }, [message]);
  return (
    <>
      <Card className={classes.CardChat} onClick={()=>setMessage(props.data.room_id)}>
        <Meta
          avatar={
            <Avatar
              className={classes.avatarCardChat}
              icon={<img alt={data?.name} src={data?.user_info.avatar} />}
            />
          }
          title={data?.name}
          description={data?.last_message.text}
        />
      </Card>
    </>
  );
};

export default CardChat;
