import { Grid, GridItem } from "@chakra-ui/react";
import { Categories } from "./Categories";

export function Category () {
    return (
        <Grid
            templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
            width="100%"
            justifyContent="space-between"
            textAlign="center"
            marginTop={["10", "32"]}
            marginX="auto"
            maxWidth="1160px"
            gap={[1, 5]}
        >
            <GridItem>
                <Categories icons="cocktail" text="vida noturna"/>
            </GridItem>
            <GridItem>
                <Categories icons="surf" text="praia"/>
            </GridItem>
            <GridItem>
                <Categories icons="building" text="moderno"/>
            </GridItem>
            <GridItem>
                <Categories icons="museum"  text="clássico"/>
            </GridItem>
            <GridItem
                colSpan={[2, 2, 2, 1]}
            >
                <Categories icons="earth" text="e mais"/>
            </GridItem>
        </Grid>
    )
}