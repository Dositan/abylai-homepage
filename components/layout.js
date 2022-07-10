import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "./navbar";

export default function Layout({ children, name }) {
  return (
    <Box >
      <Head>
        <title>{name} | Abylai Discord Bot</title>
      </Head>
      <Navbar />
      <Container maxW="container.md" pt={100} id="background">
        {children}
      </Container>
    </Box>
  );
}
