import React, { useEffect, useState } from "react";
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
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Effect() {
  const navigate = useNavigate();

  const [jokes, setJokes] = useState([]);
  const [category, setCategory] = useState("Programming");
  let [amount, setAmount] = useState(2);

  useEffect(() => {
    const fetchJokes = async () => {
      await fetch(
        `https://v2.jokeapi.dev/joke/${category}?type=single&amount=${amount}`
      )
        .then((res) => res.json())
        .then((data) => setJokes(data.jokes))
        .catch((err) => console.log(err));
    };
    fetchJokes();
  }, [amount, category]);

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
            <Select
              variant="unstyled"
              placeholder="Select Jokes category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="Programming">Programming</option>
              <option value="Misc">Misc</option>
              <option value="Pun">Pun</option>
              <option value="Spooky">Spooky</option>
            </Select>
          </Box>
        </Card>
        <RadioGroup onChange={setAmount} value={amount}>
          <Stack direction="row">
            <Radio value="2" colorScheme="green">
              2
            </Radio>
            <Radio value="3" colorScheme="blue">
              3
            </Radio>
            <Radio value="4" colorScheme="yellow">
              4
            </Radio>
            <Radio value="5" colorScheme="black">
              5
            </Radio>
          </Stack>
        </RadioGroup>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text>
                    <strong>Jokes</strong>
                  </Text>
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
              The <strong>useEffect Hook</strong> is primarily responsible for
              making effects on a component after it has rendered or
              <strong>mounted to the DOM.</strong> The function it accepts is
              run only when its dependencies change.
              <br />
              <br />
              Its syntax is: <br />
              <code>useEffect(callback function, [dependencies]).</code>
              If the dependency array is empty, the callback function only runs
              once, and immediately after the component renders.
              <Flex justifyContent="center" mt="10px">
                <Button onClick={() => navigate("/callback")}>
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

export { Effect };
