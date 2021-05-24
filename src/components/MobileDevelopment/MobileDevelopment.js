import React from "react";
import { Link } from "react-router-dom";
import { Layout, Typography, Button, Row, Col, Divider, Space } from "antd";

import classes from "./MobileDevelopment.module.scss";
import { useTranslation } from "react-i18next";

const { Footer, Content } = Layout;
const { Title, Paragraph } = Typography;

const MobileDevelopment = () => {
  const { t } = useTranslation();

  return (
    <Layout className={classes.layout}>
      <Content className={classes.content}>
        <Row className={classes.mainText}>
          <Col span={16} offset={3}>
            <Title className={classes.title}>Custom Software Development</Title>
            <Paragraph className={classes.paragraph}>
              {t("home.welcome2")}
            </Paragraph>
            <Button size="large" type="primary" shape="round">
              {t("home.welcome3")}
            </Button>
          </Col>
        </Row>

        <Row className={classes.servicesText}>
          <Col span={16} offset={3}>
            <Title level={4} id={classes.servicesText}>
              SERVICES
            </Title>
          </Col>
          <Col span={16} offset={3}>
            <Space size="small">
              <Link
                className={classes.serviceLink}
                to="/services/custom-software-development"
              >
                <Title level={4} className={classes.service}>
                  {t("home.services.web")}
                </Title>
              </Link>
              <Link
                className={classes.serviceLink}
                to="/services/custom-software-development"
              >
                <Title level={4} className={classes.service}>
                  {t("home.services.mobile")}
                </Title>
              </Link>
              <Link
                className={classes.serviceLink}
                to="/services/custom-software-development"
              >
                <Title level={4} className={classes.service}>
                  {t("home.services.business")}
                </Title>
              </Link>
              <Link
                className={classes.serviceLink}
                to="/services/custom-software-development"
              >
                <Title level={4} className={classes.service}>
                  {t("home.services.artificial")}
                </Title>
              </Link>
            </Space>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default MobileDevelopment;
