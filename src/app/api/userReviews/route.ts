import { NextResponse } from "next/server";
import userReviews from "@/entities/user/api/data/userReviews.json";
export async function GET() {
    return NextResponse.json(userReviews);
}