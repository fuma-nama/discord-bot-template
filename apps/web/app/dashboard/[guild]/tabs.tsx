"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams, usePathname, useRouter } from "next/navigation";

export function PageTabs() {
    const router = useRouter();
    const { guild } = useParams() as { guild: string };
    const value = usePathname().split("/")[3] ?? "";

    return (
        <Tabs
            value={value}
            onValueChange={(e) => router.push(`/dashboard/${guild}/${e}`)}
            className="my-4"
        >
            <TabsList>
                <TabsTrigger value="">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
        </Tabs>
    );
}
