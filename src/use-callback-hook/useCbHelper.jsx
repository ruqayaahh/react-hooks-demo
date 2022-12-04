import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

export function UseCbHelper({ fetchJokes }) {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    setJokes(fetchJokes());
    console.log(fetchJokes(), "fetchh");
  }, [fetchJokes]);

  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Heading>Jokes</Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {jokes?.map((joke, index) => {
            return (
              <Stack spacing={3} key={index}>
                <Text></Text>
                <Text>
                  <span>{index + 1}. </span>
                  {joke.joke}
                </Text>
              </Stack>
            );
          })}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
