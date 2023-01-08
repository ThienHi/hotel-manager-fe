import React from "react";
import {
  EditOutlined,
  DeleteOutlined
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;

const CardRoom = (props) => {
  const value = props.passValue;
  var myArrayImages = [
    'https://thumbs.dreamstime.com/z/beautiful-exterior-home-pictures-new-home-design-images-modern-best-house-design-images-best-house-images-images-latest-172194515.jpg',
    'https://thumbs.dreamstime.com/z/beautiful-exterior-home-pictures-new-home-design-images-modern-best-house-design-images-best-house-images-images-latest-172871922.jpg',
    'https://thumbs.dreamstime.com/z/best-house-design-images-best-house-images-latest-house-images-design-beautiful-exterior-home-pictures-new-home-design-images-172723149.jpg',
    'https://thumbs.dreamstime.com/z/best-house-design-images-latest-beautiful-exterior-home-pictures-new-modern-front-wall-dream-171113957.jpg'
  ]
  var rand = myArrayImages[(Math.random() * myArrayImages.length) | 0]
  return (
    <>
      <Card
        style={{
          width: "80%"
        }}
        cover={
          <img
            alt={value?.name}
            src={rand}
          />
        }
        // actions={[
        //   <EditOutlined key="edit" />,
        //   <DeleteOutlined key="delete" />
        // ]}
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

export default CardRoom;
