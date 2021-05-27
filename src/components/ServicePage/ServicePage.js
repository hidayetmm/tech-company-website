import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Layout, Typography, Button, Row, Col, Breadcrumb, Space } from "antd";

import classes from "./ServicePage.module.scss";
import { useTranslation } from "react-i18next";

const { Footer, Content } = Layout;
const { Title, Paragraph } = Typography;

const ServicePage = () => {
  const { t } = useTranslation();
  let { slug } = useParams();
  if (!slug) {
    slug = "custom-software-development";
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout className={classes.layout}>
      <Row className={classes.breadcrumb}>
        <Col span={16} offset={3}>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link to="/">Qscepter</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <Link to="/services">{t(`services.servicesText`)}</Link>
            </Breadcrumb.Item>
            {slug !== "custom-software-development" ? (
              <Breadcrumb.Item href="">
                {t(`home.services.${slug}`)}
              </Breadcrumb.Item>
            ) : null}
          </Breadcrumb>
        </Col>
      </Row>
      <Content className={classes.content}>
        <Row className={classes.mainText}>
          <Col span={16} offset={3}>
            <Title className={classes.title}>
              {t(`home.services.${slug}`)}
            </Title>
            <Paragraph className={classes.paragraph}>
              {t(`home.services.${slug}.paragraph`)}
            </Paragraph>
            <Button
              style={{ marginTop: "1rem" }}
              size="large"
              type="primary"
              shape="round"
            >
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
                to="/services/web-application-development"
              >
                <Title level={4} className={classes.service}>
                  {t("home.services.web-application-development")}
                </Title>
              </Link>
              <Link
                className={classes.serviceLink}
                to="/services/mobile-application-development"
              >
                <Title level={4} className={classes.service}>
                  {t("home.services.mobile-application-development")}
                </Title>
              </Link>
              <Link
                className={classes.serviceLink}
                to="/services/business-technology-development"
              >
                <Title level={4} className={classes.service}>
                  {t("home.services.business-technology-development")}
                </Title>
              </Link>
              <Link
                className={classes.serviceLink}
                to="/services/artificial-intelligence-machine-learning"
              >
                <Title level={4} className={classes.service}>
                  {t("home.services.artificial-intelligence-machine-learning")}
                </Title>
              </Link>
            </Space>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ServicePage;
