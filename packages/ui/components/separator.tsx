import { ComponentProps } from "react";

export function Separator(props: ComponentProps<"svg">) {
    return (
        <svg
            fill="none"
            shapeRendering="geometricPrecision"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M16.88 3.549L7.12 20.451" />
        </svg>
    );
}
