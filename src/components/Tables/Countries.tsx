import { useState, useEffect } from "react";
import { Button, Flex, Loader, Table } from "@mantine/core";
import { getCountry, deleteCountry } from "../../requests/country";
import { ICountry } from "../../ts/types";
import { IconEdit, IconTrash } from "@tabler/icons";

const Country = () => {
  const [country, setCountry] = useState<ICountry[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    getCountry().then((res) => {
      setCountry(res);
      setLoading(false);
    });
  }, []);

  const handleDelete = (elem: string) => {
    deleteCountry(elem).then((res: any) => console.log(res));
    setTimeout(() => {
      setCountry([]);
      getCountry().then((res) => {
        setCountry(res);
      });
    }, 100);
  };

  const rows = country.map((element) => (
    <tr key={element.cname}>
      <td>{element.cname}</td>
      <td>{element.population}</td>
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
              <th>Country Name</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      )}
    </>
  );
};

export default Country;
