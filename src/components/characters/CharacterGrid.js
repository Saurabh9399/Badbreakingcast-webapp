import React from "react";
import Spinner from "../ui/Spinner";
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ items, isLoading }) => {
  return (
     isLoading ? (<h1><Spinner/></h1>) : (<section className="cards">{
         items.map(item =>(
            <CharacterItem key={items.char_id} item={item}></CharacterItem>
         ))}</section>)
  );
};

export default CharacterGrid;
