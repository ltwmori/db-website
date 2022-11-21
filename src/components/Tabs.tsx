// import { Tabs } from '@mantine/core';
import { Button, Flex, Input, Tabs } from "@mantine/core";
import React, { useState } from "react";
import { postDiseaseType } from "../requests/diseasetypes";
import { postCountry } from "../requests/country";

interface IDiseaseTypeForm {
  id: number;
  description: string;
}

interface ICountryForm {
  cname: string;
  population: number;
}

const TabsUp = () => {
  // Disease Type
  const [successDT, setSuccessDT] = useState(false);
  const [errorDT, setErrorDT] = useState(false);
  const [diseaseTypeForm, setDiseaseTypeForm] = useState<IDiseaseTypeForm>({
    id: 0,
    description: "",
  });

  const handleDiseaseTypeInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setSuccessDT(false);
    setErrorDT(false);
    setDiseaseTypeForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendDiseaseType = () => {
    if (diseaseTypeForm.description.length && diseaseTypeForm.id > 0) {
      postDiseaseType(diseaseTypeForm).then((res) => {
        setSuccessDT(true);
        setErrorDT(false);
      });
    }
    else {
      setSuccessDT(false);
      setErrorDT(true);
    }
  };

  // Countries -----------------------------
  const [countryForm, setCountryForm] = useState<ICountryForm>({
    cname: "",
    population: 0,
  });

  const handleCountryInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCountryForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendCountryType = () => {
    if (countryForm.cname.length && countryForm.population > 0) {
      postCountry(countryForm).then((res) => {
        console.log(res);
      });
    }
  };

  return (
    <Tabs defaultValue="rows">
      <Tabs.List mb="20px">
        <Tabs.Tab value="types">Disease Types</Tabs.Tab>
        <Tabs.Tab value="countries">Countries</Tabs.Tab>
        <Tabs.Tab value="disease">Disease</Tabs.Tab>
        <Tabs.Tab value="discover">Discover</Tabs.Tab>
        <Tabs.Tab value="users">Users</Tabs.Tab>
        <Tabs.Tab value="servants">Public Servants</Tabs.Tab>
        <Tabs.Tab value="doctors">Doctors</Tabs.Tab>
        <Tabs.Tab value="specialize">Specialize</Tabs.Tab>
        <Tabs.Tab value="record">Record</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="types">
        <Flex gap="30px" direction="column">
          <Input.Wrapper id="input-demo" label="ID" mb="20">
            <Input
              // id="input-demo"
              placeholder="Example: 3"
              value={diseaseTypeForm.id}
              onChange={handleDiseaseTypeInputChange}
              name={"id"}
            />
          </Input.Wrapper>
          <Input.Wrapper id="input-demo" label="Description">
            <Input
              // id="input-demo"
              placeholder="Ex: All the infectious diseases"
              value={diseaseTypeForm.description}
              onChange={handleDiseaseTypeInputChange}
              name={"description"}
            />
          </Input.Wrapper>
          {!errorDT && successDT && (
            <div style={{ color: "green" }}>
              Disease type added successfully
            </div>
          )}
          {errorDT && (
            <div style={{ color: "red" }}>
              Error adding disease type, please try again
            </div>
          )}
          <Button onClick={handleSendDiseaseType}>Send</Button>
        </Flex>
      </Tabs.Panel>
      <Tabs.Panel value="countries">
        <Flex gap="30px" direction="column">
          <Input.Wrapper id="input-demo" label="Country Name" mb="20">
            <Input
              id="input-demo"
              placeholder="Ex: Kazakhstan"
              value={countryForm.cname}
              onChange={handleCountryInputChange}
              name={"cname"}
            />
          </Input.Wrapper>
          <Input.Wrapper id="input-demo" label="Population">
            <Input
              id="input-demo"
              placeholder="Ex: 22266994"
              value={countryForm.population}
              onChange={handleCountryInputChange}
              name={"population"}
            />
          </Input.Wrapper>

          <Button onClick={handleSendCountryType}>Send</Button>
        </Flex>
      </Tabs.Panel>
      <Tabs.Panel value="disease">
        <Flex gap="30px" direction="column">
          <Input.Wrapper id="input-demo" label="Disease code" mb="20">
            <Input id="input-demo" placeholder="Ex: P232X" />
          </Input.Wrapper>
          <Input.Wrapper id="input-demo" label="Pathogen">
            <Input id="input-demo" placeholder="Ex: virus" />
          </Input.Wrapper>
          <Input.Wrapper id="input-demo" label="Desription of the disease">
            <Input id="input-demo" placeholder="Ex: Covid is ..." />
          </Input.Wrapper>
          <Input.Wrapper id="input-demo" label="ID of the disease type">
            <Input id="input-demo" placeholder="Ex: 1" />
          </Input.Wrapper>
          <Button>Send</Button>
        </Flex>
      </Tabs.Panel>
      <Tabs.Panel value="discover">
        <Flex gap="30px" direction="column">
          <Input.Wrapper id="input-demo" label="Country name" mb="20">
            <Input id="input-demo" placeholder="Ex: China" />
          </Input.Wrapper>
          <Input.Wrapper id="input-demo" label="Disease code">
            <Input id="input-demo" placeholder="Ex: H380C" />
          </Input.Wrapper>
          <Input.Wrapper id="input-demo" label="Date of discovering">
            <Input id="input-demo" placeholder="yy-mm-dd" />
          </Input.Wrapper>
          <Button>Send</Button>
        </Flex>
      </Tabs.Panel>
      <Tabs.Panel value="users">
        <Flex gap="30px" direction="column">
          <Input.Wrapper id="input-demo" label="Email" mb="20">
            <Input id="input-demo" placeholder="Ex: name@example.com" />
          </Input.Wrapper>
          <Input.Wrapper id="input-demo" label="Name">
            <Input id="input-demo" placeholder="Ex: Jane" />
          </Input.Wrapper>
          <Input.Wrapper id="input-demo" label="Surname">
            <Input id="input-demo" placeholder="Ex: Street" />
          </Input.Wrapper>
          <Input.Wrapper id="input-demo" label="Salary">
            <Input id="input-demo" placeholder="Ex: 85000" />
          </Input.Wrapper>
          <Input.Wrapper id="input-demo" label="Phone">
            <Input id="input-demo" placeholder="Ex: +7 900 232 0000" />
          </Input.Wrapper>
          <Input.Wrapper id="input-demo" label="Country">
            <Input id="input-demo" placeholder="Ex: UK" />
          </Input.Wrapper>
          <Button>Send</Button>
        </Flex>
      </Tabs.Panel>
      <Tabs.Panel value="servants">
        <Flex gap="30px" direction="column">
          <Input.Wrapper id="input-demo" label="Email" mb="20">
            <Input id="input-demo" placeholder="Ex: name@example.com" />
          </Input.Wrapper>
          <Input.Wrapper id="input-demo" label="Department">
            <Input id="input-demo" placeholder="Ex: Health" />
          </Input.Wrapper>
          <Button>Send</Button>
        </Flex>
      </Tabs.Panel>
      <Tabs.Panel value="doctors">
        <Flex gap="30px" direction="column">
          <Input.Wrapper id="input-demo" label="Email" mb="20">
            <Input id="input-demo" placeholder="Ex: name@example.com" />
          </Input.Wrapper>
          <Input.Wrapper id="input-demo" label="Degree">
            <Input id="input-demo" placeholder="Ex: Osteopathics studies" />
          </Input.Wrapper>
          <Button>Send</Button>
        </Flex>
      </Tabs.Panel>
      <Tabs.Panel value="specialize">
        <Flex gap="30px" direction="column">
          <Input.Wrapper id="input-demo" label="ID" mb="20">
            <Input id="input-demo" placeholder="Ex: 1" />
          </Input.Wrapper>
          <Input.Wrapper id="input-demo" label="Email" mb="20">
            <Input id="input-demo" placeholder="Ex: name@example.com" />
          </Input.Wrapper>
          <Button>Send</Button>
        </Flex>
      </Tabs.Panel>
      <Tabs.Panel value="record">
        <Flex gap="30px" direction="column">
          <Input.Wrapper id="input-demo" label="Email" mb="20">
            <Input id="input-demo" placeholder="Ex: name@example.com" />
          </Input.Wrapper>
          <Input.Wrapper id="input-demo" label="Country Name" mb="20">
            <Input id="input-demo" placeholder="Ex: Kazakhstan" />
          </Input.Wrapper>
          <Input.Wrapper id="input-demo" label="Disease code">
            <Input id="input-demo" placeholder="Ex: H380C" />
          </Input.Wrapper>
          <Button>Send</Button>
        </Flex>
      </Tabs.Panel>
    </Tabs>
  );
};

export default TabsUp;
