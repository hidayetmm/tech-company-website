import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Layout, Typography, Button, Row, Col, Breadcrumb, Space } from "antd";

import classes from "./PartnersClients.module.scss";
import { useTranslation } from "react-i18next";
import ClientsComponent from "./ClientsComponent";
import PartnersComponent from "./PartnersComponent";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const PartnersClients = () => {
  const [isSelected, setIsSelected] = useState("clients");
  const { t } = useTranslation();
  let { slug } = useParams();
  if (!slug) {
    slug = "custom-software-development";
  }

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);

  return (
    <div>
      <Layout className={classes.layout}>
        <Row className={classes.breadcrumb}>
          <Col span={16} offset={3}>
            <Breadcrumb separator=">">
              <Breadcrumb.Item>
                <Link to="/">Qscepter</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/partners-clients">Partners/Clients</Link>
              </Breadcrumb.Item>
              {slug !== "custom-software-development" ? (
                <Breadcrumb.Item>{t(`home.services.${slug}`)}</Breadcrumb.Item>
              ) : null}
            </Breadcrumb>
          </Col>
        </Row>
        <Content className={classes.content}>
          <Row className={classes.mainText}>
            <Col span={16} offset={3}>
              <Space>
                <Title
                  onClick={() => setIsSelected("clients")}
                  className={
                    isSelected === "clients" ? classes.title : classes.gray
                  }
                >
                  Clients
                </Title>
                <Title style={{ color: "#bbb" }} className={classes.title}>
                  &nbsp;/&nbsp;
                </Title>
                <Title
                  onClick={() => setIsSelected("partners")}
                  className={
                    isSelected === "partners" ? classes.title : classes.gray
                  }
                >
                  Partners
                </Title>
              </Space>
              <Paragraph className={classes.paragraph}>
                {t(`home.services.${slug}.paragraph`)}
              </Paragraph>
            </Col>
          </Row>
          {isSelected === "clients" ? (
            <ClientsComponent />
          ) : (
            <PartnersComponent />
          )}
        </Content>
      </Layout>
    </div>
  );
};

export default PartnersClients;
