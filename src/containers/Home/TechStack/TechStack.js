import React, { useState } from "react";
import { Layout, Typography, Button, Row, Col, Divider } from "antd";
import classes from "../Home.module.scss";
import { useTranslation, Trans } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import kotlinIcon from "@iconify-icons/simple-icons/kotlin";
import dartIcon from "@iconify-icons/simple-icons/dart";
import flutterIcon from "@iconify-icons/simple-icons/flutter";
import ionicIcon from "@iconify-icons/simple-icons/ionic";
import xamarinIcon from "@iconify-icons/simple-icons/xamarin";
import {
  faAngular,
  faReact,
  faJs,
  faHtml5,
  faSass,
  faNodeJs,
  faPhp,
  faDocker,
  faSwift,
  faJava,
  faApple,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
const { Header, Footer, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

const TechStack = () => {
  const [isWebDevEnabled, setisWebDevEnabled] = useState(true);
  const { t } = useTranslation();

  return (
    <Content className={classes.content}>
      <Row>
        <Col span={16} offset={4}>
          <Title className={classes.title}>{t("home.stack.title")}</Title>
          <Paragraph className={classes.paragraph}>
            {t("home.stack.paragraph")}
          </Paragraph>
          {/* <Divider className={classes.divider} /> */}
        </Col>
      </Row>
      <Row
        align="middle"
        justify="start"
        gutter={[0, 50]}
        className={classes.mainText}
      >
        {/* WEB DEVELOPMENT */}
        <Col span={3}></Col>
        <Col lg={{ span: 10 }} md={{ span: 10 }}>
          <div
            onClick={() => setisWebDevEnabled(true)}
            className={isWebDevEnabled ? classes.blue : classes.stackButtons}
          >
            <Title className={classes.service}>Web Development Stack</Title>
            <Title level={4} className={classes.serviceParagraph}>
              We follow the latest development approaches and technologies to
              build web applications that meet your requirements
            </Title>
          </div>
        </Col>
        <Col lg={{ span: 7, offset: 1 }} md={{ span: 7, offset: 1 }}>
          <Title level={3} className={classes.service}>
            {isWebDevEnabled ? "Front end" : "Languages"}
          </Title>
          {isWebDevEnabled ? (
            <div className={classes.fontAwesome}>
              <div>
                <div className={classes.icon}>
                  <FontAwesomeIcon size="3x" icon={faAngular} />
                </div>
                <Title level={4}>Angular</Title>
              </div>
              <div>
                <div className={classes.icon}>
                  <FontAwesomeIcon size="3x" icon={faReact} />
                </div>
                <Title level={4}>React</Title>
              </div>
              <div>
                <div className={classes.icon}>
                  <FontAwesomeIcon size="3x" icon={faJs} />
                </div>
                <Title level={4}>Javascript</Title>
              </div>
              <div>
                <div className={classes.icon}>
                  <FontAwesomeIcon size="3x" icon={faHtml5} />
                </div>
                <Title level={4}>HTML</Title>
              </div>
              <div>
                <div className={classes.icon}>
                  <FontAwesomeIcon size="3x" icon={faSass} />
                </div>
                <Title level={4}>Sass</Title>
              </div>
            </div>
          ) : (
            <div className={classes.fontAwesome}>
              <div className={classes.iconDiv}>
                <div className={classes.icon}>
                  <FontAwesomeIcon size="3x" icon={faSwift} />
                </div>
                <Title level={4}>Swift</Title>
              </div>
              <div className={classes.iconDiv}>
                <div className={classes.icon}>
                  <Icon width={55} icon={kotlinIcon} />
                </div>
                <Title level={4}>Kotlin</Title>
              </div>

              <div className={classes.iconDiv}>
                <div className={classes.icon}>
                  <Icon width={55} icon={dartIcon} />
                </div>
                <Title level={4}>Dart</Title>
              </div>
              <div className={classes.iconDiv}>
                <div className={classes.icon}>
                  <FontAwesomeIcon size="3x" icon={faJava} />
                </div>
                <Title level={4}>Java</Title>
              </div>
              <div className={classes.iconDiv}>
                <div className={classes.icon}>
                  <FontAwesomeIcon size="3x" icon={faApple} />
                </div>
                <Title level={4}>Obj-C</Title>
              </div>
            </div>
          )}
        </Col>
        <Col span={3}></Col>
        {/* CUSTOM SOFTWARE DEVELOPMENT */}
        <Col span={3}></Col>
        <Col lg={{ span: 10 }} md={{ span: 10 }}>
          <div
            onClick={() => setisWebDevEnabled(false)}
            className={!isWebDevEnabled ? classes.blue : classes.stackButtons}
          >
            <Title className={classes.service}>Mobile Development Stack</Title>
            <Title level={4} className={classes.serviceParagraph}>
              Qscepter's mobile development department follows the latest tech
              trends to create and future-proof your iOS or Android application.
            </Title>
          </div>
        </Col>
        <Col lg={{ span: 7, offset: 1 }} md={{ span: 7, offset: 1 }}>
          <Title level={3} className={classes.service}>
            {isWebDevEnabled ? "Back end" : "Frameworks"}
          </Title>
          {isWebDevEnabled ? (
            <div className={classes.fontAwesome}>
              <div>
                <div className={classes.icon}>
                  <FontAwesomeIcon size="3x" icon={faNodeJs} />
                </div>
                <Title level={4}>Node JS</Title>
              </div>
              <div>
                <div className={classes.icon}>
                  <FontAwesomeIcon size="3x" icon={faPhp} />
                </div>
                <Title level={4}>PHP</Title>
              </div>
              <div>
                <div className={classes.icon}>
                  <FontAwesomeIcon size="3x" icon={faPython} />
                </div>
                <Title level={4}>Python</Title>
              </div>
              <div>
                <div className={classes.icon}>
                  <FontAwesomeIcon size="3x" icon={faJava} />
                </div>
                <Title level={4}>Java</Title>
              </div>
              <div>
                <div className={classes.icon}>
                  <FontAwesomeIcon size="3x" icon={faDocker} />
                </div>
                <Title level={4}>Docker</Title>
              </div>
            </div>
          ) : (
            <div className={classes.fontAwesome}>
              <div className={classes.iconDiv}>
                <div className={classes.icon}>
                  <FontAwesomeIcon size="3x" icon={faReact} />
                </div>
                <Title level={4}>R. Native</Title>
              </div>
              <div className={classes.iconDiv}>
                <div className={classes.icon}>
                  <Icon width={58} icon={flutterIcon} />
                </div>
                <Title level={4}>Flutter</Title>
              </div>

              <div className={classes.iconDiv}>
                <div className={classes.icon}>
                  <FontAwesomeIcon size="3x" icon={faSwift} />
                </div>
                <Title level={4}>Swift UI</Title>
              </div>
              <div className={classes.iconDiv}>
                <div className={classes.icon}>
                  <Icon width={55} icon={ionicIcon} />
                </div>
                <Title level={4}>Ionic</Title>
              </div>
              <div className={classes.iconDiv}>
                <div className={classes.icon}>
                  <Icon width={55} icon={xamarinIcon} />
                </div>
                <Title level={4}>Xamarin</Title>
              </div>
            </div>
          )}
        </Col>
        <Col span={3}></Col>
      </Row>
    </Content>
  );
};

export default TechStack;
