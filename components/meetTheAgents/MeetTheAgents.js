import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { agents } from "agentsData";
import AgentsCard from "./AgentsCard";

const MeetTheAgents = () => {
  return (
    <Box
      maxW='6xl'
      mx='auto'
      py={{ base: "3rem", sm: "6rem" }}
      px={{ base: 0, sm: 4 }}>
      <Text
        px={{ base: 0, sm: 2 }}
        fontSize={{ base: "4xl", sm: "5xl" }}
        lineHeight='shorter'
        fontWeight='light'
        textAlign='center'>
        Meet Our Agents
      </Text>
      <Text
        px={{ base: 0, sm: 2 }}
        lineHeight='shorter'
        fontWeight='light'
        mb='12'
        textAlign='center'>
        The best in the industry, at your service 24/7.
      </Text>
      {/* <Flex
        flexDir={{ base: "column", md: "row" }}
        justifyContent='space-between'
        gap='1.5rem'>
        {agents.map((agent) => (
          <AgentsCard key={agent.id} {...agent} />
        ))}
      </Flex> */}
      <SimpleGrid maxW='6xl' mx='auto' columns={[1, 2, 3, 4]} gap='30px'>
        {agents.map((agent) => (
          <AgentsCard key={agent.name} {...agent} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MeetTheAgents;
