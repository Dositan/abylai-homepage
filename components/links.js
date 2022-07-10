import { Box, Button, Link, List, ListItem } from "@chakra-ui/react";
import { IoLogoGithub, IoLogoDiscord } from "react-icons/io5";

export default function Links() {
  return (
    <Box>
      <List
        display={{ base: "block", sm: "flex" }}
        alignItems="center"
        flexDirection="row"
        justify="center"
        gap={4}
        mt={6}
      >
        <ListItem my={2}>
          <Link href="https://github.com/Dositan/abylai" target="_blank">
            <Button w={48} leftIcon={<IoLogoGithub />}>
              Source Code
            </Button>
          </Link>
        </ListItem>
        <ListItem my={2}>
          <Link
            href="https://discord.com/api/oauth2/authorize?client_id=995611774902616125&permissions=10737698880&scope=bot%20applications.commands"
            target="_blank"
          >
            <Button w={48} leftIcon={<IoLogoDiscord />}>
              Invite
            </Button>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}
