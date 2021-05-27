import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Grid } from "antd";
import { Row, Col, Typography, Modal } from "antd";
import classes from "./Contact.module.scss";
import { useTranslation, Trans } from "react-i18next";

const { useBreakpoint } = Grid;

const Contact = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { t } = useTranslation();

  const { xl, lg } = useBreakpoint();

  const { Title, Paragraph, Text } = Typography;
  const { TextArea } = Input;
  const layout = {
    wrapperCol: {
      span: 24,
    },
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={classes.main}>
      <Row gutter={xl ? [0, 30] : 0} align="middle">
        <Col xxl={{ span: 8, offset: 4 }} xl={{ span: 18, offset: 3 }}>
          <Title className={classes.title1}>{t("contact.title")}</Title>
          <Title className={classes.title2} level={xl ? 4 : 3}>
            {t("contact.paragraph")}
          </Title>
          <Title level={5}>Contact</Title>
          <Paragraph>
            Turan Business Centre, 3rd floor, Ahmad Rajabli, Nariman Narimanov,
            Baku, Azerbaijan
          </Paragraph>
          <Text strong>+994 12 525 09 40, info@qscepter.com</Text>
        </Col>
        <Col xxl={{ span: 8, offset: 1 }} xl={{ span: 18, offset: 3 }}>
          <Form
            className={classes.form}
            size="large"
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item style={{ marginBottom: 0 }}>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your full name!",
                  },
                ]}
                style={{ display: "inline-block", width: "calc(50% - 8px)" }}
              >
                <Input placeholder={t("contact.form.fullName")} />
              </Form.Item>
              <Form.Item
                name="company"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  marginLeft: "16px",
                }}
              >
                <Input placeholder={t("contact.form.company")} />
              </Form.Item>
            </Form.Item>
            <Form.Item
              style={{
                marginBottom: 0,
                width: "fill",
              }}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your full name!",
                  },
                ]}
                style={{ display: "inline-block", width: "calc(50% - 8px)" }}
              >
                <Input placeholder={t("contact.form.email")} />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your full name!",
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  marginLeft: "16px",
                }}
              >
                <Input placeholder={t("contact.form.phoneNumber")} />
              </Form.Item>
            </Form.Item>
            <Form.Item
              name="about"
              rules={[
                {
                  required: true,
                  message: "Please input your full name!",
                },
              ]}
            >
              <TextArea rows={3} placeholder={t("contact.form.aboutProject")} />
            </Form.Item>

            <Form.Item noStyle>
              <div className={classes.submit}>
                <Text className={classes.submitParagraph}>
                  <Trans i18nKey="contact.submitParagraph">
                    <Button
                      onClick={showModal}
                      id={classes.submitParagraphButton}
                      size="small"
                      type="link"
                    />
                  </Trans>
                  <Modal
                    title={t("contact.privacyPolicy")}
                    visible={isModalVisible}
                    // onOk={handleOk}
                    footer={null}
                    onCancel={handleCancel}
                    width="30vw"
                  >
                    <p>
                      At qscepter.az, accessible from qscepter.az, one of our
                      main priorities is the privacy of our visitors. This
                      Privacy Policy document contains types of information that
                      is collected and recorded by www.qscepter.az and how we
                      use it. If you have additional questions or require more
                      information about our Privacy Policy, do not hesitate to
                      contact us.
                      <br />
                      <br />
                      The personal information that you are asked to provide,
                      and the reasons why you are asked to provide it, will be
                      made clear to you at the point we ask you to provide your
                      personal information. If you contact us directly, we may
                      receive additional information about you such as your
                      name, email address, phone number, the contents of the
                      message and/or attachments you may send us, and any other
                      information you may choose to provide.
                    </p>
                  </Modal>
                </Text>
                <Button size="large" type="primary" htmlType="submit">
                  {t("contact.submitButton")}
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Col>
        <Col xxl={3} xl={3}></Col>
      </Row>
    </div>
  );
};

export default Contact;
