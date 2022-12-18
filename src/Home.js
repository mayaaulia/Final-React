import React from "react";
import Card from "./Cards";
import { useState, useEffect } from "react";
import { SimpleGrid, Select, Center} from "@chakra-ui/react";

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [select, setSelect] = useState(null);
  const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4"

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false)
    })
  }, []);
  
  if(loading){
    return <h1>Loading...</h1>
  }
  // function sortData(type) {
  //   return data.sort((a, b) => {
  //     if (type === "Name") {
  //       // return a.name.localeCompare(b.name);
  //       if (a.name > b.name) {
  //         return 1;
  //       } else {
  //         return -1;
  //       }
  //     } else if (type === "Attack"){
  //       return a.atk - b.atk;
  //     } else if (type === "Defence"){
  //       return a.def - b.def;
  //     }
  //   })
  // }

  function sortData(type) {
    // TODO: answer here
    let sortingData = [...data];
    if (type === "Name") {
      sortingData.sort((a, b) => {
        return a.name.localeCompare(b.name)
      });
    }
    else if (type === "Attack") {
      sortingData.sort((a, b) => {
        return a.atk - b.atk;
      });
    }
    else if (type === "Defence") {
      sortingData.sort((a, b) => {
        return a.def - b.def;
      });
    }
    setData(sortingData);
  }
  
  return  (
    <>
    <Center>
      <Select name="sort" onChange={(e) => {sortData(e.target.value); setSelect(e.target.value)}} size="md" m={4} w="40%" align="center">
        <option value="Name">Sort by</option>
        <option value="Attack">Attack</option>
        <option value="Defence">Defence</option>
      </Select>
      </Center>
      <Center>
        <SimpleGrid columns={4} w='70%' gap={5}>
          <Card card={data} />
        </SimpleGrid>
      </Center>
    </>
  );
}

export default Home;