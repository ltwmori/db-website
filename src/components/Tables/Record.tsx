import React, { useState, useEffect } from "react";
import { Table, Button, Loader, Flex } from "@mantine/core";
import { getRecord, deleteRecord } from "../../requests/record";
import { IRecord } from "../../ts/types";
import { IconEdit, IconTrash } from "@tabler/icons";

const Record = () => {
  const [record, setRecord] = useState<IRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    getRecord().then((res) => {
      setRecord(res);
      setLoading(false);
    });
  }, []);

  //handle delete

  const handleDelete = (elem: string) => {
    deleteRecord(elem).then((res: any) => console.log(res));
    setTimeout(() => {
      setRecord([]);
      getRecord().then((res) => {
        setRecord(res);
      });
    }, 100);
  };

  const rows = record.map((element) => (
    <tr key={element.email}>
      <td>{element.email}</td>
      <td>{element.cname}</td>
      <td>{element.disease_code}</td>
      <td>{element.total_deaths}</td>
      <td>{element.total_patients}</td>
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
    <>
      {loading ? (
        <Flex
          mih={600}
          gap="md"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <Loader size="xl" />
        </Flex>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Country name</th>
              <th>Disease Code</th>
              <th>Total Deaths</th>
              <th>Total Patients</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      )}
    </>
  );
};

export default Record;
