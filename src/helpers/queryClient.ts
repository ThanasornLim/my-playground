import { cache } from 'react';
import { QueryClient } from '@tanstack/react-query';

const getQueryClient = () => new QueryClient();
// const getQueryClient = cache(() => new QueryClient());
export default getQueryClient;
