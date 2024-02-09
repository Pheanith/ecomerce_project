import { useEffect, useState } from "react";
import { request } from "../../components/request/request";
import {
  Button,
  Input,
  Space,
  Table,
  Modal,
  Form,
  Select,
  Popconfirm,
} from "antd";
import styles from "./styles.module.css";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const ACustomer = () => {
  const [form] = Form.useForm();
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState(null);
  const [textSerch, setTextSerch] = useState("");

  useEffect(() => {
    getList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getList = async () => {
    var param = "";
    if (textSerch != "") {
      param = "?textSerch=" + textSerch;
    }
    const res = await request("customer" + param, "get");
    if (res) {
      setList(res.list);
      setTotal(res.totalRecord[0].Total);
    } else {
      alert("Error");
    }
  };

  const onNewEmployee = () => {
    setVisible(true);
  };
  const onCloseModal = () => {
    setVisible(false);
    onClearForm();
    setId(null);
  };
  const onClearForm = () => {
    form.resetFields();
  };
  const onDelete = async (id) => {
    const res = await request("customer/" + id, "delete", {});
    if (res) {
      getList();
    } else {
      alert("error");
    }
  };

  const onFinish = async (values) => {
    const password = values.password; // Extract password from the form
    // can get data from form than pass to api
    if (id == null) {
        // For creating a new customer account
        const param = {
          "username": values.username,
          "tel": values.tel,
          "password": password,
        };

      const res = await request("customer", "post", param);
      if (!res.error) {
        getList();
        form.resetFields();
        onCloseModal();
      } else {
        alert(res.message);
      }
    } else {
      // eslint-disable-next-line no-redeclare
      const param = {
        "customer_id": id,
        "username": values.username,
        "tel": values.tel,
        "password": password,
      };

      const res = await request("customer", "put", param);
      if (!res.error) {
        getList();
        form.resetFields();
        onCloseModal();
      } else {
        alert(res.message);
      }
    }
  };

  const onClickEdit = (item) => {
    setId(item.customer_id);
    form.setFieldsValue({
      username: item.username,
      tel: item.tel,
    });
    setVisible(true);
  };
  const onSearch = (values) => {
    getList();
  };
  const onChangeTextSerch = (event) => {
    setTextSerch(event.target.value);
  };

  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.containFilter}>
          <div>
            <div className={styles.txtHeader}>Customer</div>
            <div>Total: {total} customer</div>
          </div>
          <Input.Search
            allowClear
            onSearch={onSearch}
            onChange={onChangeTextSerch}
          />
        </div>
        <Button onClick={onNewEmployee}>New Customer</Button>
      </div>
      <Table
        dataSource={list}
        columns={[
          {
            key: "No",
            title: "No",
            dataIndex: "customer_id",
            render: (value, item, index) => index + 1,
            // value : depend on dataIndex
            // item : doesn't care use item.firstname
            // index : number 0 - ...
          },
          {
            key: "Username",
            title: "Username",
            dataIndex: "username",
          },
          {
            key: "Tel",
            title: "Telephone",
            dataIndex: "tel",
          },
          {
            key: "Action",
            title: "Action",
            // dataIndex: "id",
            render: (value, item, index) => {
              return (
                <Space key={index}>
                  <Button onClick={() => onClickEdit(item)} type="primary">
                    Edit
                  </Button>
                  <Popconfirm
                    title="Delete"
                    description="Are you sure to delete this record?"
                    okText="Yes"
                    cancelText="No"
                    onConfirm={() => onDelete(item.customer_id)}
                  >
                    <Button type="primary" danger>
                      Delete
                    </Button>
                  </Popconfirm>
                </Space>
              );
            },
          },
        ]}
      />
      <Modal
        open={visible}
        title={id == null ? "New Customer" : "Update Customer"}
        onCancel={onCloseModal}
        footer={null}
        maskClosable={false}
        // mask={false}
      >
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            name="username"
            label="Username"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="tel"
            label="Tel"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true, // Make the password required only for new accounts
              },
            ]}
          >
            <Input type="password" />
          </Form.Item>

          <Form.Item wrapperCol={24} style={{ textAlign: "right" }}>
            <Space>
              <Button onClick={onCloseModal} htmlType="button">
                Cancel
              </Button>
              <Button onClick={onClearForm} htmlType="button">
                Clear
              </Button>
              <Button type="primary" htmlType="submit">
                {id == null ? "Save" : "Update"}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ACustomer;