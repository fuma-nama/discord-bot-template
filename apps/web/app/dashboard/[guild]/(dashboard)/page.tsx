import { buttonVariants } from "ui/components/button";
import { prisma } from "@/utils/prisma";
import { DatabaseIcon, TimerIcon, HardDriveIcon } from "ui/icons";
import Link from "next/link";
import { ReactNode } from "react";
const formatter = Intl.NumberFormat();

/**
 * Guild Overview
 */
export default async function GuildPage({
    params,
}: {
    params: { guild: string };
}) {
    const last = await prisma.test.findFirst({
        where: { guild_id: params.guild },
        orderBy: [{ id: "desc" }],
    });

    const count = await prisma.test.count({
        where: { guild_id: params.guild },
    });

    return (
        <>
            <div className="grid gird-cols-1 md:grid-cols-3 gap-4">
                <Card
                    icon={<DatabaseIcon className="w-10 h-10" />}
                    title="Rows Created"
                    body={formatter.format(count)}
                />
                <Card
                    icon={<TimerIcon className="w-10 h-10" />}
                    title="Last Record"
                    body={last?.value ?? "No Records"}
                />
                <Card
                    icon={<HardDriveIcon className="w-10 h-10" />}
                    title="Storage"
                    body={`${count}/1000`}
                />
                <div className="rounded-xl p-4 md:p-8 max-md:row-start-1 md:col-span-2 bg-gradient-to-br from-purple-200 to-cyan-300 text-slate-900 border-[1px]">
                    <h3 className="text-xl font-semibold">
                        The Best Discord AI.
                    </h3>
                    <p className="text-slate-800 text-sm">
                        The Generative AI powered by OpenAI
                    </p>
                    <div className="mt-auto pt-4 md:pt-6">
                        <Link
                            href={`/dashboard/${params.guild}/features/ai`}
                            className={buttonVariants({
                                variant: "secondary",
                            })}
                        >
                            Try Now
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-4 border-[1px] rounded-lg">
                    <h3 className="text-lg font-semibold">Tasks</h3>

                    <ul className="mt-auto divide-y-[1px] divide-border">
                        {["Buy a coffee", "Coding", "Daily Meeting"].map(
                            (item, i) => (
                                <li
                                    key={i}
                                    className="text-muted-foreground text-sm py-2 last:pb-0"
                                >
                                    {item}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}

function Card({
    body,
    title,
    icon,
}: {
    title: ReactNode;
    body: ReactNode;
    icon: ReactNode;
}) {
    return (
        <div className="border-[1px] rounded-lg p-4 flex flex-row gap-3">
            {icon}
            <div className="flex-1 w-0">
                <h2 className="text-muted-foreground text-sm">{title}</h2>
                <p className="font-semibold text-lg whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {body}
                </p>
            </div>
        </div>
    );
}
