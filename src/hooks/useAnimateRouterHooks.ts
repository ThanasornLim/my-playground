"use client";
import { ExtendedDocument } from "@/types/extendedDocument";
import { useRouter } from "next/navigation";
import { flushSync } from "react-dom";

export default function useAnimatedRouter() {
    const router = useRouter();
    const viewTransitionStatus = () => {
        const extendedDocument = document as ExtendedDocument;
        let status = "Browser not support View Transitions API";
        if (extendedDocument?.startViewTransition) {
            status = "Support View Transitions API";
        }

        return status;
    };

    const animateRoute = (url: string) => {
        const extendedDocument = document as ExtendedDocument;
        router.prefetch(url);

        if (!extendedDocument.startViewTransition) {
            return router.push(url);
        } else {
            console.log("?");
            extendedDocument.startViewTransition(() => {
                flushSync(() => {
                    router.push(url);
                });
            });
        }
    };

    return { animateRoute, viewTransitionStatus };
}
