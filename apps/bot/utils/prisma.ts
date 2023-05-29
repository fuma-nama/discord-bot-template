import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient;
}

const createClient = () => {
    if (process.env.NODE_ENV === "development" && globalThis.prisma != null) {
        return globalThis.prisma;
    }

    return (globalThis.prisma = new PrismaClient());
};

export const prisma = createClient();
