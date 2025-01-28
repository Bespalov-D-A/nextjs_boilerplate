"use server";
import {MantineProvider} from "@mantine/core";
import {ReactNode} from "react";
import {initTheme} from "../lib/theme/initTheme";
import "@mantine/core/styles.layer.css";
import "@mantine/carousel/styles.layer.css";
import "@mantine/dates/styles.layer.css";
import "modern-normalize/modern-normalize.css";

interface Props {
  children: ReactNode;
}

export const App = ({children}: Props) => {
  return <MantineProvider theme={initTheme()}>{children}</MantineProvider>;
};
