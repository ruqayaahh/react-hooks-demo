import React, { useState } from "react";
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
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function State() {
  const navigate = useNavigate();

  const [number, setNumber] = useState(0);
  /* useState handler Function not used. 
  let keyword is used to declare useState variables to make it possible to reassign the 'secondNumber' variable in the updateCount function directly.
  Try changing to const and observe what happens 
*/

  let [secondNumber, setSecondNumber] = useState(0);

  const updateCount = () => {
    secondNumber += 1;
    console.log(`increased secondNumber by 1: ${secondNumber}`);
    return secondNumber;
  };

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
            <Text>
              <strong>UseState Handler</strong>
            </Text>
            <h1>Updated {number} times</h1>
            {/* useState handler Function */}
            <Button
              onClick={() => {
                setNumber(number + 1);
              }}
            >
              Update Variable
            </Button>
          </Box>
        </Card>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Box>
            <Text>
              <strong>Without UseState Handler</strong>
            </Text>
            <h1>Updated {secondNumber} times</h1>
            {/* non useState handler Function */}
            <Button
              onClick={() => {
                updateCount();
              }}
            >
              Update Variable
            </Button>
          </Box>
        </Card>
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
              The <strong>useState Hook</strong> is primarily responsible for
              what is displayed on the UI for the user to see. It solves the
              problem of printing and updating correct data to the user. <br />
              <br />
              Updating variable without the handler Function provided by the{" "}
              <strong>useState Hook</strong> like with the second button will
              update the count (check the console to see that). It will,
              however, not update the user's view. 
              <br />
              <br />
              Its syntax is: <br />
              <code>
                const [variable, setVariable] = useState(initialStateOfVariable)
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

export { State };
