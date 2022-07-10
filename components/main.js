import { Box, Image, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import Links from "./links";

export default function Main() {
  return (
    <Box
      borderRadius="5"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      py={10}
      bg={useColorModeValue("gray.50", "gray.700")}
    >
      <Image
        src="/images/abylai.jpg"
        alt="Abylai Khan"
        borderRadius="full"
        w={[32, 48, 64]}
        my={6}
      />
      <Heading as="h1" mb={6}>Abylai Khan</Heading>
      <Text maxW={480} align="center">
        ~ a multi-functional discord bot, hopefully the successor of legendary
        Boribay
      </Text>
      <Links />
    </Box>
  );
}
