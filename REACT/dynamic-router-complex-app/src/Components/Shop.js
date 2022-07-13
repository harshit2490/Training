import React from 'react';
import './Shop.css';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Shop() {
  const [items, setItems] = useState([]);

  // Api Call for Items
  useEffect(() => {
    const fetchItems = async () => {
      const data = await fetch(
        "https://fortnite-api.theapinetwork.com/upcoming/get"
      );
      const items = await data.json();
      console.log(items.data);
      setItems(items.data);
    };
    fetchItems();
  }, []);


  // Showing list of Items
  return (
    <div className='shop'>
      <h1>Shop</h1>
      {items.map((item) =>
        <Link to={`/shop/${item.itemId}`} key={item.itemId}>
          <div className='music-item'>
            <h2>{item.item.name}</h2>
          </div>
        </Link>
      )}
    </div>
  );
}

export default Shop;