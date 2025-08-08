// src/app/api/auth/register/route.ts
import { NextResponse } from "next/server";
import { registerAdmin } from "@/services/auth.service";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const user = await registerAdmin(name, email, password);
    return NextResponse.json({ success: true, user });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ success: false, message }, { status: 400 });
  }
}
