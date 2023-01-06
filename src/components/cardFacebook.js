import React, { useEffect, useState } from "react";
import { Avatar, Button, Card } from "antd";
import { getDataAPI, postDataAPI } from "../call_api";
import { getCookie } from "../utils/getCookie";
const { Meta } = Card;

const CardFacebook = (props) => {
  const token = getCookie("access_token");
  const [connect, setConnect] = useState();
  const [unConnect, setUnConnect] = useState();

  // Call API
  const connectPage = async (connect) => {
    const dataPost = {
      is_subscribe: true,
      page_id: connect
    }
    await postDataAPI("facebook/page/subscribe/", dataPost, token);
    setConnect();
  };

  const unConnectPage = async (connect) => {
    const dataPost = {
      is_subscribe: false,
      page_id: connect
    }
    await postDataAPI("facebook/page/subscribe/", dataPost, token);
    setUnConnect();
  };

  useEffect(() => {
    connectPage(connect);
  }, [connect]);

  const value = props.passValue;
  return (
    <>
      <Card
        style={{
          width: "80%",
        }}
        cover={
          <img
            alt="hotel"
            src="https://play-lh.googleusercontent.com/5pZMqQYClc5McEjaISPkvhF8pDmlbLqraTMwk1eeqTlnUSjVxPCq-MItIrJPJGe7xW4"
          />
        }
      >
        <Meta avatar={<Avatar src={value?.avatar_url} />} title={value?.name} />
        {value?.is_active ? <Button
          style={{
            width: "300px",
            height: "40px",
            border: "2px solid red",
            marginLeft: "10%",
            marginTop: "30px",
          }}
          type="primary"
          size="medium"
          danger
          ghost
          onClick={() => unConnectPage(value?.page_id)}
        >
          Xóa kết nối
        </Button> : <Button
          style={{
            width: "300px",
            height: "40px",
            marginLeft: "10%",
            marginTop: "30px",
          }}
          type="primary"
          size="medium"
          onClick={() => setConnect(value?.page_id)}
          // onClick={}
        >
          Thêm kết nối
        </Button>}
      </Card>
    </>
  );
};

export default CardFacebook;
