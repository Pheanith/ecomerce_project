import { useEffect, useState } from "react";
import { request } from "../../components/request/request";
import {
  Button,
  Input,
  Space,
  Table,
  Tag,
  Modal,
  Form,
  Select,
  Popconfirm
} from "antd";
import { Config, formatDateClient, formatDateServer } from "../../components/request/helper";
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
// const tailLayout = {
//   wrapperCol: {
//     offset: 8,
//     span: 16,
//   },
// };

const AEmployeePage = () => {
  const [form] = Form.useForm();
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [visible, setVisible] = useState(false);
  const [id,setId] = useState(null)
  const [textSerch, setTextSerch] = useState("") 
  const [image ,setImage] = useState(null)

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    var param = ""
    if (textSerch != ""){
      param = "?textSerch="+textSerch
    }
    const res = await request("employee"+param, "get");
    if (res) {
      setList(res.list);
      setTotal(res.totalRecord[0].Total)
    } else {
      alert("Error");
    }
  };

  const onNewEmployee = () => {
    setVisible(true);
  };
  const onCloseModal = () => {
    setVisible(false);
    onClearForm()
    setId(null)
  };
  const onClearForm = () => {
    form.resetFields();
  }
  const onDelete = async (id) => {
    const res = await request("employee/"+id,"delete",{})
    if(res){
        getList();
    } else {
        alert("error");
    }
}

  const onFinish = async (values) => {
    // can get data from form than pass to api
    if (id == null){
    // allow set image
    var formData = new FormData();
    formData.append("firstname",values.firstname)
    formData.append("lastname",values.lastname)
    formData.append("gender",values.gender)
    formData.append("dob",values.dob)
    formData.append("tel",values.tel)
    formData.append("email",values.email)
    formData.append("role",values.role)
    formData.append("address",values.address)
    formData.append("img_emp",image,image.filename)


    const res = await request("employee","post",formData);
    if(!res.error){
      getList()
      form.resetFields()
      onCloseModal()
    } else {
      alert(res.message)
    }
    } else {
      // eslint-disable-next-line no-redeclare
      var param = {
        "employee_id" : id,
        "firstname": values.firstname,
        "lastname": values.lastname,
        "gender": values.gender,
        "dob": values.dob,
        "tel": values.tel,
        "email": values.email,
        "role": values.role,
        "address": values.address,
    }
    // eslint-disable-next-line no-redeclare
    // var formData = new FormData()
    // formData.append("employee_id", id)
    // formData.append("firstname",values.firstname)
    // formData.append("lastname",values.lastname)
    // formData.append("gender",values.gender)
    // formData.append("dob",values.dob)
    // formData.append("tel",values.tel)
    // formData.append("email",values.email)
    // formData.append("role",values.role)
    // formData.append("address",values.address)
    // formData.append("img_emp",image,image.filename)

    const res = await request("employee","put",param);
    if(!res.error){
      getList()
      form.resetFields()
      onCloseModal()
    } else {
      alert(res.message)
    }
    }
    
  };
  
  const onClickEdit = (item) => {
    setId(item.employee_id)
    form.setFieldsValue({
      firstname: item.firstname,
      lastname: item.lastname,
      gender: item.gender.toString(), // Convert to string to match the Select options
      dob: formatDateServer(item.dob), // Assuming 'dob' is a date string
      tel: item.tel,
      email: item.email,
      role: item.role,
      address: item.address,
    });
    setVisible(true);
  };
  const onSearch = (values) => {
    getList()
  }
  const onChangeTextSerch = (event) => {
    setTextSerch(event.target.value)
  }

  const onChangeFile = (event) => {
    // receive as array
    var file = event.target.files[0]
    // store obj file in our state
    setImage(file)
    
  }

  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.containFilter}>
          <div>
          <div className={styles.txtHeader}>Employee</div>
          <div>Total: {total} emp</div>
          </div>
          <Input.Search allowClear onSearch={onSearch} onChange={onChangeTextSerch}/>
        </div>
        <Button onClick={onNewEmployee}>New Employee</Button>
      </div>
      <Table
        dataSource={list}
        columns={[
          {
            key: "No",
            title: "No",
            dataIndex: "employee_id",
            render: (value, item, index) => index + 1,
            // value : depend on dataIndex
            // item : doesn't care use item.firstname
            // index : number 0 - ...
          },
          {
            key: "Firstname",
            title: "Firstname",
            dataIndex: "firstname",
          },
          {
            key: "Lastname",
            title: "Lastname",
            dataIndex: "lastname",
          },
          {
            key: "Gender",
            title: "Gender",
            dataIndex: "gender",
            render: (value, item, index) => (value === 1 ? "Male" : "Female"),
          },
          {
            key: "Dob",
            title: "Date of Birth",
            dataIndex: "dob",
            render: (value, item, index) => formatDateClient(value),
          },
          {
            key: "Tel",
            title: "Telephone",
            dataIndex: "tel",
          },
          {
            key: "Image",
            title: "Image",
            dataIndex: "img",
            render: (value,rows,index) => {
              return(
                <img
                  src = {Config.image_Path+value}
                  width={100}
                  height={100}
              />
              )
              
            }
          },
          {
            key: "Email",
            title: "Email",
            dataIndex: "email",
          },
          {
            key: "Role",
            title: "Role",
            dataIndex: "role",
            render: (value, item, index) => <Tag color="blue">{value}</Tag>,
          },
          {
            key: "Address",
            title: "Address",
            dataIndex: "address",
          },
          {
            key: "Action",
            title: "Action",
            // dataIndex: "id",
            render: (value, item, index) => {
              return (
                <Space key={index}>
                  <Button onClick={()=>onClickEdit(item)} type="primary">Edit</Button>
                  <Popconfirm 
                  title="Delete"
                  description="Are you sure to delete this record?"
                  okText="Yes"
                  cancelText="No"
                  onConfirm={()=>onDelete(item.employee_id)}
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
        title={id == null ? "New Employee" : "Update Employee"}
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
            name="firstname"
            label="Firstname"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="lastname"
            label="Lastname"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Please select gender"
              allowClear={true}
              onChange={() => {}}
            >
              <Option value={"1"}>Male</Option>
              <Option value={"0"}>Female</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="dob"
            label="Date Of Birth"
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
          name="email" 
          label="Email">
            <Input />
          </Form.Item>

          <Form.Item
            name="role"
            label="Role"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
          label="Select picture"
          >
            <input 
              type="file"
              onChange={onChangeFile} />
          </Form.Item>

          <Form.Item wrapperCol={24} style={{textAlign:"right"}}>
            <Space >
              <Button onClick={onCloseModal} htmlType="button">Cancel</Button>
              <Button onClick={onClearForm} htmlType="button">Clear</Button>
              <Button type="primary" htmlType="submit">{id == null ? "Save" : "Update"}</Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AEmployeePage;
