import React from 'react';
import { Card, CardProps } from '@mantine/core';

const MantineCard: React.FC<CardProps> = ({ children, ...props }) => {
	return <Card {...props}>{children}</Card>;
};

export default MantineCard;
