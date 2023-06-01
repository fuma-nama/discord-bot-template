import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "ui/components/table";
import { StorageForm } from "./form";
import { prisma } from "@/utils/prisma";
import { DeleteButton } from "./del-button";

export default async function StoragePage({
    params: { guild },
}: {
    params: { guild: string };
}) {
    const records = await prisma.test.findMany({
        where: {
            guild_id: guild,
        },
    });

    return (
        <>
            <h1 className="text-2xl font-bold">Storage</h1>
            <p className="text-muted-foreground text-sm">
                A simple storage that allows you to jot down some useful notes
                or data
            </p>
            <StorageForm guild={guild} />
            <Table>
                <TableCaption>A list of recent records.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Value</TableHead>
                        <TableHead className="text-right" />
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {records.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="font-medium">
                                {row.id}
                            </TableCell>
                            <TableCell>{row.value}</TableCell>
                            <TableCell className="text-right">
                                <DeleteButton guild={guild} id={row.id} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
