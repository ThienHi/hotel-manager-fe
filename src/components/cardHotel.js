import React, { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import {putDataAPI, getDataAPI } from "../call_api"
import { getCookie } from "../utils/getCookie";
const { Meta } = Card;

const CardHotel = (props) => {
  const token = getCookie("access_token")
  // const [id, setId] = useState();
  const [editData, setEditData] = useState();

  // const editHotel = async (id) => {
  //   const retrieveHotel = await getDataAPI("hotel/", token)
  //   const res = await putDataAPI("hotel/", token);
  //   setEditData(res.data.data);
  // };
  // useEffect(() => {
  //   console.log(id);
  //   editHotel(id)
  // }, [id]);
  const value = props.passValue;
  var myArrayImages = [
    "https://thumbs.dreamstime.com/z/beautiful-exterior-home-pictures-new-home-design-images-modern-best-house-design-images-best-house-images-images-latest-172194515.jpg",
    "https://thumbs.dreamstime.com/z/beautiful-exterior-home-pictures-new-home-design-images-modern-best-house-design-images-best-house-images-images-latest-172871922.jpg",
    "https://thumbs.dreamstime.com/z/best-house-design-images-best-house-images-latest-house-images-design-beautiful-exterior-home-pictures-new-home-design-images-172723149.jpg",
    "https://thumbs.dreamstime.com/z/best-house-design-images-latest-beautiful-exterior-home-pictures-new-modern-front-wall-dream-171113957.jpg",
  ];
  var rand = myArrayImages[(Math.random() * myArrayImages.length) | 0];
  return (
    <>
      <Card
        style={{
          width: "80%",
        }}
        cover={
          <img
            alt="hotel"
            src="https://thumbs.dreamstime.com/b/beautiful-landscape-dry-tree-branch-sun-flowers-field-against-colorful-evening-dusky-sky-use-as-natural-background-backdrop-48319427.jpg"
          />
        }
        actions={[
          <EditOutlined onClick={() => setEditData(value?.id)} key="edit" />,
          <DeleteOutlined key="delete" />,
        ]}
      >
        <Meta
          avatar={<Avatar src={rand} />}
          title={value?.name}
          description={
            <div
              style={{ overflow: "auto", height: "200px" }}
              dangerouslySetInnerHTML={{ __html: value?.description }}
            />
          }
        />
      </Card>
    </>
  );
};

export default CardHotel;
