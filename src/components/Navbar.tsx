import { useState } from "react";
import { createStyles, Navbar, Group, Code, Flex, Table } from "@mantine/core";
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
  IconVaccine,
  IconGlobe,
  IconClipboardCopy,
  IconClipboardHeart,
  IconVirusSearch,
  IconUsers,
  IconBuildingCommunity,
  IconHealthRecognition,
  IconReportMedical,
  IconBuildingHospital,
  IconNurse,
} from "@tabler/icons";
import { useLocation, useNavigate } from "react-router-dom";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");

  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.fn.variant({
          variant: "light",
          color: theme.primaryColor,
        }).background,
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
        [`& .${icon}`]: {
          color: theme.fn.variant({
            variant: "light",
            color: theme.primaryColor,
          }).color,
        },
      },
    },
  };
});

const data = [
  { link: "/types", label: "Disease Types", icon: IconVaccine },
  { link: "/countries", label: "Countries", icon: IconGlobe },
  { link: "/disease", label: "Disease", icon: IconClipboardHeart },
  { link: "/discover", label: "Discover", icon: IconVirusSearch },
  { link: "/users", label: "Users", icon: IconUsers },
  { link: "/servants", label: "Public Servants", icon: IconBuildingCommunity },
  { link: "/doctors", label: "Doctors", icon: IconNurse },
  { link: "/specialize", label: "Specialize", icon: IconReportMedical },
  { link: "/record", label: "Record", icon: IconHealthRecognition },
];

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
const ths = (
  <tr>
    <th>Element position</th>
    <th>Element name</th>
    <th>Symbol</th>
    <th>Atomic mass</th>
  </tr>
);

const rows = elements.map((element) => (
  <tr key={element.name}>
    <td>{element.position}</td>
    <td>{element.name}</td>
    <td>{element.symbol}</td>
    <td>{element.mass}</td>
  </tr>
));

export function NavbarSimple() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Billing");
  const navigate = useNavigate();
  const location = useLocation();
  const links = data.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        navigate(item.link);
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Navbar height={700} width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="left">
          <img
            src={require("../assets/old.png")}
            alt="Mantine"
            width="45px"
            height="45px"
          />

          <Flex
            mih={50}
            gap="xs"
            justify="flex-start"
            align="flex-start"
            direction="column"
            wrap="wrap"
          >
            <Code sx={{ fontWeight: 700 }}>DB Assignment 2</Code>
            <Code sx={{ fontWeight: 700 }}>By Assel Abzalova</Code>
          </Flex>
        </Group>
        {links}
      </Navbar.Section>
    </Navbar>
  );
}
