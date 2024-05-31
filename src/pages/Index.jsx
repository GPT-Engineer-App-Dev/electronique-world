import { useState } from "react";
import { Input, Box, Container, Text, VStack, SimpleGrid, Image, Link } from "@chakra-ui/react";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    image: "https://via.placeholder.com/150",
    price: "$299",
  },
  {
    id: 2,
    name: "Laptop",
    image: "https://via.placeholder.com/150",
    price: "$799",
  },
  {
    id: 3,
    name: "Headphones",
    image: "https://via.placeholder.com/150",
    price: "$99",
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = sampleProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">
          Welcome to E-Shop
        </Text>
        <Text fontSize="xl" textAlign="center">
          Your one-stop shop for all your electronic needs.
        </Text>
        <Box mt={4}>
          <Input
            placeholder="Search for products..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={8}>
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={4}>
                <Text fontWeight="bold" fontSize="xl">
                  {product.name}
                </Text>
                <Text mt={2}>{product.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;