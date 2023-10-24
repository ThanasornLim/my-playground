"use client";
import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import getQueryClient from "@/helpers/queryClient";

const ReactQueryProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    // const [queryClient] = useState(() => getQueryClient());
    const queryClient = getQueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default ReactQueryProvider;
