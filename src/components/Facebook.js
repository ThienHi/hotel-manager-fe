import { React, useEffect, useState } from "react";
import { Col, Divider, Row, Button } from "antd";
import AddIcon from "@mui/icons-material/Add";
import CardFacebook from "./cardFacebook";
import { getDataAPI, postDataAPI } from "../call_api";
import { useLocation } from "react-router-dom";
import { getCookie } from "../utils/getCookie";

const Facebook = () => {
  const token = getCookie("access_token");
  const [callApiListPage, setCallApiListPage] = useState(false);
  const [page, setPage] = useState();
  const location = useLocation();

  // Call API
  const params = new URLSearchParams(location.search);
  const callAPIListPage = async () => {
    const code = params.get("code");
    const dataPost = {
      redirect_url: "https://localhost:3000/facebook",
      code: code,
    };
    await postDataAPI("facebook/list-page/", dataPost, token);
    setCallApiListPage(true);
  };

  const getPage = async () => {
    const res = await getDataAPI("facebook/", token);
    setPage(res.data.data);
  };

  useEffect(() => {
    getPage();
    // callAPIListPage();
  }, []);

  return (
    <>
      <div style={{ display: "grid" }}>
        <Divider
          orientation="left"
          style={{ fontWeight: "bold", fontSize: "30px" }}
        >
          Facebook
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
            // onClick={callAPIListPage}
          >
            <a
              style={{ marginTop: "3px" }}
              href="https://www.facebook.com/v2.8/dialog/oauth?client_id=832732297817343&response_type=code&redirect_uri=https://localhost:3000/facebook&scope=pages_show_list%2Cpages_messaging%2Cpages_read_engagement%2Cpages_manage_metadata%2Cpages_read_user_content%2Cpages_manage_posts%2Cpages_manage_engagement&state=5eb78a0c-4aaf-40dc-990f-1c2580ccf84a"
            >
              Thêm kết nối
            </a>
          </Button>
        </div>
      </div>
      <Row align="middle">
        {page?.map((value, _) => {
          return (
            <Col span={7} style={{ marginBottom: "30px" }}>
              <CardFacebook passValue={value} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Facebook;
