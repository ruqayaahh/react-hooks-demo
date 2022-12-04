import React from "react";
import { Flex, Heading, VStack } from "@chakra-ui/react";

function Context() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <VStack>
        <Heading>useContext Loading</Heading>
      </VStack>
    </Flex>
  );
}

export { Context };
