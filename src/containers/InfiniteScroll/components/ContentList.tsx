import { Tasks } from "@/containers/Task/hooks/useTask";
import Paper from "@/components/UI/Paper/Paper";
import { Group, Text } from "@mantine/core";
import { InfiniteData } from "@tanstack/react-query";
import React from "react";
import { getTargetPercentage } from "@/utils/getTargetPercentage";

interface ContentListProps {
    data: InfiniteData<any>;
    contentRef: (node?: Element | null | undefined) => void;
}

const ContentList: React.FC<ContentListProps> = ({ contentRef, data }) => {
    return data.pages?.map((group, i) => {
        return (
            <React.Fragment key={`group-${i}`}>
                {group.map(
                    (
                        content: {
                            id: string;
                            name: string;
                        },
                        contentIndex: number
                    ) => {
                        const observeTarget =
                            i === data.pages.length - 1 &&
                            contentIndex === group.length - 3;
                        const targetIndex = getTargetPercentage(group, 75);
                        return (
                            <Paper className="p-4" my={16} key={content.id}>
                                <Group
                                    className="relative"
                                    {...(contentIndex === targetIndex && {
                                        ref: contentRef,
                                        c: "primary",
                                    })}
                                    // {...(observeTarget && {
                                    //     ref: contentRef,
                                    //     c: "primary",
                                    // })}
                                >
                                    <Text>{content.id}</Text>
                                    <Text>{content.name}</Text>
                                </Group>
                            </Paper>
                        );
                    }
                )}
            </React.Fragment>
        );
    });
};

export default ContentList;
