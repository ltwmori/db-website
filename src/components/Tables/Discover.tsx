import React, { useState, useEffect } from "react";
import { Button, Table } from "@mantine/core";
import { deleteDiscover, getDiscover } from "../../requests/discover";
import { IDiscover } from "../../ts/types";
import { IconEdit, IconTrash } from "@tabler/icons";

const Discover = () => {
  const [discover, setDiscover] = useState<IDiscover[]>([]);


  
  useEffect(() => {
    getDiscover().then((res) => {
      setDiscover(res);
    });
  }, []);

  const handleDelete = (elem: string) => {
    deleteDiscover(elem).then((res: any) => console.log(res));
    setTimeout(() => {
      setDiscover([]);
      getDiscover().then((res) => {
        setDiscover(res);
      });
    }, 100);
  };


  const rows = discover.map((element) => (
    <tr key={element.cname}>
      <td>{element.cname}</td>
      <td>{element.disease_code}</td>
      <td>{element.first_enc_date}</td>
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
        onClick={() => handleDelete(element.cname)}
      ></Button>
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>Country</th>
          <th>Disease Code</th>
          <th>Date of discovering</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default Discover;
