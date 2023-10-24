import React from "react";
import Product from "./componnets/Product";
import ShoppingCart from "./componnets/ShoppingCart";

const Shop = () => {
    return (
        <>
            <div>
                <div>Test zone</div>
                <div></div>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-8 bg-[var(--mantine-color-primary-0)]">
                    <Product />
                </div>
                <div className="col-span-4 bg-[var(--mantine-color-lime-0)]">
                    <ShoppingCart />
                </div>
            </div>
        </>
    );
};

export default Shop;
