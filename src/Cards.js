import { Box, Image, Heading, Center} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card({ card }) {

 if(card){
   return (
     card.map((e) => (
       <Link to={`/card/${e.id}`}>
         <Box  className="yugioh-card">
             <Image src={e.card_images[0].image_url} />
             <Center>
             <Heading as="h2" size="md">{e.name}</Heading>
             </Center>
         </Box>
         </Link>
     ))
   )
 }
  
  
}

export default Card;


{/* <Link to={`Detail/${card.id}`}>
<Box bg='tomato' w='100%' p={4} color='white'>
<Image
  src={card.card_images[0].image_url}
/>
<Heading><h2>{card.name}</h2></Heading>
</Box>
</Link> */}

// TODO: replace this