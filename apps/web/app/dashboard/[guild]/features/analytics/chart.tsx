"use client";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export function Chart() {
    return (
        <ResponsiveContainer className="w-full" height={350}>
            <BarChart
                margin={{
                    left: -30,
                }}
                data={[
                    {
                        name: "Mon",
                        value: 10,
                    },
                    {
                        name: "Tue",
                        value: 7,
                    },
                    {
                        name: "Wed",
                        value: 6,
                    },
                    {
                        name: "Thur",
                        value: 1,
                    },
                    {
                        name: "Fri",
                        value: 2,
                    },
                    {
                        name: "Sat",
                        value: 8,
                    },
                    {
                        name: "Sun",
                        value: 4,
                    },
                ]}
            >
                <Bar dataKey="value" fill="#c084fc" radius={[4, 4, 0, 0]} />
                <XAxis
                    dataKey="name"
                    fontSize={12}
                    color="#888888"
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    fontSize={12}
                    color="#888888"
                    axisLine={false}
                    tickLine={false}
                />
            </BarChart>
        </ResponsiveContainer>
    );
}
