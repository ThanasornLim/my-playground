import React from 'react';
import {
	Badge,
	Button,
	Card,
	CardSectionProps,
	Group,
	Text,
} from '@mantine/core';

import type { Product } from '@/store/shop';

interface ProductCardProps {
	sectionProps?: CardSectionProps;
	section?: React.ReactNode;
	name: string;
	price: number;
	onSell: (products: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
	onSell,
	section,
	name,
	price,
	sectionProps,
}) => {
	return (
		<Card shadow="sm" padding="lg" radius="md" maw={240} withBorder>
			{section && <Card.Section {...sectionProps}>{section}</Card.Section>}
			<Group justify="space-between" mt="md" mb="xs">
				<Text fw={500}>{name}</Text>
				<Badge color="pink" variant="light">
					{price} Baht
				</Badge>
			</Group>

			<Text size="sm" c="dimmed">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tellus
				ex, commodo non massa vitae, hendrerit lobortis nunc. Aliquam maximus.
			</Text>

			<Button
				variant="light"
				color="blue"
				onClick={() => onSell({ name, price })}
				fullWidth
				mt="md"
				radius="md"
			>
				Buy
			</Button>
		</Card>
	);
};

export default ProductCard;
