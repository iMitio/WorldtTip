import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export  function City() {
    return (
        <Box 
            borderRadius="4px"
            overflow="hidden"
        >
            <Image  
                src="/city/londres.svg"
                height="170px"
                width="100%"
            />
            <Flex
             padding="6"
             justify="space-between"
             bg="white"
             border="1"
             borderColor="yellow.300"
             borderTop="0"
            >
                <Flex
                    direction="column"
                >
                    <Heading
                        fontSize="xl"
                        fontWeight="500"
                    >
                        Londres
                    </Heading>
                    <Text
                        color="gray.500"
                        fontSize="md"
                        fontWeight="500"
                    >
                        Reino Unido
                    </Text>
                </Flex>
                <Image 
                    src="/flags/uk.svg"
                    width="30px"
                    height="30px"
                    borderRadius="50%"
                    objectFit="cover"
                />
            </Flex>
        </Box>
    )
}