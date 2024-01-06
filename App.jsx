import React, { useState } from "react";
import "./App.css";

const Card = ({ id, title, onClick, imageUrl }) => {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <h1 className="card-title">{title}</h1>
      <img className="card-img" src={imageUrl} alt={title} /> 
      <p className="card-description">Click to see more details</p>
    </div>
  );
};

export const App = () => {
  const [clickedCard, setClickedCard] = useState(null);

  const handleCardClick = (cardId) => {
    console.log(`Card ${cardId} clicked!`);
    setClickedCard(cardId);
  };

  return (
    <div className="container">
      <div>
        {!clickedCard ? (
          <>
            <Card
              id={1}
              title="Card 1"
              onClick={handleCardClick}
              imageUrl="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-2.jpg" // 
            />
            <Card
              id={2}
              title="Card 2"
              onClick={handleCardClick}
              imageUrl="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-2.jpg" // 
            />
          </>
        ) : (
          <div className="card-details">
            <h1>Card {clickedCard} Details</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit modi inventore nisi accusantium magnam, incidunt corporis fuga autem atque, minima, quia nulla iusto esse totam nesciunt. Officiis quisquam ratione laboriosam. {clickedCard}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
