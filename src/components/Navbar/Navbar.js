import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Services from "./Services/Services";
import { Layout, Menu, Button, Popover } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import classes from "./Navbar.module.scss";

const { Header } = Layout;
const { SubMenu } = Menu;

const Navbar = () => {
  const [current, setCurrent] = useState("mail");
  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Layout>
      <Header className={classes.header}>
        <Link to="/" className={classes.logoDiv}>
          <img className={classes.logo} src={logo} />
        </Link>
        <Menu
          className={classes.navMenu}
          onClick={handleClick}
          selectedKeys={[current]}
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
          <Menu.Item key="services">
            <Popover content={<Services />} placement="bottom">
              <Link to="/services">Services</Link>
            </Popover>
          </Menu.Item>
          <SubMenu key="products" title="Products">
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key="partners-alliance" title="Partners/Alliance">
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>

          <Button type="primary" shape="round">
            Contact
          </Button>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
