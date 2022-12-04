import React from "react";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function Welcome() {
  const navigate = useNavigate();

  return (
    <div>
      <Flex
        width="100vw"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Heading>Welcome to React Hooks!</Heading>
          <Flex justifyContent="center" mt="10px">
            <Button onClick={() => navigate("/state")}>Let's Begin</Button>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}
