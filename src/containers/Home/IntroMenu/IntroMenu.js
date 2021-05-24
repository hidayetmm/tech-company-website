import React, { useState } from "react";
import {
  Layout,
  Typography,
  Button,
  Row,
  Col,
  Divider,
  Space,
  Grid,
} from "antd";
import classes from "../Home.module.scss";
import { useTranslation } from "react-i18next";
const { Footer, Content } = Layout;
const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const IntroMenu = () => {
  const { t } = useTranslation();

  const { xxl, xl, lg } = useBreakpoint();

  const [intro, setIntro] = useState("1");
  return (
    <Row className={classes.mainText}>
      <Col span={16} offset={4}>
        <Space className={classes.introMenu}>
          <div
            onMouseEnter={() => setIntro("1")}
            className={classes.introMenuItem}
          >
            <Title id={classes.startups} level={4}>
              Startups
            </Title>
            <Divider
              className={`${classes.introDivider1} ${
                intro === "1" ? classes.opacity : null
              }`}
            />
          </div>
          <div
            onMouseEnter={() => setIntro("2")}
            className={classes.introMenuItem}
          >
            <Title id={classes.enterprise} level={4}>
              Enterprise
            </Title>
            <Divider
              className={`${classes.introDivider2} ${
                intro === "2" ? classes.opacity : null
              }`}
            />
          </div>
          <div
            onMouseEnter={() => setIntro("3")}
            className={classes.introMenuItem}
          >
            <Title id={classes.smb} level={4}>
              SMB
            </Title>
            <Divider
              className={`${classes.introDivider3} ${
                intro === "3" ? classes.opacity : null
              }`}
            />
          </div>
        </Space>
      </Col>
      <Col span={16} offset={4}>
        <Space className={classes.introMenu}>
          <div onMouseEnter={() => setIntro("1")}>
            <Title level={xxl ? 2 : 4}>
              {intro === "1"
                ? "Mobile App Development"
                : intro === "2"
                ? "Technology consulting"
                : "Digital transformation"}
            </Title>
          </div>
          <Title
            style={{
              color:
                intro === "1"
                  ? "#ff9933"
                  : intro === "2"
                  ? "#0265ff"
                  : "#3cc55a",
            }}
          >
            •
          </Title>
          <div onMouseEnter={() => setIntro("2")}>
            <Title level={xxl ? 2 : 4}>
              {intro === "1"
                ? "Web development"
                : intro === "2"
                ? "Embedded teams"
                : "Technology consulting"}
            </Title>
          </div>
          <Title
            style={{
              color: intro === "1" ? "#ff9933" : intro === "2" ? "#0265ff" : "",
            }}
          >
            •
          </Title>
          <div onMouseEnter={() => setIntro("3")}>
            <Title level={xxl ? 2 : 4}>
              {intro === "1"
                ? "UI/UX Design"
                : intro === "2"
                ? "Software modernization"
                : "Advanced business solutions"}
            </Title>
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default IntroMenu;
