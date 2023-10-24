import { create } from "zustand";

type HttpResponse = {
    status: number;
    message: string;
    setError: (error: any) => void;
    resetError: () => void;
};

const initState: Omit<HttpResponse, "setError" | "resetError"> = {
    status: 200,
    message: "",
};

const useHttpResponse = create<HttpResponse>((set) => ({
    ...initState,
    resetError: () => set((state) => initState),
    setError: (res) =>
        set(() => ({
            message: "Error",
            status: res.status,
        })),
}));

export default useHttpResponse;
