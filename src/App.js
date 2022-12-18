import {Routes, Route} from "react-router-dom"
import {Box, Center, Heading} from "@chakra-ui/react"
import Home from "./Home"
import Card from "./Cards"
import Detail from "./Detail"


const MyRouter = () => {
  return <div>404 Page not found!</div>;}
                                 
const App = () => {
  return (
    <div className="App">
      {/* Navbar */}
      <Box w="100vw" bg="#b25819" p={6}>
        <Center>
          <Heading as="h1" color="#e2ded5">
            Yugi-Oh Card Deck
          </Heading>
        </Center>
      </Box>

      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/card">
          <Route index element={<Card />} />
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="*" element={<MyRouter />} />
      </Routes>
    </div>
  );
};

export default App;
