import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Typography, Button, Row, Col, Divider, Space } from "antd";
import classes from "./Home.module.scss";
import { useTranslation } from "react-i18next";

import TechStack from "./TechStack/TechStack";
const { Footer, Content } = Layout;
const { Title, Paragraph } = Typography;

const Home = () => {
  const { t } = useTranslation();

  const [intro, setIntro] = useState("1");

  return (
    <Layout className={classes.layout}>
      {/* MAIN */}
      <Content className={classes.content}>
        <Row className={classes.mainText}>
          <Col span={16} offset={4}>
            <Title className={classes.title}>{t("home.welcome1")}</Title>
            <Paragraph className={classes.paragraph}>
              {t("home.welcome2")}
            </Paragraph>
            <Button type="text" shape="round">
              {t("home.welcome3")}
            </Button>
          </Col>
        </Row>
        <Row className={classes.mainText}>
          <Col span={16} offset={4}>
            <Space className={classes.introMenu}>
              <div className={classes.introMenuItem}>
                <Title level={4}>Startups</Title>
                <Divider className={classes.introDivider1} />
              </div>
              <div className={classes.introMenuItem}>
                <Title level={4}>Enterprise</Title>
                <Divider className={classes.introDivider2} />
              </div>
              <div className={classes.introMenuItem}>
                <Title level={4}>SMB</Title>
                <Divider className={classes.introDivider3} />
              </div>
            </Space>
          </Col>
        </Row>
      </Content>
      {/* SERVICES INTRO */}
      <Content className={`${classes.content} ${classes.bg}`}>
        <Row className={classes.mainText}>
          <Col span={16} offset={4}>
            <Title className={classes.title}>{t("home.services")}</Title>
            <Paragraph className={classes.paragraph}>
              {t("home.services.p")}
            </Paragraph>
          </Col>
        </Row>
      </Content>
      {/* SERVICES */}
      <Content className={classes.content}>
        <Row>
          <Col span={16} offset={4}>
            <Title className={classes.title}>{t("home.services.title")}</Title>
            <Divider className={classes.divider} />
          </Col>
        </Row>
        <Row align="top" className={classes.mainText}>
          {/* CUSTOM SOFTWARE DEVELOPMENT */}
          <Col span={4}></Col>
          <Col span={8}>
            <Link
              className={classes.serviceLink}
              to="/services/custom-software-development"
            >
              <Title className={classes.service}>
                {t("home.services.custom")}
              </Title>
            </Link>
            <Paragraph className={classes.serviceParagraph}>
              {t("home.services.custom.paragraph")}
            </Paragraph>
          </Col>
          {/* ENTERPRISE SOFTWARE DEVELOPMENT */}
          <Col span={8}>
            <Link
              className={classes.serviceLink}
              to="/services/custom-software-development"
            >
              <Title className={classes.service}>
                {t("home.services.enterprise")}
              </Title>
            </Link>

            <Paragraph
              ellipsis={{ rows: 7, expandable: true, symbol: t("more") }}
              className={classes.serviceParagraph}
            >
              {t("home.services.enterprise.paragraph")}
            </Paragraph>
          </Col>
          <Col span={4}></Col>
        </Row>
        {/* WEB APPLICATION DEVELOPMENT */}
        <Row align="top" className={classes.mainText}>
          <Col span={4}></Col>
          <Col span={8}>
            <Link
              className={classes.serviceLink}
              to="/services/custom-software-development"
            >
              <Title className={classes.service}>
                {t("home.services.web")}
              </Title>
            </Link>
            <Paragraph className={classes.serviceParagraph}>
              {t("home.services.web.paragraph")}
            </Paragraph>
          </Col>
          {/* MOBILE APPLICATION DEVELOPMENT */}

          <Col span={8}>
            <Link
              className={classes.serviceLink}
              to="/services/custom-software-development"
            >
              <Title className={classes.service}>
                {t("home.services.mobile")}
              </Title>
            </Link>

            <Paragraph
              ellipsis={{ rows: 7, expandable: true, symbol: t("more") }}
              className={classes.serviceParagraph}
            >
              {t("home.services.mobile.paragraph")}
            </Paragraph>
          </Col>
          <Col span={4}></Col>
        </Row>
        {/* BUSINESS TECHNOLOGY DEVELOPMENT */}
        <Row align="top" className={classes.mainText}>
          <Col span={4}></Col>
          <Col span={8}>
            <Link
              className={classes.serviceLink}
              to="/services/custom-software-development"
            >
              <Title className={classes.service}>
                {t("home.services.business")}
              </Title>
            </Link>

            <Paragraph
              ellipsis={{ rows: 7, expandable: true, symbol: t("more") }}
              className={classes.serviceParagraph}
            >
              {t("home.services.business.paragraph")}
            </Paragraph>
          </Col>
          {/* ARTIFICIAL INTELLIGENCE & MACHINE LEARNING */}
          <Col span={8}>
            <Link
              className={classes.serviceLink}
              to="/services/custom-software-development"
            >
              <Title className={classes.service}>
                {t("home.services.artificial")}
              </Title>
            </Link>

            <Paragraph
              ellipsis={{ rows: 7, expandable: true, symbol: t("more") }}
              className={classes.serviceParagraph}
            >
              {t("home.services.artificial.paragraph")}
            </Paragraph>
          </Col>
          <Col span={4}></Col>
        </Row>
      </Content>
      <TechStack />

      <Footer className={classes.footer}>Footer</Footer>
    </Layout>
  );
};

export default Home;
