import { HStack, Text } from "@chakra-ui/react";

interface Props {
  text: string;
}

export const ScheduleTitle = ({ text }: Props) => {
  return (
    <HStack borderBottom="solid 1px #83B833" display="inline-block" mb="16px">
      <Text color="#fff" fontSize="22px">
        {text}
      </Text>
    </HStack>
  );
};
