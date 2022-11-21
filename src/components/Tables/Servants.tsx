import React, { useState, useEffect } from "react";
import { Table, Button } from "@mantine/core";
import { getServants, deleteServants } from "../../requests/servants";
import { IServants} from "../../ts/types";
import { IconEdit, IconTrash } from "@tabler/icons";


const Servants = () => {
  const [servants, setServants] = useState<IServants[]>([]);

  useEffect(() => {
    getServants().then((res) => {
      setServants(res);
    });
  }, []);

//handle delete

  const handleDelete = (elem: string) => {
    deleteServants(elem).then((res: any) => console.log(res));
    setTimeout(() => {
      setServants([]);
      getServants().then((res) => {
        setServants(res);
      });
    }, 100);
  };



  const rows = servants.map((element) => (
    <tr key={element.email}>
      <td>{element.email}</td>
      <td>{element.department}</td>
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
          <th>Department</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default Servants;
