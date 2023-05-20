import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <main className="flex flex-col">
            <Navbar />
            <div className="container py-12">{children}</div>
        </main>
    );
}
function Navbar() {
    return (
        <nav className="border-b-2">
            <div className="container flex flex-row gap-3 py-2">
                <p className="font-semibold">Discord Bot</p>
            </div>
        </nav>
    );
}
