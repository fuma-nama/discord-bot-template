"use client";
import { Tabs, TabsList, TabsTrigger } from "ui/components/tabs";
import { useParams, usePathname, useRouter } from "next/navigation";

export function PageTabs() {
    const router = useRouter();
    const { guild } = useParams() as { guild: string };
    const paths = usePathname().split("/");
    if (paths.length > 4) return <div className="mb-8" />;

    const value = paths[3] ?? "";

    return (
        <Tabs
            value={value}
            onValueChange={(e) => router.push(`/dashboard/${guild}/${e}`)}
            className="mt-4 mb-8"
        >
            <TabsList className="max-w-fit">
                <TabsTrigger value="">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
        </Tabs>
    );
}
