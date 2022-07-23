import {
  Box,
  Heading,
  Image,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import commands from "../data/commands.json";

export default function Commands() {
  const commandBg = useColorModeValue("gray.300", "gray.800");
  return (
    <Layout name="Commands">
      <Section delay={0.1}>
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
            alt="Usage Example"
            borderRadius="full"
            w={[32, 48, 64]}
            my={6}
          />
          <Heading textAlign="center" as="h1" mb={6}>
            Abylai Commands
          </Heading>
          <List>
            {commands &&
              commands.map((command) => (
                <ListItem key={command.name} display="flex" mb={2}>
                  <Box bg={commandBg} borderRadius="5" px={2} mx={1}>
                    /{command.name}
                  </Box>
                  {command.description}
                </ListItem>
              ))}
          </List>
        </Box>
      </Section>
    </Layout>
  );
}
