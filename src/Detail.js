import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Container,
  HStack,
  VStack,
  Button,
  Image,
  SimpleGrid,
  Center
} from "@chakra-ui/react";

function Detail() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const parameter = useParams()
  const id = parameter.id;

  useEffect(() => {
    setLoading(true);
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data[0])
        console.log(json.data[0])
      })
      .finally(() => {
        setLoading(false)
    })
  }, []);

  if(loading){
    return <h1>Loading...</h1>
  }

  return (
    <Box>
      <Link to="/">
        <Button margin={'2'}>Back</Button>
      </Link>
      {data && (
            <>
            <Container>
            <HStack >
              <Image
                w="200px"
                alt="yugioh-card"
                src={data.card_images[0].image_url}
              />
              <VStack alignItems={"flex-start"}>
                <Heading as={"h2"} size={"lg"}>
                  {data.name}
                </Heading>
                <Text className="test-text" fontWeight="Bold">
                  Level: {data.level}
                </Text>
                <Text className="test-text" fontWeight="Bold">
                  {data.attribute}
                </Text>
                <Text className="test-text" fontWeight="Bold">
                  ATK/{data.atk} DEF/{data.def}
                </Text>
                <Text className="test-text">
                  {`[ ${data.type} / ${data.race} ]`}
                </Text>
                <Text className="test-text">Description: {data.desc}</Text>
              </VStack>
            </HStack>

            </Container>
      
            <Heading margin={'2'} alignItems={'center'} as="h2" size="md">
              Card Set
            </Heading>

      
      <SimpleGrid marginTop={'5'} columns={[2, null, 3]} spacingX='40px' spacingY='20px'>
              {data.card_sets.map((e) => {
                return (
                  <Box margin={'2'} border={"1px solid black"}>
                    <Text>Name: {e.set_name}</Text>
                    <Text>Code: {e.set_code}</Text>
                    <Text>Rarity: {e.set_rarity}</Text>
                    <Text>Price: {e.set_price}</Text>
                  </Box>
                );
              })}
      </SimpleGrid>
     
            
          </>
      )}
    </Box>
  );
}



export default Detail;