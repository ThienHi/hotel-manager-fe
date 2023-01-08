import { React, useEffect, useState } from "react";
import { Col, Divider, Row } from "antd";
import CardRoom from "./cardRoom";
import { getDataAPI } from "../call_api";
import { getCookie } from "../utils/getCookie";


const Room = () => {
  const token = getCookie("access_token")
  // Call API
  const [data, setData] = useState();
  const getCard = async () => {
    const res = await getDataAPI("room-hotel/", token);
    setData(res.data.results);
    console.log(res);
  };

  useEffect(() => {
    getCard();
  }, []);

  return (
    <>
      <Divider orientation="left">Room</Divider>
      <Row align="middle">
        {data?.map((value, _) => {
          return (
            <Col span={7} style={{ marginBottom: "30px" }}>
              <CardRoom passValue={value} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Room;
