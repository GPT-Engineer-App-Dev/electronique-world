import { Box, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Products Page</Text>
        <Text>Here you will find a variety of electronics products.</Text>
        <Link to="/">Go back to Home</Link>
      </VStack>
    </Box>
  );
};

export default Products;