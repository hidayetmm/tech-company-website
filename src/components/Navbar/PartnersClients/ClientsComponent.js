import React from "react";
import { clients } from "./clients";
import { useTranslation } from "react-i18next";
import classes from "./PartnersClients.module.scss";
import { Layout, Typography, Button, Row, Col, Breadcrumb, Space } from "antd";

const ClientsComponent = () => {
  const { t } = useTranslation();
  const { Title, Paragraph } = Typography;

  return (
    <Row gutter={[0, 70]} className={classes.servicesText}>
      {clients.map((client) => (
        <Col span={16} offset={3}>
          <Space size="middle">
            <img width={45} src={client.src} />
            <Title className={classes.clientPartner}>{client.name}</Title>
          </Space>
          <Title className={classes.clientParagraph} level={5}>
            {client.paragraph}
          </Title>
        </Col>
      ))}
    </Row>
  );
};

export default ClientsComponent;
