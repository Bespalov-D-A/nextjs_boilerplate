"use server";
import {FC, ReactNode} from "react";
import {Fonts} from "@root/ui/Fonts";
import {App} from "@root/ui/App";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = async ({children}) => {
  return (
    <html>
      <body>
        <App>{children}</App>
        <Fonts />
      </body>
    </html>
  );
};

export default RootLayout;
