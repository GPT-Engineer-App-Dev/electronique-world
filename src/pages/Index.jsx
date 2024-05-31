import { useState } from "react";
import { Input, Box, Container, Text, VStack, SimpleGrid, Image, Link, Select, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    category: "Electronics",
    image: "https://via.placeholder.com/150",
    price: 299,
  },
  {
    id: 2,
    name: "Laptop",
    category: "Electronics",
    image: "https://via.placeholder.com/150",
    price: 799,
  },
  {
    id: 3,
    name: "Headphones",
    category: "Accessories",
    image: "https://via.placeholder.com/150",
    price: 99,
  },
  {
    id: 4,
    name: "Smartwatch",
    category: "Accessories",
    image: "https://via.placeholder.com/150",
    price: 199,
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const filteredProducts = sampleProducts.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === "" || product.category === category) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
    );
  });
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
        <Box mt={4}>
          <Select placeholder="Select category" value={category} onChange={handleCategoryChange}>
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
          </Select>
        </Box>
        <Box mt={4}>
          <Text>Price Range: ${priceRange[0]} - ${priceRange[1]}</Text>
          <Slider
            aria-label="price-range-slider"
            defaultValue={[0, 1000]}
            min={0}
            max={1000}
            step={10}
            onChange={handlePriceChange}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={6} index={0} />
            <SliderThumb boxSize={6} index={1} />
          </Slider>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={8}>
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={4}>
                <Text fontWeight="bold" fontSize="xl">
                  {product.name}
                </Text>
                <Text mt={2}>${product.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;