import React, { useState, useEffect } from "react";
import { Button, Table, Text } from "@mantine/core";
import { getUsers, deleteUser } from "../../requests/users";
import { IUser } from "../../ts/types";
import { Link } from "react-router-dom";
import { IconEdit, IconExternalLink, IconTrash } from "@tabler/icons";

const Users = () => {
  // delete user function
  

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res);
    });
  }, []);


  const handleDelete = (elem: string) => {
    deleteUser(elem).then((res: any) => console.log(res));
    setTimeout(() => {
      setUsers([]);
      getUsers().then((res) => {
        setUsers(res);
      });
    }, 100);
  };


  const rows = users.map((element) => (
    <tr key={element.email}>
      <td>{element.email}</td>
      <td>{element.name}</td>
      <td>{element.surname}</td>
      <td>{element.salary}</td>
      <td>{element.phone}</td>
      <td>{element.cname}</td>

      <Button
        component="a"
        href="#"
        variant="subtle"
        leftIcon={<IconEdit size={14} />}
      ></Button>
      <Button
        component="a"
        href="#"
        variant="subtle"
        leftIcon={<IconTrash size={14} />}
        onClick={() => handleDelete(element.email)}
      ></Button>
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>Email</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Salary</th>
          <th>Phone</th>
          <th>Country Name</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default Users;
