import { session } from "@/utils/auth/server";

export default function DashboardPage() {
    const data = session();

    return <div>{data}</div>;
}
