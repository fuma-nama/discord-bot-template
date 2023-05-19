import { producer } from "@/utils/kafka";
import { NextResponse } from "next/server";

export async function POST() {
    const res = await producer.produce("send_message", { name: "Test" });

    return NextResponse.json(res);
}
