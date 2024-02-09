import { Outlet, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  DownOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Dropdown, Space } from "antd";
import { getCurrentUser, isLogin } from "../../components/request/helper";
import styles from "./Layout.module.css";
const { Header, Sider, Content } = Layout;

function MainLayout() {
  // // convert string obj into json obj
  // const profile = JSON.parse(localStorage.getItem("profile"))

  const user = getCurrentUser();

  // form load
  useEffect(() => {
    // not allow to access main layout if not login
    // will redirect to login page
    if (!isLogin()) {
      window.location.href = "/login";
    }
  }, []);

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // function to link page
  const navigate = useNavigate();
  const onLinkPage = (routeName) => {
    navigate(routeName);
  };

  const onLogout = () => {
    localStorage.setItem("isLogin", null);
    window.location.href = "/login";
  };

  // Do this to don't load Main Layout that allow non login user to see the content
  // if(isLogin == null || isLogin == 'null'){
  //   return null
  // }
  if (!isLogin()) {
    return null;
  }

  return (
    <div>
      <div>
        {/* 1. Header */}
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: <UserOutlined />,
                  label: "Dashboard",
                  // link page
                  onClick: () => onLinkPage("/admin"),
                },
                {
                  key: "2",
                  icon: <VideoCameraOutlined />,
                  label: "Product",
                  onClick: () => onLinkPage("/admin/product"),
                },
                {
                  key: "3",
                  icon: <VideoCameraOutlined />,
                  label: "Employee",
                  onClick: () => onLinkPage("/admin/employee"),
                },
                {
                  key: "4",
                  icon: <VideoCameraOutlined />,
                  label: "Customer",
                  onClick: () => onLinkPage("/admin/customer"),
                }
              ]}
            />
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }}>
              <div className={styles.containHeader}>
                <div>
                  <Button
                    type="text"
                    icon={
                      collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                    }
                    // setCollapsed function make toggle possible
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                      fontSize: "16px",
                      width: 64,
                      height: 64,
                    }}
                  />
                </div>
                <div>
                  <Dropdown
                    menu={{
                      items: [
                        {
                          key: "0",
                          label: "Profile",
                        },
                        {
                          key: "1",
                          label: "Chang password",
                        },
                        {
                          key: "2",
                          label: "Setting",
                        },
                        {
                          key: "3",
                          label: "Logout",
                          danger: true,
                          onClick: onLogout,
                        },
                      ],
                    }}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        <UserOutlined />
                        {user.firstname + "-" + user.lastname} <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </div>
                {/* <Button onClick={onLogout}>Logout</Button> */}
              </div>
            </Header>
            {/* </Header> */}
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: "100vh",
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {/* 2. Display Content */}
              <div style={{ padding: 20 }}>
                <Outlet />
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
      {/* 3. Footer */}
      <div
        style={{
          backgroundColor: "pink",
          marginTop: 20,
          padding: 15,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2>Footer</h2>
      </div>
    </div>
  );
}

export default MainLayout;
