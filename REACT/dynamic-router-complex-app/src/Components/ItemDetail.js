import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import './ItemDetail.css';

function ItemDetail() {
    const [item, setItem] = useState([]);
    const { id } = useParams();  // captureing id of each item

    // Api Call for  singular Item
    useEffect(() => {
        const fetchItem = async () => {
            const item = await fetch(
                `https://fortnite-api.theapinetwork.com/item/get?id=${id}`
            );
            const data = await item.json();
            setItem(data.data.item);
        };
        fetchItem();
    });


    // Showing list of singular Item
    return (
        <div className='item-detail'>
            {item.name && item.images.icon && (
                <div>
                    <h1>{item.name}</h1>
                    <img
                        style={{ width: "300px", height: "300px" }}
                        src={item.images.icon}
                        alt={item.description}
                    />
                    <h2>{item.description}</h2>
                </div>
            )}
        </div>
    );
}

export default ItemDetail;