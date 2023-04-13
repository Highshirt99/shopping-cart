import React from "react";
import Button from "@material-ui/core/Button";

// types
import { CartItemType } from "../App";

// styles

import { Wrapper } from "./item.styles";

type ItemProps = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<ItemProps> = ({ item, handleAddToCart }) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div className="details">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
        <div className="rating">
          <p>Rating: {item.rating.rate}</p>
          <span>Total: {item.rating.count}</span>
        </div>
        
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>

    </Wrapper>
  );
};

export default Item;
