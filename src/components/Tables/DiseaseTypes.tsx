import React, { useState, useEffect } from "react";
import { Button, Flex, Input, Loader, Table } from "@mantine/core";
import { getDiseaseType, deleteDiseaseType } from "../../requests/diseasetypes";
import { IDiseaseType } from "../../ts/types";
import { IconTrash, IconEdit, IconCheck } from "@tabler/icons";

const DiseaseTypes = () => {
  const [diseaseType, setDiseaseTypes] = useState<IDiseaseType[]>([]);
  // state for loading
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);

    getDiseaseType().then((res) => {
      setDiseaseTypes(res);
      setLoading(false);
    });
  }, []);

  //handle delete

  const handleDelete = (elem: number) => {
    deleteDiseaseType(elem).then((res: any) => console.log(res));
    setTimeout(() => {
      setDiseaseTypes([]);
      getDiseaseType().then((res) => {
        setDiseaseTypes(res);
      });
    }, 100);
  };
  const [isEdit, setIsEdit] = useState(true);

  const editClickHandler = () => {
    setIsEdit((current) => !current);
  };
  const [formValue, setFormValue] = useState("");
  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue(e.target.value);
  };

  const rows = diseaseType.map((element) => (
    <tr key={element.id}>
      <td>{element.id}</td>
      {isEdit ? (
        <td>{element.description}</td>
      ) : (
        <td>
          {" "}
          <Input
            id="input-demo"
            placeholder="Description"
            value={formValue}
            onChange={handleFormInputChange}
          />
        </td>
      )}

      {isEdit ? (
        <>
          <Button
            component="a"
            href="#"
            variant="subtle"
            leftIcon={<IconEdit size={14} />}
            onClick={() => editClickHandler()}
          ></Button>
          <Button
            component="a"
            href="#"
            variant="subtle"
            leftIcon={<IconTrash size={14} />}
            onClick={() => handleDelete(element.id)}
          ></Button>
        </>
      ) : (
        <>
          <Button
            component="a"
            href="#"
            variant="subtle"
            leftIcon={<IconCheck size={14} />}
            onClick={() => editClickHandler()}
          ></Button>
        </>
      )}
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
              <th>ID of the disease type</th>
              <th>Description of the disease type</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      )}
    </>
  );
};

export default DiseaseTypes;
