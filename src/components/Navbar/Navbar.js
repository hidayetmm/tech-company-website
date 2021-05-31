import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Services from "./Services/Services";
import { Layout, Menu, Button, Dropdown, Space, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";
import classes from "./Navbar.module.scss";
import az from "../../assets/az.svg";
import en from "../../assets/en.svg";
import ru from "../../assets/ru.svg";

import i18n from "../../i18n";
import { withTranslation } from "react-i18next";

const { Header } = Layout;
const { SubMenu } = Menu;
const { Text } = Typography;

const Navbar = () => {
  const [flags, setFlags] = useState({ az: az, en: en, ru: ru });
  const location = useLocation();
  const { pathname } = location;
  const handleClick = (e) => {
    console.log("click ", e);
  };

  const { language } = i18n;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={() => changeLanguage("az")} key="0">
        <Link>Azerbaijani</Link>
      </Menu.Item>
      <Menu.Item onClick={() => changeLanguage("en")} key="1">
        <Link>English</Link>
      </Menu.Item>
      {/* <Menu.Divider /> */}
      <Menu.Item key="3" disabled>
        Russian
      </Menu.Item>
    </Menu>
  );
  return (
    <Header className={classes.header}>
      <Link to="/" className={classes.logoDiv}>
        <img className={classes.logo} src={logo} />
      </Link>
      <Menu
        className={classes.navMenu}
        onClick={handleClick}
        selectedKeys={[pathname]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        {/* <SubMenu key="services" title="Services">
            <Menu.Item key="custom">Custom Software Development</Menu.Item>
            <Menu.Item key="enterprise">
              Enterprise Product Development
            </Menu.Item>
            <Menu.Item key="web">Web Application Development</Menu.Item>
            <Menu.Item key="mobile">Mobile Application Development</Menu.Item>
            <Menu.Item key="cloud">Cloud Application Development</Menu.Item>
            <Menu.Item key="software">Software Testing as a Service</Menu.Item>
          </SubMenu> */}
        <Menu.Item key="/services">
          {/* <Popover content={<Services />} placement="bottom"> */}
          <Link to="/services">Services</Link>
          {/* </Popover> */}
        </Menu.Item>
        {/* <SubMenu key="products" title="Products">
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu> */}
        <Menu.Item key="/partners-clients">
          {/* <Popover content={<Services />} placement="bottom"> */}
          <Link to="/partners-clients">Partners/Clients</Link>
          {/* </Popover> */}
        </Menu.Item>

        <Space size="large">
          <Link to="/contact">
            <Button type="primary" shape="round">
              Contact
            </Button>
          </Link>
          <Dropdown overlay={menu}>
            <Button type="text">
              <Space
                align="center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                size={4}
              >
                <img
                  width="22rem"
                  height="22rem"
                  src={
                    language === "az"
                      ? flags.az
                      : language === "en"
                      ? flags.en
                      : flags.ru
                  }
                />
                <Text style={{ textTransform: "uppercase" }}>{language}</Text>
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Space>
      </Menu>
    </Header>
  );
};

export default withTranslation()(Navbar);
