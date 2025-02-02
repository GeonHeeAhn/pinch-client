import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { createGlobalStyle } from 'styled-components';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const Global = createGlobalStyle`
  .ant-row{
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .ant-col:first-child{
    padding-left: 0 !important;
  }
  .ant-col:last-child{
    padding-right: 0 !important;
  }
`;

const AppLayout = ({ children }) => {
  return (
    <>
      <Global />
      <Layout>
        <Header
          className="site-layout-background"
          style={{ padding: 0, height: 200, backgroundColor: 'lightgrey' }}
        />
        <Layout
          className="site-layout"
          style={{ paddingTop: 10, backgroundColor: 'white' }}
        >
          <Row style={{ border: 'none' }}>
            <Col md={1}></Col>
            <Col xs={24} md={4}>
              <Sider
                breakpoint
                width={{
                  xs: '480px',
                  sm: '576px',
                  md: '768px',
                  lg: '992px',
                  xl: '1200px',
                  xxl: '1600px',
                }}
                style={{ backgroundColor: 'white' }}
              >
                <div className="logo" />
                <Menu
                  theme="light"
                  defaultSelectedKeys={['1']}
                  mode="inline"
                  style={{
                    backgroundColor: 'white',
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                >
                  <Menu.Item
                    key="1"
                    icon="👀"
                    // icon={<PieChartOutlined />}
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      borderRadius: 10,
                    }}
                  >
                    &nbsp;Inbox
                  </Menu.Item>
                  <Menu.Item
                    key="2"
                    // icon={<DesktopOutlined />}
                    icon="📚"
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      borderRadius: 10,
                    }}
                  >
                    &nbsp;구독 중인 뉴스레터
                  </Menu.Item>
                  <Menu.Item
                    key="sub1"
                    // icon={<UserOutlined />}
                    icon="📌"
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      borderRadius: 10,
                    }}
                  >
                    &nbsp;저장한 뉴스레터
                  </Menu.Item>
                  <SubMenu
                    key="sub2"
                    icon={<TeamOutlined />}
                    title="Team"
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      borderRadius: 10,
                    }}
                  >
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                  </SubMenu>
                  <Menu.Item
                    key="9"
                    icon={<FileOutlined />}
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      borderRadius: 10,
                    }}
                  >
                    Files
                  </Menu.Item>
                </Menu>
              </Sider>
            </Col>
            <Col xs={24} md={18}>
              <Content style={{ margin: '0 16px' }}>{children}</Content>
            </Col>
            <Col md={1}></Col>
          </Row>
        </Layout>
      </Layout>
    </>
  );
};
export default AppLayout;
