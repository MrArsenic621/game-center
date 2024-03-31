import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge fontSize="14px" borderRadius="5px" paddingX={2} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
