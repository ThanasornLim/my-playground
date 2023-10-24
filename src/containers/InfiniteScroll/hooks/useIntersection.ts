"use client";

import { useEffect } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";

interface IntersectionProps {
    inViewOptions?: IntersectionOptions;
    callback: (...args: any[]) => void;
}

export function useIntersection({
    inViewOptions,
    callback,
}: IntersectionProps) {
    const { ref, inView } = useInView(inViewOptions);

    useEffect(() => {
        if (!callback || !inView) return;
        callback();
    }, [inView]);

    return {
        ref,
        inView,
    };
}
