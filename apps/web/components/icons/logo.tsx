import { ComponentProps } from "react";

export function Logo(props: ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 100 100" {...props}>
            <g clipPath="url(#clip0_133_1294)">
                <mask
                    id="mask0_133_1294"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                >
                    <path d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z" />
                </mask>
                <g mask="url(#mask0_133_1294)">
                    <path d="M-3 102V0H88.5L35 102H-3Z" fill="currentColor" />
                    <path
                        d="M50 102L93.5 18L103 0V102H50Z"
                        fill="currentColor"
                    />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_133_1294">
                    <rect width="100" height="100" />
                </clipPath>
            </defs>
        </svg>
    );
}
