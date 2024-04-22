"use client"
import React from 'react';

const CartItem = ({ item }) => {
    return (
        <li className="flex justify-between p-4 border-b">
            <p className="text-lg font-semibold">{item.title}</p>
            <p className="text-lg font-semibold">{item.quantity}</p>
            <p className="text-lg">{`$${item.price}`}</p>
        </li>
    );
};

export default CartItem;
