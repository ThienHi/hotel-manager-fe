import { React, useEffect, useState } from "react";
import { Col, Divider, Row, Button, Modal } from "antd";
import AddIcon from "@mui/icons-material/Add";
import CardHotel from "./cardHotel";
import { getDataAPI } from "../call_api";
import AddHotel from "./forms/addHotel";

const Hotel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  // Call API
  const [data, setData] = useState();
  const getCard = async () => {
    const res = await getDataAPI("hotel/", "asdasdasdsad");
    setData(res.data.results);
  };

  useEffect(() => {
    getCard();
  }, []);

  return (
    <>
      <div style={{ display: "grid" }}>
        <Divider
          orientation="left"
          style={{ fontWeight: "bold", fontSize: "30px" }}
        >
          Hotel
        </Divider>
        <div style={{ marginBottom: "30px" }}>
          <Button
            style={{
              border: "2px solid red",
              float: "right",
              marginRight: "2%",
              display: "flex",
            }}
            type="primary"
            icon={<AddIcon />}
            size="medium"
            danger
            ghost
            onClick={showModal}
          >
            <span style={{ marginTop: "3px" }}>Thêm Khách Sạn</span>
          </Button>
          <Modal
            title="Add Hotel"
            open={isModalOpen}
            onCancel={handleCancel}
            footer null
          >
            <AddHotel handleCancel={handleCancel} />
          </Modal>
        </div>
      </div>
      <Row align="middle">
        {data?.map((value, _) => {
          return (
            <Col span={7} style={{ marginBottom: "30px" }}>
              <CardHotel passValue={value} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Hotel;
