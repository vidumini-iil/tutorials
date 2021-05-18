import React, { useContext, useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const EditUser = (props) => {
  const { users, editUser } = useContext(GlobalContext);

  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });
  const history = useHistory();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userID = currentUserId;
    const selectedUSer = users.find((user) => user.id === userID);
    setSelectedUser(selectedUSer);
  }, [currentUserId, users]);

  const onSubmit = () => {
    editUser(selectedUser);
    history.push("/");
  };

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Name: </Label>
          <Input
            type="text"
            name="name"
            value={selectedUser.name}
            onChange={onChange}
            placeholder="Enter Name"
          ></Input>
        </FormGroup>
        <Button type="submit">Edit</Button>
        <Link to="/" className="btn btn-danger m-2">
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default EditUser;
