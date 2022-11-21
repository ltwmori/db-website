import {
  AppShell,
  Header,
  Flex,
  Input,
  Title,
  Group,
  Button,
  Modal,
} from "@mantine/core";
import { IconDatabase, IconSearch } from "@tabler/icons";
import { NavbarSimple } from "../components/Navbar";
import DiseaseTypes from "../components/Tables/DiseaseTypes";
import { useLocation } from "react-router-dom";
import Users from "../components/Tables/Users";
import Discover from "../components/Tables/Discover";
import Countries from "../components/Tables/Countries";
import Disease from "../components/Tables/Disease";
import Servants from "../components/Tables/Servants";
import Doctors from "../components/Tables/Doctors";
import Specialize from "../components/Tables/Specialize";
import Record from "../components/Tables/Record";
import { useState } from "react";
import TabsUp from "../components/Tabs";

interface Element {
  position: number;
  name: string;
  symbol: string;
  mass: number;
}

const elements: Element[] = [
  { position: 1, name: "Hydrogen", symbol: "H", mass: 1.0079 },
  { position: 2, name: "Helium", symbol: "He", mass: 4.0026 },
  { position: 3, name: "Lithium", symbol: "Li", mass: 6.941 },
  { position: 4, name: "Beryllium", symbol: "Be", mass: 9.0122 },
  { position: 5, name: "Boron", symbol: "B", mass: 10.811 },
  { position: 6, name: "Carbon", symbol: "C", mass: 12.0107 },
];

interface SplittingProps {
  slug: string;
}

const ProjectIntros = ({ slug }: SplittingProps) => {
  switch (slug) {
    case "types":
      return <DiseaseTypes />;
    case "users":
      return <Users />;
    case "discover":
      return <Discover />;
    case "countries":
      return <Countries />;
    case "disease":
      return <Disease />;
    case "servants":
      return <Servants />;
    case "doctors":
      return <Doctors />;
    case "specialize":
      return <Specialize />;
    case "record":
      return <Record />;
    default:
      return <DiseaseTypes />;
  }
};

const Main = () => {
  const location = useLocation();

  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      padding="md"
      navbar={<NavbarSimple />}
      header={<Header height={0}>{/* Header content */}</Header>}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.white,
        },
      })}
    >
      <Flex mih={50} gap="xl" direction="column" wrap="wrap">
        <Group align="center" position="apart">
          <Title order={3} transform="uppercase" color="dimmed">
            {location.pathname.split("/")[1]}
          </Title>
          <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Creating new rows for table"
        size="80%"
      >
        <TabsUp/>
      </Modal>
          <Button leftIcon={<IconDatabase />} variant="light" onClick={() => setOpened(true)} >
            Create a new row
          </Button>
        </Group>
        <Input icon={<IconSearch />} placeholder="Search " size="md" />
        <ProjectIntros slug={location.pathname.split("/")[1]} />
      </Flex>
    </AppShell>
  );
};
export default Main;
