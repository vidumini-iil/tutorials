import React, { useContext, useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid} from "uuid";

const AddUser = () => {
  const { addUSer } = useContext(GlobalContext);
  const [name, setName] = useState(''); 
  const history = useHistory();

  const onSubmit = () => {
    const newUSer = {
      id: uuid(),
      name,
    };

    addUSer(newUSer);
    history.push("/");
  };

  const onChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Name: </Label>
          <Input type="text" name="name" value={name} onChange={onChange} placeholder="Enter Name"></Input>
        </FormGroup>
        <Button type="submit">Submit</Button>
        <Link to="/" className="btn btn-danger m-2">
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default AddUser;
