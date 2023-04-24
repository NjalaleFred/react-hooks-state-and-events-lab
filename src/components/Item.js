import React, {useState} from "react";

function Item({ name, category }) {
  const [item, setItem] = useState(false)
  const [buttonText, setButtonText] = useState(false)

  const itemClass = item ? "in-cart" : ""
  const cartText = buttonText ? "Remove From Cart" : "Add to Cart"
 
  const handleText = () => {
    setButtonText(!buttonText)
    setItem(!item)
  }

  return (

    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleText}>{cartText}</button>
    </li>
  );
}

export default Item;
