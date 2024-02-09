import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import { request } from "../../components/request/request";
const LoginPage = () => {

  const onFinish = async (values) => {
    var param = {
      "tel" : values.username,
      "password" : values.password
    }
    const res = await request("customer/login","post",param)

        // if username and password is corrected will login to MainLayout
        // how to compare data get from input with data in database
        if(res.isSuccess){
          // JSON.stringify(obj) convert json obj to string obj
          // JSON.parse(obj) convert string obj to obj json
          // use JSON. this part because localStorage does not allow store this type of data 
          
          localStorage.setItem("profile",JSON.stringify(res.profile)) // use for object json 
            // when login give it value 1 so it won't null
            localStorage.setItem("isLogin",'1')
            // link to another page with route
            window.location.href = "/"
        } else {
            message.warning(res.message)
        }
  };
  return (
    <div style={{width: 400, height: 400, padding: 25, borderRadius: 10, margin: "auto", backgroundColor: "aliceblue"}}>
      <h1 style={{fontSize: 32, fontWeight: "bold", marginTop: 10, marginBottom: 5}}>Login</h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginPage;

