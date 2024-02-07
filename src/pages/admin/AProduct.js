import { useEffect, useState } from "react";
import {
  Table,
  Button,
  Stack,
  Modal,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import { request } from "../../components/request/request";
import { Config } from "../../components/request/helper";

const AProduct = () => {
  const [visible, setVisible] = useState(false);
  const [list, setList] = useState([]);

  const [Id, setId] = useState("");
  const [Name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [Price, setPrice] = useState("");
  const [Year, setYear] = useState("");
  const [Image, setImage] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");

  useEffect(() => {
    getList();
  }, []);

  // create this function to call data from api
  // get list
  const getList = async () => {
    const res = await request("product", "get", {});
    if (res) {
      setList(res.product);
    }
  };

  const onCloseModal = () => {
    setVisible(false);
    setId("");
    setName("");
    setCategory("");
    setPrice("");
    setYear("");
    setImage("");
  };

  const onOpenModal = () => {
    setVisible(true);
  };

  // const onSave = async (item) => {
  //     if(Id === ""){
  //         // create
  //         // var data = {
  //         //     name : Name,
  //         //     category : Category,
  //         //     price : Price,
  //         //     year : Year
  //         // }
  //         var formData = new FormData()
  //         formData.append("name", Name);
  //         formData.append("category", Category);
  //         formData.append("price", Price);
  //         formData.append("year", Year);
  //         formData.append("img_product", Image);
  //         const res = await request("product","post",formData)
  //         onCloseModal()
  //         if(res){
  //             getList(); //  recall function list
  //         } else {
  //             alert("error")
  //         }
  //     } else {
  //         // update
  //         // eslint-disable-next-line no-redeclare
  //         var data = {
  //             id : Id,
  //             name : Name,
  //             category : Category,
  //             price : Price,
  //             year : Year
  //         }
  //         const res = request("product","put",data)
  //         onCloseModal()
  //         if(res){
  //             getList(); // recall function
  //         } else {
  //             alert("Error")
  //         }

  //     }
  // }

  const onSave = async (item) => {
    if (Id === "") {
      // create
      var formData = new FormData();
      formData.append("name", Name);
      formData.append("category", Category);
      formData.append("price", Price);
      formData.append("year", Year);
      formData.append("img_product", Image); // No need for Image.filename here

      try {
        const res = await request("product", "post", formData);
        onCloseModal();

        if (res) {
          getList(); // recall function list
        } else {
          alert("Error uploading product");
        }
      } catch (error) {
        console.error("Error uploading product:", error);
        alert("Error uploading product");
      }
    } else {
      // update
      var data = {
        id: Id,
        name: Name,
        category: Category,
        price: Price,
        year: Year,
      };

      try {
        const res = await request("product", "put", data);
        onCloseModal();

        if (res) {
          getList(); // recall function
        } else {
          alert("Error updating product");
        }
      } catch (error) {
        console.error("Error updating product:", error);
        alert("Error updating product");
      }
    }
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const onChangeYear = (event) => {
    setYear(event.target.value);
  };

  const OnClickDelete = async (id) => {
    const res = await request("product/" + id, "delete", {});
    if (res) {
      getList();
    } else {
      alert("error");
    }
  };

  const OnClickEdit = (item) => {
    setId(item.id);
    setName(item.name);
    setCategory(item.category);
    setPrice(item.price);
    setYear(item.year);
    setVisible(true); // just open
  };
  const onChangeFile = (event) => {
    // receive as array
    var file = event.target.files[0];
    // store obj file in our state
    setImage(file);
    setSelectedFileName(file.name);
  };

  return (
    <div>
      <div style={{ background: "red" }}>
        <div>{Name}</div>
        <div>{Category}</div>
        <div>{Price}</div>
        <div>{Year}</div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-between", padding: 5 }}
      >
        <div>ProductPage</div>
        <Button onClick={onOpenModal}>New Product</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Year</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{"$"+item.price}</td>
              <td>{item.year}</td>
              <td>
                <img
                  src={Config.image_Path + item.img}
                  width={100}
                  height={100}
                  alt=""
                />
              </td>
              <td style={{ width: 100 }}>
                <Stack gap={1} direction="horizontal">
                  <Button onClick={() => OnClickEdit(item)}>Edit</Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => OnClickDelete(item.id)}
                  >
                    Delete
                  </Button>
                </Stack>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={visible}>
        <Modal.Header>
          <Modal.Title>{Id === "" ? "New" : "Update"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="name" label="Product name" className="mb-3">
            <Form.Control
              onChange={onChangeName}
              value={Name}
              type="text"
              placeholder="name"
            />
          </FloatingLabel>
          <FloatingLabel controlId="category" label="Category" className="mb-3">
            <Form.Control
              onChange={onChangeCategory}
              value={Category}
              type="text"
              placeholder="category"
            />
          </FloatingLabel>
          <FloatingLabel controlId="price" label="Price" className="mb-3">
            <Form.Control
              onChange={onChangePrice}
              value={Price}
              type="number"
              placeholder="price"
            />
          </FloatingLabel>
          <FloatingLabel controlId="year" label="Year" className="mb-3">
            <Form.Control
              onChange={onChangeYear}
              value={Year}
              type="text"
              placeholder="year"
            />
          </FloatingLabel>
          <FloatingLabel controlId="img">
            <Form.Control
              style={{ height: 60 }}
              onChange={onChangeFile}
              type="file"
              placeholder="Select image"
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onCloseModal} variant="secondary">
            Cancel
          </Button>
          <Button onClick={onSave} variant="primary">
            {Id === "" ? "Save" : "Update"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AProduct;
