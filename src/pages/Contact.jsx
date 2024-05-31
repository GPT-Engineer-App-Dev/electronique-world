import { Box, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Contact Us</Text>
        <Text>If you have any questions, feel free to reach out!</Text>
        <Link to="/">Go back to Home</Link>
      </VStack>
    </Box>
  );
};

export default Contact;