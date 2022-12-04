import React, { useCallback, useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Button,
  Card,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { UseCbHelper } from "./useCbHelper";

function Callback() {
  const navigate = useNavigate();

  let [more, setMore] = useState("More");

  const fetchJokes = useCallback(() => {
    const jokes1 = [
      {
        category: "Programming",
        type: "single",
        joke: "Hey Girl,\nRoses are #ff0000,\nViolets are #0000ff,\nI use hex codes,\nBut I'd use RGB for you.",
        flags: {
          nsfw: false,
          religious: false,
          political: false,
          racist: false,
          sexist: false,
          explicit: false,
        },
        id: 41,
        safe: true,
        lang: "en",
      },
      {
        category: "Programming",
        type: "single",
        joke: "There are only 10 kinds of people in this world: those who know binary and those who don't.",
        flags: {
          nsfw: false,
          religious: false,
          political: false,
          racist: false,
          sexist: false,
          explicit: false,
        },
        id: 35,
        safe: true,
        lang: "en",
      },
      {
        category: "Programming",
        type: "single",
        joke: "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
        flags: {
          nsfw: false,
          religious: false,
          political: false,
          racist: false,
          sexist: false,
          explicit: false,
        },
        id: 37,
        safe: true,
        lang: "en",
      },
      {
        category: "Programming",
        type: "single",
        joke: 'A SQL statement walks into a bar and sees two tables.\nIt approaches, and asks "may I join you?"',
        flags: {
          nsfw: false,
          religious: false,
          political: false,
          racist: false,
          sexist: false,
          explicit: false,
        },
        id: 5,
        safe: true,
        lang: "en",
      },
    ];
    const jokes2 = [
      {
        category: "Programming",
        type: "single",
        joke: "Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says \"Do you get the reference?\" But Java didn't.",
        flags: {
          nsfw: false,
          religious: false,
          political: false,
          racist: false,
          sexist: false,
          explicit: false,
        },
        id: 4,
        safe: true,
        lang: "en",
      },
      {
        category: "Programming",
        type: "single",
        joke: '"Honey, go to the store and buy some eggs."\n"OK."\n"Oh and while you\'re there, get some milk."\nHe never returned.',
        flags: {
          nsfw: false,
          religious: false,
          political: false,
          racist: false,
          sexist: false,
          explicit: false,
        },
        id: 18,
        safe: true,
        lang: "en",
      },
    ];

    return more === "More" ? jokes1 : jokes2;
  }, [more]);

  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <VStack>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Box>
            <Button
              onClick={() =>
                setMore((prevState) => (prevState === "More" ? "Less" : "More"))
              }
            >
              {more}
            </Button>
          </Box>
        </Card>

        <UseCbHelper fetchJokes={fetchJokes} />
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Summary
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              The <strong>useCallback Hook</strong> returns a memoized callback
              when passed a function and a list of dependencies as parameters.
              It's very useful when a component is passing a callback to its
              child component to prevent the rendering of the child component.
              It only changes the callback when one of its dependencies gets
              changed. <br />
              <br />
              It's syntax is: <br />
              <code>
                const functionName = useCallback(functionToMemoize,
                [dependencies]);
              </code>
              <Flex justifyContent="center" mt="10px">
                <Button onClick={() => navigate("/effect")}>
                  Let's move on
                </Button>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </Flex>
  );
}

export { Callback };
