import React, { useState, useEffect } from "react";
import { Table, Button } from "@mantine/core";
import { getDoctor, deleteDoctor } from "../../requests/doctor";
import { IDoctor } from "../../ts/types";
import { IconEdit, IconTrash } from "@tabler/icons";

const Doctor = () => {
  const [doctor, setDoctor] = useState<IDoctor[]>([]);

  useEffect(() => {
    getDoctor().then((res) => {
      setDoctor(res);
    });
  }, []);

// handle delete

  const handleDelete = (elem: string) => {
    deleteDoctor(elem).then((res: any) => console.log(res));  
    setTimeout(() => {
      setDoctor([]);
      getDoctor().then((res) => {
        setDoctor(res);
      });
    }, 100);
  };

  const rows = doctor.map((element) => (
    <tr key={element.email}>
      <td>{element.email}</td>
      <td>{element.degree}</td>
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
          <th>Degree</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default Doctor;
