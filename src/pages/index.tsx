
import { Flex, Heading } from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { Category } from '../components/Category'

import { Header } from '../components/Header'
import { Sperator } from '../components/Separeter'
import { Slider } from '../components/Slider'


export default function Home() {
  return (
      <Flex direction="column">
        <Header/>
        <Banner/>
        <Category/>

        <Sperator/>
        <Heading
          textAlign="center"
          fontWeight="500"
          marginBottom={["5", "14"]}
          fontSize={["lg", "3xl", "4xl"]}
        >
          Vamos nessa? <br/> Então escolha seu continente
        </Heading>
        <Slider/>
      </Flex>
    )
}
