import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface CategoriesProps {
    icons: string;
    text: string;
}

export function Categories ({icons, text}: CategoriesProps) {
    const isMobile = useBreakpointValue({
        base: false,
        sm: true
    })

    return (
        <Flex
            direction={["row", "column"]}
            align="center"
            justify="center"
        >
            {isMobile ? 
                <Image
                 src={`/icons/${icons}.svg`}
                 width="85px"
                 height="85px"
                 marginBottom="6"                
                />
              :                  
              <Text
                color="yellow.400"
                fontSize="4xl"
                marginRight="2"
              >
                •
              </Text>
            }
            <Text
                fontWeight="600"
                color="gray.700"
                fontSize={["md", "xl", "2xl"]}
            >
                {text}
            </Text>
        </Flex>
    )
}