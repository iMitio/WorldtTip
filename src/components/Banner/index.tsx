import { Flex, Heading, Text, Image } from "@chakra-ui/react";

export function Banner () {
    return (
        <Flex
         width="100%"
         height={["163px", "250", "250px", "335px"]}
         bgImage="url('/background.jpg')"
         bgRepeat="no-repeat"
         bgSize="cover"
         bgPosition={["100 20%", "100 20%", "100 30%"]}
        >
            <Flex
                justify={["center", "space-between"]}
                align="center"
                width="100%"
                marginX="auto"
                paddingX={["4", "10", "15", "20", "36"]}
            >
                <div>
                    <Heading
                        color="gray.100"
                        fontWeight="500"
                        fontSize={["xl", "2l", "2xl", "4xl"]}
                    >
                        5 Continentes, <br/>
                        infinitas possibilidades.
                    </Heading>
                    <Text
                        color="gray.300"
                        marginTop="5"
                        fontSize={["0.8rem", "xl"]}
                        maxWidth={["100%", "100%", "100%", "550px"]}
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
                    </Text>
                </div>
                
                <Image
                    width={["300px", "300px", "300px", "430px"]}
                    display={["none", "none", "none", "block"]}
                    src="/airplane.svg"
                    alt="plane"
                    transform="translateY(48px)"
                    marginLeft="8"
                />
            </Flex>
        </Flex>
    )
}