import {
  Container,
  VStack,
  Flex,
  SkeletonCircle,
  Skeleton,
  Box,
} from "@chakra-ui/react";
import Feedpost from "./Feedpost";
import { useEffect, useState } from "react";

const Feedposts = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const count = setTimeout(() => {
      setIsLoading(false);
    });
    return () => clearTimeout(count);
  }, []);
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, index) => (
          <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height={"10px"} w={"200px"} />
                <Skeleton height={"10px"} w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}></Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <Feedpost username="egghead" img="/img1.png" avatar="/img1.png" />
          <Feedpost
            username="hamburgereii"
            img="/img2.png"
            avatar="/img2.png"
          />
          <Feedpost username="zootopood" img="/img3.png" avatar="/img3.png" />
          <Feedpost username="comeshbt" img="/img4.png" avatar="/img4.png" />
        </>
      )}
    </Container>
  );
};

export default Feedposts;
