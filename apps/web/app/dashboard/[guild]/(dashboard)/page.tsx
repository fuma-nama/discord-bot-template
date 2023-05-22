import { prisma } from "@/utils/prisma";
import { DatabaseIcon, TimerIcon, HardDriveIcon } from "lucide-react";
import { ReactNode } from "react";
const formatter = Intl.NumberFormat();

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
                    icon={<DatabaseIcon className="w-10 h-10 text-dominant" />}
                    title="Rows Created"
                    body={formatter.format(count)}
                />
                <Card
                    icon={<TimerIcon className="w-10 h-10 text-dominant" />}
                    title="Last Record"
                    body={last?.value ?? "No Records"}
                />
                <Card
                    icon={<HardDriveIcon className="w-10 h-10 text-dominant" />}
                    title="Storage"
                    body={`${count}/1000`}
                />
            </div>
            <div className="grid grid-cols-3">
                <div className="col-span-2 h-40"></div>
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
