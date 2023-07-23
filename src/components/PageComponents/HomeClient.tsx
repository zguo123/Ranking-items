"use client";
import { fiveWebsites } from "@/lib/websites";
import {
  Box,
  Container,
  HStack,
  Heading,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

type Ranking = {
  website: string;
  rank: number;
};

export default function HomeClient() {
  // current rankings
  const [rankings, setRankings] = useState(fiveWebsites);

  const changeOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // pre condition: rankings is an array of strings and the name exists
    // in the array

    // website
    const website = e.target.name;
    // new index
    const newIndex = parseInt(e.target.value) - 1;

    // find the current index
    const currentIndex = rankings.indexOf(website);

    // extract the rankings into a variable
    const rankingsCopy = [...rankings];

    // remove the website from the rankings
    rankingsCopy.splice(currentIndex, 1);

    // insert the website into the new index
    rankingsCopy.splice(newIndex, 0, website);

    // set the rankings
    setRankings(rankingsCopy);
  };

  return (
    <Container as={Stack} spacing={4} maxW="container.xl">
      <Stack spacing={0}>
        <Heading as="h1" size="xl" mb={3}>
          Rank your favourite website.
        </Heading>
        <Text fontSize="xl">
          You are given a choice of five different websites. Please rank them
          from 1 - 5.
        </Text>
      </Stack>
      <Stack spacing={4}>
        {rankings.map((website, index) => {
          return (
            <HStack
              borderWidth={1}
              borderRadius="lg"
              p={4}
              key={`website-${index}`}
            >
              <Select
                value={(rankings.indexOf(website) + 1).toString()}
                variant="filled"
                width="auto"
                onChange={changeOrder}
                name={`${website}`}
              >
                {" "}
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Select>
              <Box>{website}</Box>
            </HStack>
          );
        })}
      </Stack>
    </Container>
  );
}
