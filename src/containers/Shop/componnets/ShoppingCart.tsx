"use client";

import Paper from "@/components/UI/Paper/Paper";
import { useCartStore } from "@/store/shop";
import { ActionIcon, Group, Text } from "@mantine/core";
import { IconShoppingCart, IconTrash } from "@tabler/icons-react";
import React from "react";

const ShoppingCart = () => {
    const { cart, products, remove } = useCartStore();

    const handleRemoveProduct = (name: string) => {
        remove(name);
    };

    return (
        <div className="flex flex-col justify-between space-y-4">
            <Paper className="flex justify-end gap-4 items-center p-4">
                <Text size="lg">{cart}</Text>
                <Text>
                    <IconShoppingCart color="gray" />
                </Text>
            </Paper>
            <div>
                <Paper className="p-5 space-y-2">
                    {products.map((p) => {
                        return (
                            <Group key={p.name} justify="space-between">
                                <Text className="flex gap-2">
                                    <ActionIcon
                                        size={"sm"}
                                        onClick={() =>
                                            handleRemoveProduct(p.name)
                                        }
                                    >
                                        <IconTrash size={14} />
                                    </ActionIcon>
                                    {p.name} x{p.amount}
                                </Text>
                                <Text>{p.price} $</Text>
                            </Group>
                        );
                    })}
                </Paper>
            </div>
            <Paper className="p-5">
                <Group justify="space-between">
                    <Text>Total</Text>
                    <Text>
                        {products.reduce(
                            (sum, p) => sum + p.price * p.amount,
                            0
                        )}{" "}
                        $
                    </Text>
                </Group>
            </Paper>
        </div>
    );
};

export default ShoppingCart;
