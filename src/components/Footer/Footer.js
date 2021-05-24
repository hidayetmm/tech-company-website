import React from "react";
import { Link } from "react-router-dom";
import { Layout, Space } from "antd";
import classes from "./Footer.module.scss";
import Title from "antd/lib/typography/Title";

const Footer = () => {
  const { Footer } = Layout;

  const services = [
    "Web Application Development",
    "Mobile Application Development",
    "Business Technology Development",
    "Artificial Intelligence & Machine Learning",
    "Custom Software Development",
    "Enterprise Product Development",
    "Artificial Intelligence & Machine Learning",
  ];

  return (
    <Footer className={classes.footer}>
      <div>
        <Title className={classes.title} level={5}>
          Services
        </Title>
        <Space direction="vertical">
          {services.map((service, index) => (
            <Link>
              <Title className={classes.bottomText} level={5} key={index}>
                {service}
              </Title>
            </Link>
          ))}
        </Space>
      </div>
      {/* EXPERTISE */}
      <div>
        <Title className={classes.title} level={5}>
          Expertise
        </Title>
        <Space direction="vertical">
          {services.map((service, index) => (
            <Link>
              <Title className={classes.bottomText} level={5} key={index}>
                {service}
              </Title>
            </Link>
          ))}
        </Space>
      </div>
      {/* CONTACT */}
      <div>
        <Title className={classes.title} level={5}>
          Contact
        </Title>
        <Space direction="vertical">
          {services.map((service, index) => (
            <Link>
              <Title className={classes.bottomText} level={5} key={index}>
                {service}
              </Title>
            </Link>
          ))}
        </Space>
      </div>
    </Footer>
  );
};

export default Footer;
