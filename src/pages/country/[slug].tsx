import { Flex } from "@chakra-ui/react";
import { CountryBanner } from "../../components/CountryBanner";

import { Header } from "../../components/Header";
import {Content} from  "../../components/Content"
import { Citys } from "../../components/Citys";

export default function Country() {
    return (
        <Flex 
            direction="column"
        >
            <Header/>
            <CountryBanner/>

            <Flex
                direction="column"
                maxWidth="1160px"
                marginX="auto"
                marginBottom="10"
                paddingX="10"
            >
             <Content />
             <Citys/>

            </Flex>
        </Flex>
    )
}