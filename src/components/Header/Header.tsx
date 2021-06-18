import Image from "next/image";
import { Box } from "@chakra-ui/react";

import HeaderLogo from "../../../public/Header.png";

export default function Header() {
  return (
    <Box m="auto" width="1440px" as="header" h="100px">
      <Image width="1440px" height="100px" alt="Logo" src={HeaderLogo.src} />
    </Box>
  );
}
