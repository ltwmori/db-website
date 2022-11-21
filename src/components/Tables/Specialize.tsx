import React, { useState, useEffect } from "react";
import { Table, Button } from "@mantine/core";
import { getSpecialize, deleteSpecialize } from "../../requests/specialize";
import { ISpezialize } from "../../ts/types";
import { IconEdit, IconTrash } from "@tabler/icons";

const Specialize = () => {
  const [specialize, setSpecialize] = useState<ISpezialize[]>([]);

  useEffect(() => {
    getSpecialize().then((res) => {
      setSpecialize(res);
    });
  }, []);

//handle delete

  const handleDelete = (elem: number) => {
    deleteSpecialize(elem).then((res: any) => console.log(res));
    setTimeout(() => {
      setSpecialize([]);
      getSpecialize().then((res) => {
        setSpecialize(res);
      });
    }, 100);
  };


  const rows = specialize.map((element) => (
    <tr key={element.email}>
      <td>{element.id}</td>
      <td>{element.email}</td>
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
        onClick={() => handleDelete(element.id)}
      ></Button>
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>ID of the disease type</th>
          <th>Email of the doctor</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default Specialize;
