/* eslint-disable no-console */
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
export const dbConnect = async () => {
    try {
        await prisma.$connect();
        console.log("🚀 Database connected successfully");
    } catch (error) {
        console.error("❌ Error connecting to database:", error);
    }
}