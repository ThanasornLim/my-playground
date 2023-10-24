"use client";

import ProductCard from "@/components/UI/ProductCard/ProductCard";
import { Product, useCartStore } from "@/store/shop";
import { Card, Group, Badge, Button } from "@mantine/core";
import React from "react";

const products: Product[] = [
    {
        name: "Drink",
        price: 15,
    },
    {
        name: "Food",
        price: 30,
    },
    {
        name: "Materials",
        price: 200,
    },
];

const Product = () => {
    const { add } = useCartStore();
    const handleSell = (soldProduct: Product) => {
        console.log("Sell", soldProduct.name, "with", soldProduct.price);

        add(soldProduct);
    };

    return (
        <div className="flex gap-4 flex-wrap">
            {products.map((product) => {
                return (
                    <ProductCard
                        key={product.name}
                        name={product.name}
                        price={product.price}
                        onSell={handleSell}
                    />
                );
            })}
        </div>
    );
};

export default Product;
