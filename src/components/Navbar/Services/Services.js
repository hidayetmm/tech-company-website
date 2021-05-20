import React from "react";
import { Layout, Typography, Button, Row, Col, Divider } from "antd";
import classes from "../Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

const Services = () => {
  const { t } = useTranslation();

  return (
    <Layout className={classes.layout}>
      <Content>
        <div className={classes.services}>
          <Link className={classes.serviceLink} to="/services">
            <Title level={5}>{t("home.services.custom")}</Title>
          </Link>
          <Link className={classes.serviceLink} to="/services">
            <Title level={5}>{t("home.services.enterprise")}</Title>
          </Link>
          <Link className={classes.serviceLink} to="/services">
            <Title level={5}>{t("home.services.web")}</Title>
          </Link>
        </div>
      </Content>
    </Layout>
  );
};

export default Services;
