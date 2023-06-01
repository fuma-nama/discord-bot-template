"use client";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "ui/components/select";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitchItem() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return <></>;

    return (
        <div className="flex flex-row gap-8 px-2 py-1.5 text-sm outline-none items-center">
            <p className="mr-auto">Theme</p>
            <Select value={theme} onValueChange={setTheme}>
                <SelectTrigger className="w-24 h-7 text-foreground text-xs">
                    <SelectValue placeholder="Select a theme" />
                </SelectTrigger>

                <SelectContent position="popper">
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
