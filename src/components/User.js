import { React } from "react";
import { Col, Divider, Row } from "antd";
import Cards from "./Card";

const DemoBox = (props) => (
  <p className={`height-${props.value}`}>{props.children}</p>
);

const User = () => {
  return (
    <>
      <Divider orientation="left">Hotel</Divider>

      <Row justify="space-around" align="middle">
        <Col span={4}>
          <DemoBox value={50}>
            <Cards />
          </DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={50}>
            <Cards />
          </DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={50}>
            <Cards />
          </DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={50}>
            <Cards />
          </DemoBox>
        </Col>
      </Row>
    </>
  );
};

export default User;
