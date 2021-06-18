import {
  chakra,
  Flex,
  Img,
  Box,
  Stack,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Header from "../components/Header/Header";

import London from "../../public/London.jpg";

export default function Home() {
  return (
    <chakra.div bgColor="Background.100">
      <Header />
      <Box m="auto" maxWidth="1184px" p="8">
        <Img h="500px" w="100%" src={London.src}></Img>
        <Flex>
          <Box pt="6" pb="6" pr="6" w="600px" as="p">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Box>
          <HStack spacing={6}>
            <Box p="1" alignContent="center">
              <Heading textAlign="center" color="orange.400">
                50
              </Heading>
              <Text fontWeight="semibold" color="gray.700">
                países
              </Text>
            </Box>

            <Box p="1" alignContent="center">
              <Heading textAlign="center" color="orange.400">
                60
              </Heading>
              <Text fontWeight="semibold" color="gray.700">
                linguas
              </Text>
            </Box>
            <Box p="1">
              <Heading textAlign="center" color="orange.400">
                27
              </Heading>
              <Text m="auto" fontWeight="semibold" color="gray.700">
                cidade+100
              </Text>
            </Box>
          </HStack>
        </Flex>
        <Box>
          <Heading p="1" pb="3">
            Cidades +100
          </Heading>
          <HStack spacing="16px">
            <Box
              maxWidth="216px"
              boxShadow="md"
              bgColor="white"
              borderRadius="md"
            >
              <Image
                alt="Londres"
                src={London.src}
                width="216px"
                height="173px"
              ></Image>

              <Box p="2">
                <Heading p="1">Londres</Heading>
                <Text p="1">Reino Unido</Text>
              </Box>
            </Box>
            <Box
              maxWidth="216px"
              boxShadow="md"
              bgColor="white"
              borderRadius="md"
            >
              <Image
                alt="Londres"
                src={London.src}
                width="216px"
                height="173px"
              ></Image>

              <Box p="2">
                <Heading p="1">Londres</Heading>
                <Text p="1">Reino Unido</Text>
              </Box>
            </Box>
          </HStack>
        </Box>
      </Box>
    </chakra.div>
  );
}
