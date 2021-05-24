import React from "react";
import { Link } from "react-router-dom";
import { Layout, Typography, Button, Row, Col, Divider, Grid } from "antd";
import classes from "./Home.module.scss";

import { useTranslation } from "react-i18next";

import TechStack from "./TechStack/TechStack";
import IntroMenu from "./IntroMenu/IntroMenu";
const { Footer, Content } = Layout;
const { Title, Paragraph } = Typography;

const { useBreakpoint } = Grid;

const Home = () => {
  const { t } = useTranslation();

  const { xxl, xl, lg } = useBreakpoint();

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
        <IntroMenu />
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
                {t("home.services.custom-software-development")}
              </Title>
            </Link>
            <Paragraph className={classes.serviceParagraph}>
              {t("home.services.custom-software-development.paragraph")}
            </Paragraph>
          </Col>
          {/* ENTERPRISE SOFTWARE DEVELOPMENT */}
          <Col span={8}>
            <Link
              className={classes.serviceLink}
              to="/services/enterprise-product-development"
            >
              <Title className={classes.service}>
                {t("home.services.enterprise-product-development")}
              </Title>
            </Link>

            <Paragraph
              ellipsis={{ rows: 7, expandable: true, symbol: t("more") }}
              className={classes.serviceParagraph}
            >
              {t("home.services.enterprise-product-development.paragraph")}
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
              to="/services/web-application-development"
            >
              <Title className={classes.service}>
                {t("home.services.web-application-development")}
              </Title>
            </Link>
            <Paragraph className={classes.serviceParagraph}>
              {t("home.services.web-application-development.paragraph")}
            </Paragraph>
          </Col>
          {/* MOBILE APPLICATION DEVELOPMENT */}

          <Col span={8}>
            <Link
              className={classes.serviceLink}
              to="/services/mobile-application-development"
            >
              <Title className={classes.service}>
                {t("home.services.mobile-application-development")}
              </Title>
            </Link>

            <Paragraph
              ellipsis={{ rows: 7, expandable: true, symbol: t("more") }}
              className={classes.serviceParagraph}
            >
              {t("home.services.mobile-application-development.paragraph")}
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
              to="/services/business-technology-development"
            >
              <Title className={classes.service}>
                {t("home.services.business-technology-development")}
              </Title>
            </Link>

            <Paragraph
              ellipsis={{ rows: 7, expandable: true, symbol: t("more") }}
              className={classes.serviceParagraph}
            >
              {t("home.services.business-technology-development.paragraph")}
            </Paragraph>
          </Col>
          {/* ARTIFICIAL INTELLIGENCE & MACHINE LEARNING */}
          <Col span={8}>
            <Link
              className={classes.serviceLink}
              to="/services/artificial-intelligence-machine-learning"
            >
              <Title className={classes.service}>
                {t("home.services.artificial-intelligence-machine-learning")}
              </Title>
            </Link>

            <Paragraph
              ellipsis={{ rows: 7, expandable: true, symbol: t("more") }}
              className={classes.serviceParagraph}
            >
              {t(
                "home.services.artificial-intelligence-machine-learning.paragraph"
              )}
            </Paragraph>
          </Col>
          <Col span={4}></Col>
        </Row>
      </Content>
      <TechStack />
    </Layout>
  );
};

export default Home;
