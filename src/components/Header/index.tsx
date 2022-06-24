import { Flex, Grid, Image, Icon } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { RiArrowLeftLine} from "react-icons/ri";

export function Header() {
    const {asPath} = useRouter();
    const notHomePage = asPath !== "/"

    return (
        <Flex 
            bg="white"
            width="100%"
            as="header"
            marginX="auto" 
            px="1rem"
            height={["50px", "100px"]}
            align="center"
            justify="center"
        >  
            <Grid
             height="100%"
             marginX="auto"
             width="100%"
             maxWidth="1160px"
             alignItems="center"
             templateColumns="repeat(3, 1fr)"
             justifyContent="center"
            >

                {notHomePage && (
                    <Link href="/">
                        <a >
                            <Icon as={RiArrowLeftLine}
                                fontSize={[20, 40]}
                                justifySelf="start"
                            /> 
                        </a>
                    </Link>
                )}
                <Image 
                    width={["81px", "184px"]}
                    src="/logo.svg"
                    alt="logo"
                    justifySelf="center"
                    gridColumn="2"
                />
            </Grid>
        </Flex>
    )
}