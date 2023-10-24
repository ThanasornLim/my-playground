import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";

const getQueryClient = () => new QueryClient();
// const getQueryClient = cache(() => new QueryClient());
export default getQueryClient;
