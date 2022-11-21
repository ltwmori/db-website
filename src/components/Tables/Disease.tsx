import React, { useState, useEffect } from "react";
import { Table, Button } from "@mantine/core";
import { deleteDisease, getDisease } from "../../requests/disease";
import { IDisease } from "../../ts/types";
import { IconEdit, IconTrash } from "@tabler/icons";

const Disease = () => {
  const [dis, setDis] = useState<IDisease[]>([]);

  useEffect(() => {
    getDisease().then((res) => {
      setDis(res);
    });
  }, []);

  const handleDelete = (elem: string) => {
    deleteDisease(elem).then((res: any) => console.log(res));
    setTimeout(() => {
      setDis([]);
      getDisease().then((res) => {
        setDis(res);
      });
    }, 100);
  };


  const rows = dis.map((element) => (
    <tr key={element.disease_code}>
      <td>{element.disease_code}</td>
      <td>{element.pathogen}</td>
      <td>{element.description}</td>
      <td>{element.id}</td>
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
        onClick={() => handleDelete(element.disease_code)}
      ></Button>
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>Disease code</th>
          <th>Pathogen</th>
          <th>Description</th>
          <th>DiseaseType ID</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default Disease;
