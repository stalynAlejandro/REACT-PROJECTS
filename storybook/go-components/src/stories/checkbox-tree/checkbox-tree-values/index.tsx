import React from "react";
import Pencil from "../icons/pencil-light";

export const example: any = [
    {
        label: "test",
        value: "1",
        children: [
            {
                label: "test2",
                value: "2",
                children: [],
                icon: <Pencil />,
            },
            {
                label: "test3",
                value: "3",
                children: [],
            },
        ],
    },
    {
        label: "test4",
        value: "4",
        children: [
            {
                label: "test5",
                value: "5",
                children: [],
            },
            {
                label: "test6",
                value: "6",
                children: [
                    {
                        label: "test7",
                        value: "7",
                        children: [],
                    },
                    {
                        label: "test8",
                        value: "8",
                        children: [],
                    },
                ],
            },
        ],
    },
];
