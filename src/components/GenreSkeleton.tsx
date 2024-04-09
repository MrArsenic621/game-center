import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <HStack>
      <Skeleton boxSize="32px" borderRadius={8} />
      <SkeletonText width="100px" fontSize="lg" noOfLines={1} />
    </HStack>
  );
};

export default GenreSkeleton;
