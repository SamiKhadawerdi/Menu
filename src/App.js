import React, { useState } from "react";
import NavBar from "./Componant/NavBar";
import Header from "./Componant/Header";
import { Container } from "react-bootstrap";
import Category from "./Componant/Category";
import ItemList from "./Componant/ItemList";
import { items } from "./DataItem";
function App() {
  const [itemsData, setstateData] = useState(items)
  // get all cat uniqe 
  const allcategory=["الكل",...new Set(items.map((i)=>i.category))]
  // Start filter Category
  const filterbycategory = (cat) => {
    if (cat === "الكل") {
      setstateData(items)
    } else {
      const newarry = items.filter((item) => item.category === cat)
      setstateData(newarry)
    }
  }
  // End filter Category
    // Start filter Search
    const filterbysearch= (word) => {
    if (word !== "") {
        const newarry = items.filter((item) => item.title === word)
        setstateData(newarry)
      }
    }
    // End filter Search
  return (
    <div className="color-body font">
      <NavBar filterbysearch={filterbysearch}/>
      <Container>
        <Header />
        <Category filterbycategory={filterbycategory} allcategory={allcategory}/>
        <ItemList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
