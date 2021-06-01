import React from "react";
import { partners } from "./partners";
import { useTranslation } from "react-i18next";
import classes from "./PartnersClients.module.scss";
import { Layout, Typography, Button, Row, Col, Breadcrumb, Space } from "antd";

const PartnersComponent = () => {
  const { t } = useTranslation();
  const { Title, Paragraph } = Typography;

  return (
    <Row gutter={[0, 70]} className={classes.servicesText}>
      {partners.map((partner) => (
        <Col span={16} offset={3}>
          <Space size="middle">
            <img
              style={{ objectFit: "contain" }}
              width={45}
              height={45}
              src={partner.src}
            />
            <Title className={classes.clientPartner}>{partner.name}</Title>
          </Space>
          <Title className={classes.clientParagraph} level={5}>
            {partner.paragraph}
          </Title>
        </Col>
      ))}
    </Row>
  );
};

export default PartnersComponent;
